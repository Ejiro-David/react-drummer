import { useEffect, useState } from 'react';

function App() {


  //initialized the state for diplay screen 
  const[ display, setDisplay ] = useState('sound sound sound')


  //the handleClick function recieves the audio url and sound name and updates them respectively
  const handleClick = (x, url) => {
    setDisplay(x)
    const audio = new Audio(url)  
    audio.play(url);
  }


  //handlekey recieves the same props as handleClick as well as keyCode and event listener
  const handleKeyDown = (x, url, key, event) => {
      //conditional statement checks for which known keyCode is matched by the current pressed Key
      if(event.keyCode === key){
        setDisplay(x)
        const audio = new Audio(url)  
        audio.play(url);
      } 
  }

  //initialized all the data for the drum sounds url, keyCodes, sound names etc... to an empty array
  const [drums, setDrums] = useState([])

  //fetch updates the empty array with all the data retrieved from this json link, within app (http://localhost:8000/soundData)
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8000/soundData");
      const result = await res.json();
      setDrums(result);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect ensures drums data is fetch on initial rendering/loading of page
  useEffect(() => {
    fetchData()
  }, [])

  //React App ClassNames contain tailwindCss utility classes
  return (
    <div className="App bg-blue-300 flex items-center justify-evenly m-5" id='drum-machine'>
      <div className="buttons grid grid-cols-3 grid-rows-3 m-2 gap-4">
        {/* maps through the drums data array returned from the fetch and renders each drum pad as a button one by one 
        note each prop in <button> and <audio> is a variable assigned based on keys from the drums data ('drums') array*/}
        {drums.map((sd) => (
          <button className='drum-pad' id={sd.id} onClick={() => handleClick(sd.id, sd.url)} onKeyDown={(event) => handleKeyDown(sd.id, sd.url, sd.keyCode, event)} key={sd.keyCode}  >{sd.keyTrigger}<audio src={sd.url} className='clip' id={sd.keyTrigger} ></audio></button>
          ))}
      </div>
      <div id='display' className=' bg-blue-100  w-2/6 m-2 p-4 text-center justify-items-center '>{display}</div>
    </div>
  );
}

export default App;
