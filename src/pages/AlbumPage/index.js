import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import AlbumCard from '../../components/AlbumCard';
import { getAlbum } from '../../features/album/albumSlice';

function AlbumPage() {
  const { album } = useSelector((state) => state.album);
  const albumId = useParams();
  let id = Object.values(albumId)[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbum(id));
  }, [dispatch, id]);
  return (
    <div className="pt-5">
      <Link to="/">
        <h2 className="font-semibold text-white ml-20  text-center bg-blue-500  w-20">
          Go back
        </h2>
      </Link>
      <AlbumCard albumData={album} />
    </div>
  );
}

export default AlbumPage;
