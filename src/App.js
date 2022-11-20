import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumListPage from './pages/AlbumListPage';
import AlbumPage from './pages/AlbumPage';
import ArtistsPage from './pages/ArtistsPage';

function App() {
  return (
    <div className="bg-gray-100 text-gray-600">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtistsPage />} />
          <Route path="/users/:id" element={<AlbumListPage />} />
          <Route path="/albums/:id" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
