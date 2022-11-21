import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumListPage from './pages/AlbumListPage';
import AlbumPage from './pages/AlbumPage';
import ArtistsPage from './pages/ArtistsPage';
// import Delete from './pages/DeletePage';
import TweetsPage from './pages/TweetsPage';

function App() {
  return (
    <div className="bg-gray-100 h-full text-gray-600">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtistsPage />} />
          <Route path="/users/:id" element={<AlbumListPage />} />
          <Route path="/albums/:id" element={<AlbumPage />} />
          <Route path="/posts/:id" element={<TweetsPage />} />
          {/* <Route path="/delete/:id" element={<Delete />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
