// import logo from './logo.svg';
// import './App.css';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { InfinitySpin } from "react-loader-spinner";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          fallbackRender={({ error }) => <div>Error: {error.message}</div>}
        >
          <Suspense fallback={<Spinner />}>
            <Facts />
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </div>
  );
};

const fetchFacts = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("Fetch failed!");
  }
};

const Facts = () => {
  const query = useQuery(["facts"], fetchFacts, { suspense: true });

  if (query.isError) {
    return <div>Error!</div>;
  } else if (query.isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {query.data.map((country) => (
          <div>{country.name.common}</div>
        ))}
      </>
    );
  }
};

const Spinner = () => <InfinitySpin width="200" color="#777" />;

export default App;
