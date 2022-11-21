import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Table from '../../components/Table';
import { getAllTweet } from '../../features/tweets/tweetSlice';

function TweetsPage() {
  const dispatch = useDispatch();
  const { tweets } = useSelector((state) => state.tweet);
  const id = useParams();
  const userId = Object.values(id)[0];
  useEffect(() => {
    dispatch(getAllTweet(userId));
  }, [dispatch, userId]);

  return (
    <div className="h-screen">
      <Table
        heading="Tweets"
        thTitle="NAME"
        thDetails="EMAIL"
        thInfo="TWEET"
        btnTitle="Edit"
        btnName="Delete"
        tweet
        tableData={tweets}
      />
    </div>
  );
}

export default TweetsPage;
