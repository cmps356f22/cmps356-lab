// import logo from './logo.svg';
// import './App.css';

import { Suspense } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { InfinitySpin } from "react-loader-spinner";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   suspense: true,
  // }
});

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
    return await res.json();
  } else {
    throw new Error("Fetching failed!");
  }
};

const Facts = () => {
  const { isLoading, isError, data } = useQuery(["facts"], fetchFacts, {
    retry: false,
    suspense: true,
  });

  if (isError) {
    return <div style={{ color: "red" }}>Error!</div>;
  } else if (isLoading) {
    // return <div style={{ color: "orange" }}>Loading...</div>;
    return <Spinner />;
  } else if (data) {
    return (
      <div>
        {data
          .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          .map((country) => (
            <>
              <div>{country.name.common}</div>
              <div>{country.translations.ara.official}</div>
            </>
          ))}
      </div>
    );
  }
};

const Spinner = () => <InfinitySpin width="200" color="#777" />;

export default App;
