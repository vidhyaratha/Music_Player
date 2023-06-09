import React,{useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({audioRef,currentSong,setcurrentSong,songs,songInfo,setSongInfo,isPlaying,setIsPlaying,setSongs}) => {
   
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id)
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
    },[currentSong]);
    // const activeLibraryHandler = () =>
    // {
    //     const newSongs = songs.map((song) => {
    //         if(song.id === currentSong.id)
    //         {
    //             return {
    //                 ...song,
    //                 active:true,
    //             };
    //         }
    //         else
    //         {
    //             return {
    //                 ...song,
    //                 active:false
    //             };
    //         }
    //      });
    //     setSongs(newSongs);
    // }

    const playSongHandler = () => {
           if(isPlaying)
           {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
           }
           else
           {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
           }
    };

   

    const getTime = (time) => {
            return(
                Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
            );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
       setSongInfo({...setSongInfo , currentTime : e.target.value});
    }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward')
        {
            setcurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back')
        {
            if((currentIndex - 1) % songs.length === -1)
            {
                setcurrentSong(songs[songs.length - 1]);
                return;
            }
            setcurrentSong(songs[(currentIndex - 1) % songs.length]);
        }

    };
    

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range"/>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying?faPause:faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
              
    );
};

export default Player;