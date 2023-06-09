import { useSelector, useDispatch } from "react-redux";
import { changeVolume } from "../reducers/volumeSlice";
import { Icon } from '@iconify/react';
import clsx from "clsx";

export default function VolumeControl(props) {

  const dispatch = useDispatch();
  const volume = useSelector(state => state.volume.value);
  const switchState = useSelector(state => state.switch.value);

  const buttonStyle = clsx(
    'my-auto p-1.5 rounded-full ', {
    'hover:bg-white/10': !switchState,
    'cursor-not-allowed': switchState,
  });

  const inputStyle = clsx(
    'mx-4 transition-all duration-300', {
    '': !switchState,
    '': switchState,
  }
  );

  const muteHandler = () => {
    dispatch(changeVolume({ value: 0 }));
  };

  const maxVolumeHandler = () => {
    dispatch(changeVolume({ value: 1 }));
  };

  return (
    <div className="flex flex-row">
      <button className={buttonStyle}>
        <Icon icon="lucide:volume-x" color={!switchState ? "lightgray" : "gray"} width="20" onClick={muteHandler} />
      </button>
      <input
        disabled={switchState}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => { dispatch(changeVolume({ value: e.target.value })); }}
        className={inputStyle}
        id="volume"
      />
      <button className={buttonStyle}>
        <Icon icon="lucide:volume-2" color={!switchState ? "lightgray" : "gray"} width="20" onClick={maxVolumeHandler} />
      </button>
    </div>
  );
};
