const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons: {seasons.length}</p>
      <p>
        Episodes:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map((season) => (
          <div>
            <p>Season {season.number}</p>
            <p>
              Episodes ={'>'} {season.episodeOrder}
            </p>
            <div>
              Aired : {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
