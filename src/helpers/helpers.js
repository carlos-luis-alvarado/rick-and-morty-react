import { URL_API } from "./constants";

export const calculatePages = (page, lastPage) => {

  if (lastPage < 5) {
    const array = [];
    for (let i = 1; i <= lastPage; i++) {
      array.push(i)
    }
    return array;
  }

  let inicio = page - 2;
  let fin = page + 2;

  if (inicio < 1) {
    inicio = 1;
    fin = inicio + 4;
  }
  if (fin > lastPage) {
    fin = lastPage;
    inicio = fin - 4;
  }

  const array = [];
  for (let i = inicio; i <= fin; i++) {
    array.push(i)
  }
  return array;
}

export const fetchDateLoader = async (params, section) => {
  const page = params.page
  const res = await fetch(`${URL_API}/${section}?page=${page}`);
  const data = await res.json()
  return { data, page: Number(page) };
}