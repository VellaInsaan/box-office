import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/getAPI';
import { useStarredShow } from '../lib/useStarred';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No Shows Starred</TextCenter>;
  }
  if (starredShowsErr) {
    return <TextCenter>Error Occured</TextCenter>;
  }

  return <TextCenter>Loading ...</TextCenter>;
};

export default Starred;
