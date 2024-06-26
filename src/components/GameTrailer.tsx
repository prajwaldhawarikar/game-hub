import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailers(gameId);

  const first = data?.results[0];
  if (first)
    return (
      <video src={first.data[480]} poster={first.preview} controls></video>
    );
  return null;
};

export default GameTrailer;
