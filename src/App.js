import './App.css';

function App() {
  return (
    <div className="App bg-blue-300 flex items-center justify-evenly m-5" id='drum-machine'>
     
      <div className="buttons grid grid-cols-3 grid-rows-3 m-2 gap-4">
        <button className='drum-pad' id='' >Q<audio src='' className='clip' id='Q'></audio></button>
        <button className='drum-pad ' id='' >W<audio src='' className='clip' id='W'></audio></button>
        <button className='drum-pad' id='' >E<audio src='' className='clip' id='E'></audio></button>
        <button className='drum-pad' id='' >A<audio src='' className='clip' id='A'></audio></button>
        <button className='drum-pad' id='' >S<audio src='' className='clip' id='S'></audio></button>
        <button className='drum-pad' id='' >D<audio src='' className='clip' id='D'></audio></button>
        <button className='drum-pad' id='' >Z<audio src='' className='clip' id='Z'></audio></button>
        <button className='drum-pad' id='' >X<audio src='' className='clip' id='X'></audio></button>
        <button className='drum-pad' id='' >C<audio src='' className='clip' id='C'></audio></button>
      </div>
      <div id='display' className=' bg-blue-100  w-2/6 m-2 p-4 text-center justify-items-center '>screen</div>
    </div>
  );
}

export default App;
