import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import { getAllArtist } from '../../features/artist/artistSlice';

function ArtistsPage() {
  const { artists } = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllArtist(artists));
  }, [artists, dispatch]);

  return (
    <div>
      <Table
        heading="Chokolate city artists"
        thTitle="NAME"
        thDetails="EMAIL"
        thInfo="PHONE"
        tableData={artists}
        btnTitle="View artist"
        btnName="View Tweet"
        route="/users"
      />
    </div>
  );
}

export default ArtistsPage;
