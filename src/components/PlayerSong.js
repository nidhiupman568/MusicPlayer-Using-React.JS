// FileName: PlayerSong.js 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
	faPlay, 
	faAngleLeft, 
	faAngleRight, 
	faPause, 
} from "@fortawesome/free-solid-svg-icons"; 

const Player = ({ 
	currentSong, 
	isPlaying, 
	setIsPlaying, 
	audioRef, 
	setSongInfo, 
	songInfo, 
	songs, 
	setCurrentSong, 
	id, 
	setSongs, 
}) => { 
	//useEffect 
	const activeLibraryHandler = (nextPrev) => { 
		const newSongs = songs.map((song) => { 
			if (song.id === nextPrev.id) { 
				return { 
					...song, 
					active: true, 
				}; 
			} else { 
				return { 
					...song, 
					active: false, 
				}; 
			} 
		}); 
		setSongs(newSongs); 
		console.log("Hey from useEffect form player JS"); 
	}; 
	//Event Handlers 
	const dragHandler = (e) => { 
		audioRef.current.currentTime = e.target.value; 
		setSongInfo({ ...songInfo, currentTime: e.target.value }); 
	}; 
	const playSongHandler = () => { 
		if (isPlaying) { 
			audioRef.current.pause(); 
			setIsPlaying(!isPlaying); 
		} else { 
			audioRef.current.play(); 
			setIsPlaying(!isPlaying); 
		} 
	}; 

	const getTime = (time) => 
		Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2); 
	const skipTrackHandler = async (direction) => { 
		let currentIndex = songs.findIndex( 
			(song) => song.id === currentSong.id 
		); 
		if (direction === "skip-forward") { 
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]); 
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]); 
		} 
		if (direction === "skip-back") { 
			if ((currentIndex - 1) % songs.length === -1) { 
				await setCurrentSong(songs[songs.length - 1]); 
				// playAudio(isPlaying, audioRef); 
				activeLibraryHandler(songs[songs.length - 1]); 

				return; 
			} 
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]); 
			activeLibraryHandler(songs[(currentIndex - 1) % songs.length]); 
		} 
		if (isPlaying) audioRef.current.play(); 
	}; 
	//adding the styles 
	const trackAnim = { 
		transform: `translateX(${songInfo.animationPercentage}%)`, 
	}; 
	return ( 
		<div className="player"> 
			<div className="time-control"> 
				<p>{getTime(songInfo.currentTime)}</p> 
				<div 
					style={{ 
						background: 
`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`, 
					}} 
					className="track"
				> 
					<input 
						min={0} 
						max={songInfo.duration || 0} 
						value={songInfo.currentTime} 
						onChange={dragHandler} 
						type="range"
					/> 
					<div style={trackAnim} className="animate-track"></div> 
				</div> 
				<p> 
					{songInfo.duration ? getTime(songInfo.duration) : "00:00"} 
				</p> 
			</div> 
			<div className="play-control"> 
				<FontAwesomeIcon 
					onClick={() => skipTrackHandler("skip-back")} 
					size="2x"
					className="skip-back"
					icon={faAngleLeft} 
				/> 
				{!isPlaying ? ( 
					<FontAwesomeIcon 
						onClick={playSongHandler} 
						size="2x"
						className="play"
						icon={faPlay} 
					/> 
				) : ( 
					<FontAwesomeIcon 
						onClick={playSongHandler} 
						size="2x"
						className="pause"
						icon={faPause} 
					/> 
				)} 

				<FontAwesomeIcon 
					onClick={() => skipTrackHandler("skip-forward")} 
					size="2x"
					className="skip-forward"
					icon={faAngleRight} 
				/> 
			</div> 
		</div> 
	); 
}; 

export default Player; 
