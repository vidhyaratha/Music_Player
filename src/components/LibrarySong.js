import React from "react";


const LibrarySong = ({song,songs,setSongs,setcurrentSong,id,audioRef,isPlaying}) => {
    const songSelectHandler = () => {
        //const selectedSong = songs.filter((state) => state.id === id);
        // setcurrentSong(selectedSong[0]);
            setcurrentSong(song);

            const newSongs = songs.map((song) => {
                    if(song.id === id)
                    {
                        return {
                            ...song,
                            active:true,
                        };
                    }
                    else
                    {
                        return {
                            ...song,
                            active:false
                        };
                    }
                 });
                setSongs(newSongs);
            // if(isPlaying)
            // {
            // const playPromise = audioRef.current.play();
            // if(playPromise !== undefined)
            // {
            //     playPromise.then((audio) => {
            //         audioRef.current.play();
            //     });
            // }
            // }
    };
        
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>

    );
};

export default LibrarySong;