import { useSelector } from "react-redux";

export default function Display(props) {
  
  const display = useSelector(state => state.display.value);

  return (
    <div id={props.id} className='h-20 flex flex-col' >
      <div className='text-4xl my-auto text-white/60'>{display}</div>
    </div>
  );
};
