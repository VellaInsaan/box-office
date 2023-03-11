import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getShowById } from '../api/getAPI';
import { TextCenter } from '../components/common/TextCenter';
import Cast from '../components/shows/Cast';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import ShowMainData from '../components/shows/ShowMainData';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to='/'>Go to Home</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            network={showData.network}
            premiered={showData.premiered}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  if (showError) {
    return <TextCenter>Error getting data: {showError.message}</TextCenter>;
  }

  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
