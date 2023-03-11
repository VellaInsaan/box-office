import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt='Unable to find' height='auto' />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : `Country: Unknown`}</p>

      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
