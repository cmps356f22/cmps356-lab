import Head from "next/head";
// import { useEffect, useState } from "react";

async function fetchFacts() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let facts = null;
  if (res.ok) {
    facts = await res.json();
    facts = facts.map((a) => ({
      name: {
        common: a.name.common,
      },
      cca2: a.cca2.toLowerCase(),
    }));
    facts.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  } else {
    throw new Error("Fetching facts failed!");
  }
  return facts;
}

export default function Facts({ facts }) {
  // const [facts, setFacts] = useState(null);

  // useEffect(() => {
  //   fetchFacts().then((facts) => setFacts(facts));
  // }, []);

  return (
    <div>
      <Head></Head>
      <main>
        <h1>Country Facts</h1>
        <select value="-">
          <option disabled value="-">
            -
          </option>
          {facts &&
            facts.map((fact) => (
              <option key={fact.cca2} value={fact.cca2}>
                {fact.name.common}
              </option>
            ))}
        </select>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let facts = null;
  if (res.ok) {
    facts = await res.json();
    // facts = facts.map((a) => ({
    //   name: {
    //     common: a.name.common,
    //   },
    //   cca2: a.cca2.toLowerCase(),
    // }));
    facts.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  } else {
    throw new Error("Fetching facts failed!");
  }
  return {
    props: {
      facts,
    },
  };
}
