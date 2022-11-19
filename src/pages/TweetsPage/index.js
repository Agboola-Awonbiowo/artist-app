import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom';
import Table from '../../components/Table'
import { getAllTweet } from '../../features/tweet/tweetSlice';

function TweetsPage() {
    const {tweets, } = useSelector((state) => state.tweet)
    const userId = useParams();
  let id = Object.values(userId)[0];
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getAllTweet(id))
    }, [dispatch, id])
 
  return (
    <div>
        <Table heading="Tweets"
        tableData={tweets}
        btnTitle="View Album"
        tweetRoute="/users" 
        />
    </div>
  )
}

export default TweetsPage