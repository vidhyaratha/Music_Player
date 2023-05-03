import React from 'react';
import LibrarySong from './LibrarySong';


const Library = ({songs,setSongs,setcurrentSong,audioRef,isPlaying,libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className='library-songs'>
                {songs.map((song) => (
                    <LibrarySong song={song} songs={songs} setSongs={setSongs} setcurrentSong={setcurrentSong}
                                 id={song.id} key={song.id} isPlaying={isPlaying} audioRef={audioRef}/>
                ))}
            </div>
        </div>
    );
}


export default Library;