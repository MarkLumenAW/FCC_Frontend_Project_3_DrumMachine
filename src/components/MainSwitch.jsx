import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSwitch } from '../reducers/switchSlice';
import { updateDisplay } from '../reducers/displaySlice';
import clsx from "clsx";

export default function BankSwitch(props) {

  const dispatch = useDispatch();
  const switchState = useSelector(state => state.switch.value);

  const buttonStyle = clsx(
    'my-auto p-1.5 rounded-full hover:bg-white/10');

  const toggleSwitchHandler = () => {
    console.log(switchState ? 'Switch is on.' : 'Switch is off.');
    dispatch(toggleSwitch());
    dispatch(updateDisplay(
      switchState ? { value: "ROCK ON" } : { value: "SWITCH OFF" }
    ));
  };

  return (
    <button className={buttonStyle} >
      <Icon icon="icomoon-free:switch" color={switchState ? "white" : "gray"}width="20" onClick={toggleSwitchHandler} />
    </button>
  );
};
