import { useState } from 'react';
import { CardCaracter } from '../components/CardCharacter';
import { useLoaderData } from 'react-router-dom';
import { PaginationNav } from '../components/PaginationNav';
import { fetchDateLoader } from '../helpers/helpers';
import { SECTION_CHARACTERS } from '../helpers/constants';

export const getCharactes = async ({ params }) => {
  const { data: characters, page } = await fetchDateLoader(params, SECTION_CHARACTERS);
  return { characters, page }
}

export const Characters = () => {
  const { characters, page: initialPage } = useLoaderData();
  const [page, setPage] = useState(initialPage);

  return <>
    <div className='container mx-auto py-8'>
      <div className="flex justify-center flex-wrap gap-5">
        {characters && characters.results.map((character, index) => (
          <CardCaracter key={index} character={character} />
        ))}
      </div>
    </div>
    <PaginationNav page={page} setPage={setPage} section={'characters'} lastPage={characters.info.pages} />
  </>
}