import { useEffect, useState } from 'react';
import './App.css';
import BasicDrumKey from './components/BasicDrumKey';
import VolumeControl from './components/VolumeControl';
import Display from './components/Display';
import MainSwitch from './components/MainSwitch';
import { soundQ, soundW, soundE, soundA, soundS, soundD, soundZ, soundX, soundC } from './utils/audioSrc';
import keyDownHandler from './utils/keyDownHandler';

function App() {
  
  const containerStyle = 'flex flex-col p-10 relative  rounded-2xl bg-white/10 shadow-xl shadow-black/30 ';

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => { window.removeEventListener('keydown', keyDownHandler); };
  }, []);

  return (
    <div id='drum-machine' className={containerStyle} >
      <div className='grid grid-cols-3 gap-4' >
        <BasicDrumKey id='keyQ' keyName='Q' src={soundQ.src} soundName={soundQ.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyW' keyName='W' src={soundW.src} soundName={soundW.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyE' keyName='E' src={soundE.src} soundName={soundE.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyA' keyName='A' src={soundA.src} soundName={soundA.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyS' keyName='S' src={soundS.src} soundName={soundS.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyD' keyName='D' src={soundD.src} soundName={soundD.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyZ' keyName='Z' src={soundZ.src} soundName={soundZ.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyX' keyName='X' src={soundX.src} soundName={soundX.soundName}></BasicDrumKey>
        <BasicDrumKey id='keyC' keyName='C' src={soundC.src} soundName={soundC.soundName}></BasicDrumKey>
      </div>
      <Display id='display'></Display>
      <div className='flex flex-row justify-between'>
        <VolumeControl></VolumeControl>
        <MainSwitch></MainSwitch>
      </div>
    </div>
  );
}

export default App;
