const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const fetcher = async (...args) => {
//   const res = await fetch(...args);
//   return await res.json();
// };

export { fetcher };
