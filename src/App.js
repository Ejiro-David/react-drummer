import { useState } from "react";


var SoundData = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-4-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Dsc-Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "RP4-KICK-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Dry-Ohh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "punchy-kick-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Brk-Snr",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

function App() {
  //initialized the state for diplay screen
  const [display, setDisplay] = useState("sound sound sound");

  //the handleClick function recieves the audio url and sound name and updates them respectively
  const handleClick = (x, url) => {
    setDisplay(x);
    const audio = new Audio(url);
    audio.play(url);
  };

  //handlekey recieves the same props as handleClick as well as keyCode and event listener
  const handleKeyDown = (x, url, key, event) => {
    //conditional statement checks for which known keyCode is matched by the current pressed Key
    if (event.keyCode === key) {
      setDisplay(x);
      const audio = new Audio(url);
      audio.play(url);
    }
  };

  //initialized all the data for the drum sounds url, keyCodes, sound names etc... to soundData
  const [drums] = useState(SoundData);

  //React App ClassNames contain tailwindCss utility classes
  return (
    <div
      className="App bg-blue-300 flex items-center justify-evenly m-5"
      id="drum-machine"
    >
      <div className="buttons grid grid-cols-3 grid-rows-3 m-2 gap-4">
        {/* maps through the drums data array returned from the fetch and renders each drum pad as a button one by one 
        note each prop in <button> and <audio> is a variable assigned based on keys from the drums data ('drums') array*/}
        {drums.map((sd) => (
          <button
            className="drum-pad"
            id={sd.id}
            onClick={() => handleClick(sd.id, sd.url)}
            onKeyDown={(event) =>
              handleKeyDown(sd.id, sd.url, sd.keyCode, event)
            }
            key={sd.keyCode}
          >
            {sd.keyTrigger}
            <audio src={sd.url}  className="clip" id={sd.keyTrigger}></audio>
          </button>
        ))}
      </div>
      <div
        id="display"
        className=" bg-blue-100  w-2/6 m-2 p-4 text-center justify-items-center "
      >
        {display}
      </div>
    </div>
  );
}

export default App;
