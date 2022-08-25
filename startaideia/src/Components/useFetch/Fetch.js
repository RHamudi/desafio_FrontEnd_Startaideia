/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export async function Get(url, setDados) {
  const res = await fetch(url);
  const data = await res.json();
  setDados(data);
}
