import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PaginationNav } from '../components/PaginationNav';
import { CardLocation } from '../components/CardLocations';
import { fetchDateLoader } from '../helpers/helpers';
import { SECTION_LOCATIONS } from '../helpers/constants';

export const getLocations = async ({ params }) => {
  const { data: locations, page } = await fetchDateLoader(params, SECTION_LOCATIONS);
  return { locations, page }
}

export const Locations = () => {
  const { locations, page: initialPage } = useLoaderData();
  const [page, setPage] = useState(initialPage);

  return <>
    <div className='container mx-auto py-8'>
      <div className="flex justify-center flex-wrap gap-5">
        {locations && locations.results.map((location, index) => (
          < CardLocation key={index} location={location} />
        ))}
      </div>
    </div>
    <PaginationNav page={page} setPage={setPage} section={'locations'} lastPage={locations.info.pages} />
  </>
}