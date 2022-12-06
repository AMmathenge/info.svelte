// @ts-nocheck
/** @type {import('../../../../.svelte-kit/types/src/routes/person/$types'). PageLoad} */
export const load = async({ params }) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${params}`);
    const users = await res.json();
    return {
      users
    };
  }