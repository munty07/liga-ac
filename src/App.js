import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import Playlist from './Playlist';
import VideoPlayer from './VideoPlayer'
// import logoVideo from './logoVideo.svg';
import './App.css';
import videos from "./videos.json";
import { createContext, useState } from "react";
///
// import comments from "./comments.json";
///
export const VideoContext = createContext(null);

function App() {

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  ///
  // const [comments, setComments] = useState([])
  // ///
  return (
    <VideoContext.Provider value={{ videos, currentVideo, setCurrentVideo }}>
      <div className="App">
        <CustomHeader title={'Liga AC Player'}></CustomHeader>
        <main style={{ display: "flex", justifyContent: "space-between" }}>
          <VideoPlayer />
          <Playlist />
        </main>
        <CustomFooter />
      </div>
    </VideoContext.Provider>

  );
}

export default App;
