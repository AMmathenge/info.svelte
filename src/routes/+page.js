// import adapter from '@sveltejs/adapter-auto';
// import preprocess from "svelte-preprocess";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter()
//   },
//   preprocess: [
//     preprocess({
//       postcss: true,
//     }),
//   ],
// };



/** @type {import('./$types').PageLoad} */
export const load = async({  }) => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/users/`);
  const users = await res.json();
  return {
    users
  };
}