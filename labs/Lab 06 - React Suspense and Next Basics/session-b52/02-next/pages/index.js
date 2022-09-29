import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

// const getClientSideProps = async () => {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   let facts;
//   if (res.ok) {
//     facts = await res.json();
//     facts.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
//   } else {
//     throw new Error("Fetching failed!");
//   }

//   return {
//     props: {
//       facts,
//     },
//   };
// };

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

export default function Home({ facts }) {
  // export default function Home() {
  // const [facts, setFacts] = useState(null);

  // useEffect(() => {
  //   getClientSideProps().then((data) => setFacts(data.props.facts));
  // }, []);

  return (
    <div>
      <Head>
        <title>Country Facts</title>
      </Head>
      <main>
        <div>
          {facts &&
            facts.map((fact) => <div key={fact.cca2}>{fact.name.common}</div>)}
        </div>
      </main>
    </div>
  );
}
