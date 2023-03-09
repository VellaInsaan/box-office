import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/getAPI';
import { useStarredShow } from '../lib/useStarred';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShow();
  const { data: starredShows, error: starredShowsErr } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <div>No Shows Starred</div>;
  }
  if (starredShowsErr) {
    return <div>Error Occured</div>;
  }

  return <div>Loading ...</div>;
};

export default Starred;
