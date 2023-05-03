import React,{useState,useRef} from "react";
import Song from "./components/Song" ;
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from './components/Nav';

function App() {

const [songs,setSongs] = useState(data());
const [currentSong,setcurrentSong] = useState(songs[0]);
const [isPlaying,setIsPlaying] = useState(false);
const audioRef = useRef(null);
const [songInfo,setSongInfo] = useState({currentTime : 0, duration : 0});
const [libraryStatus,setlibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current= e.target.currentTime;
  const songLength = e.target.duration;
  setSongInfo({...songInfo,currentTime : current, duration:songLength})
};

const autoPlayHandler = () => {
    if(isPlaying)
    {
      audioRef.current.play();
    }
};

const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setcurrentSong(songs[(currentIndex + 1) % songs.length]);
    // if(isPlaying)
    // {
    //   audioRef.current.play();
    // }
};

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
     <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus}/>
     <Song currentSong={currentSong} />
     <Player audioRef={audioRef} setcurrentSong={setcurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setSongs={setSongs}/>
     <Library audioRef={audioRef} isPlaying={isPlaying} songs={songs} setcurrentSong={setcurrentSong} setSongs={setSongs} libraryStatus={libraryStatus}/>
     <audio onTimeUpdate={timeUpdateHandler}
            onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onLoadedData={autoPlayHandler} ref={audioRef} src={currentSong.audio}></audio> 
     </div>
    
  );
}

export default App;
