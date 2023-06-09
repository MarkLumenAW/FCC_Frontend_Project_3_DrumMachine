import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../reducers/displaySlice";
import clsx from "clsx";

export default function BasicDrumKey(props) {

  const soundRef = useRef();
  const dispatch = useDispatch();

  const volume = useSelector(state => state.volume.value);
  const switchState = useSelector(state => state.switch.value);
  const [isAnimating, setIsAnimating] = useState(false);


  const buttonStyle = clsx(
    'drum-pad text-9xl rounded-md w-40 h-40 transition-all duration-50 ease-in-out',
    {
      'text-white/10 bg-white/10 shadow-lg cursor-not-allowed': switchState,
      'bg-gradient-to-br from-cyan-500 to-pink-500 text-white shadow-lg hover:text-yellow-400': !switchState,
      'animate-class from-blue-400 to-purple-800 text-yellow-400 ring-pink-500 scale-110': isAnimating,
    }
  );

  const handleClick = () => {
    soundRef.current.play();
    dispatch(updateDisplay({ value: `${props.soundName}` }));
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);
  };

  useEffect(() => {
    soundRef.current.volume = volume;
  }, [volume]);

  return (
    <>
      <button disabled={switchState} id={props.id} className={buttonStyle} onClick={handleClick}>{props.keyName}
        <audio id={props.keyName} type="audio/mp3" src={props.src} className='clip' ref={soundRef} />
      </button>
    </>
  );
};


