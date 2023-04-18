import { Searchbar, Sidebar, MusicPlayer } from "./components";
import { Route, Routes } from "react-router-dom";

import { AroundYou, Discover, TopArtists, TopCharts, SongDetails, Search, ArtistDetails } from './pages'

export default function App() {
  return (
    <div>
      <Sidebar />
      <Searchbar />
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
            <Route path="/around-you" element={<AroundYou />} />
            <Route path="/artists/:id" element={<ArtistDetails />} />
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </div>
      </div>

      {/* MusicPlayer */}
      <div>
        <MusicPlayer />
      </div>
    </div>
  )
}