import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const[ display, setDisplay] = useState('sound sound sound')
  const handleClick = (x) => {
    setDisplay(x)
  }

  

  const [drums, setDrums] = useState([])
  
  

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8000/soundData");
      const result = await res.json();
      setDrums(result);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="App bg-blue-300 flex items-center justify-evenly m-5" id='drum-machine'>
      <div className="buttons grid grid-cols-3 grid-rows-3 m-2 gap-4">
        {drums.map((sd) => (
          <button className='drum-pad' key={sd.keyCode} id={sd.id} onClick={() => handleClick(sd.id)} >{sd.keyTrigger}<audio src={sd.url} className='clip' id={sd.keyTrigger}></audio></button>
        ))}
       
      </div>
      <div id='display' className=' bg-blue-100  w-2/6 m-2 p-4 text-center justify-items-center '>{display}</div>
    </div>
  );
}

export default App;
