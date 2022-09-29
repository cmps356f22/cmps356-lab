import Layout from "layouts/layout";
import { useRouter } from "next/router";

const fetchFacts = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("Fetch failed!");
  }
};

export default function Facts({ facts }) {
  const router = useRouter();

  return (
    <Layout title="Country Facts" home>
      {facts && (
        <select
          value="-"
          onChange={(e) => {
            router.push(`/${e.target.value}`);
          }}
        >
          <option value="-" disabled>
            -
          </option>
          {facts.map((fact) => (
            <option key={fact.cca2} value={fact.cca2}>
              {fact.name.common}
            </option>
          ))}
        </select>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
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
  return {
    props: {
      facts,
    },
  };
}
