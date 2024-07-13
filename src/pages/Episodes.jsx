import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PaginationNav } from '../components/PaginationNav';
import { CardEpisode } from '../components/CardEpisode';
import { fetchDateLoader } from '../helpers/helpers';
import { SECTION_CAPITULES } from '../helpers/constants';

export const getEpisodes = async ({ params }) => {
  const { data: episodes, page } = await fetchDateLoader(params, SECTION_CAPITULES);
  return { episodes, page }
}

export const Episodes = () => {
  const { episodes, page: initialPage } = useLoaderData();
  const [page, setPage] = useState(initialPage);

  return <>
    <div className='container mx-auto py-8'>
      <div className="flex justify-center flex-wrap gap-5">
        {episodes && episodes.results.map((episode, index) => (
          < CardEpisode key={index} episode={episode} />
        ))}
      </div>
    </div>
    <PaginationNav page={page} setPage={setPage} section={'episodes'} lastPage={episodes.info.pages} />
  </>
}