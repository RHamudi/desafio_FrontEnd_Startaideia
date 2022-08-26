/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export async function Get(url, setDados) {
  const res = await fetch(url);
  const data = await res.json();
  setDados(data);
}

export async function Post(url, enviar) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(enviar),
  });
}

export async function Delete(url) {
  const res = await fetch(url, {
    method: "DELETE",
  });
}
