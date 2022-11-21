import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { listAlbum } from '../../features/album/albumSlice';

function AlbumListPage() {
  const dispatch = useDispatch();
  const userId = useParams();
  let id = Object.values(userId)[0];
  const { albums } = useSelector((state) => state.album);
  useEffect(() => {
    dispatch(listAlbum(id));
  }, [id, dispatch]);

  const location = useLocation();

  const { name } = location.state;

  return (
    <>
      <div className="pt-[40px]">
     <Card>
       <p className='mb-[10px]'>Artist</p>
       {name}
       </Card>
        <Table
          heading="Albums"
          thTitle="TITLE"
          tableData={albums}
          album
          btnTitle="View Album"
          route="/albums"
        />
      </div>
    </>
  );
}

export default AlbumListPage;
