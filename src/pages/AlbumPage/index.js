import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AlbumCard from '../../components/AlbumCard'
import { getAlbum } from '../../features/album/albumSlice'

function AlbumPage() {
    const {album} = useSelector((state) => state.album)
    const albumId = useParams();
  let id = Object.values(albumId)[0];
  console.log(id)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getAlbum(id))
    },[dispatch, id])
  return (
    <div>
       <AlbumCard albumData={album} />
    </div>
  )
}

export default AlbumPage