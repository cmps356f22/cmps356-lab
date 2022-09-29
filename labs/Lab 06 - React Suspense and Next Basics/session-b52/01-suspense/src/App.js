// import logo from './logo.svg';
// import './App.css';

import { Suspense } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { InfinitySpin } from "react-loader-spinner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div style={{ color: "red" }}>Error: {error.message}</div>
          )}
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
    const facts = await res.json();
    facts.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
    return facts;
  } else {
    throw new Error("Fetching failed!");
  }
};

const Facts = () => {
  const query = useQuery(["facts"], fetchFacts, {
    retry: false,
    suspense: true,
  });

  // if (query.isLoading) {
  //   return <div style={{ color: "orange" }}>Loading...</div>;
  // }

  // if (query.isError) {
  //   return <div style={{ color: "red" }}>Error!</div>;
  // }

  // if (query.data) {
  return (
    <div>
      {query.data.map((country) => (
        <div key={country.cca2}>{country.name.common}</div>
      ))}
    </div>
  );
  // }
};

const Spinner = () => <InfinitySpin width="200" color="#777" />;

export default App;
