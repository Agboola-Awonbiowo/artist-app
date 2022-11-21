import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { getAllArtist } from '../../features/artist/artistSlice';

function ArtistsPage() {
  const { artists } = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllArtist(artists));
  }, [artists, dispatch]);

  return (
    <div className='pt-[40px]'>
      <Card>Chocolate city artists</Card>
      <Table
        thTitle="NAME"
        thDetails="EMAIL"
        thInfo="PHONE"
        tableData={artists}
        btnTitle="View artist"
        btnName="View Tweet"
        route="/users"
        page="/posts"
        artists
      />
    </div>
  );
}

export default ArtistsPage;
