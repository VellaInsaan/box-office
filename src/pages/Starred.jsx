import { useStarredShow } from '../lib/useStarred';

const Starred = () => {
  const [starredShow] = useStarredShow();
  return <div>Starred Page , starred {starredShow.length}</div>;
};

export default Starred;
