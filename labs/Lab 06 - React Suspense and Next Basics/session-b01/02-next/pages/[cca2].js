import Layout from "layouts/layout";

export default function Country({ country }) {
  return (
    <Layout title={country.name.common}>
      <div>
        <div>CCA2: {country.cca2}</div>
        <div>
          <img src={country.flags.svg} alt="" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let facts = null;
  if (res.ok) {
    facts = await res.json();
    facts = facts.map((a) => ({
      cca2: a.cca2.toLowerCase(),
    }));
    facts.sort((a, b) => (a.cca2 > b.cca2 ? 1 : -1));
  } else {
    throw new Error("Fetching facts failed!");
  }
  const paths = facts.map((country) => ({ params: { cca2: country.cca2 } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.cca2}`
  );
  let country = null;

  if (res.ok) {
    country = await res.json();
    country = country[0];
  } else {
    throw new Error("Fetching country facts failed!");
  }
  return {
    props: {
      country,
    },
  };
}
