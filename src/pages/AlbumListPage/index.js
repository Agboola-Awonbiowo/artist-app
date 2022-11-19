import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Table from '../../components/Table';
import { listAlbum } from '../../features/album/albumSlice';

function AlbumListPage() {
  const dispatch = useDispatch();
  const userId = useParams();
  let id = Object.values(userId)[0];
  const { albums} = useSelector((state) => state.album);
  useEffect(() => {
    dispatch(listAlbum(id));
  }, [id, dispatch]);

  const location = useLocation();

  const { name } = location.state;

  return (
    <>
    <div className="pt-[40px]">
      <div className=" flex  flex-col justify-center overflow-hidden ">
        <div className="relative bg-white px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
