
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

function App() {
var playpause =
//  useEffect(() => {

  anime({
    targets: 'div.box',
    translateY: [
      {value:200, duration:500},
      {value:0, duration:800}
    ],
    rotate:{
      value: '1turn',
      easing: 'easeInOutSine',
    },
    delay: function(el, i , l) {return i*1000},
    autoplay : false
  });

// }, [])

  return (
    <div className='p-5'>

    <div className='btns flex space-x-3 w-full justify-center'> 
    <button onClick={()=> playpause.play()} className='play bg-slate-300 text-black rounded-lg px-3 py-1 font-bold hover:text-white hover:bg-black'>Play </button>
    <button onClick={()=> playpause.pause()} className='pause bg-slate-300 text-black rounded-lg px-3 py-1 font-bold hover:text-white hover:bg-black'>Pause </button>
    </div>

    <div className='boxes  flex space-x-12 mt-28'>
      <div className='box redbox w-20 h-20 bg-red-500'></div>
      <div className='box yellowbox w-20 h-20 bg-yellow-300'></div>
      <div className='box graybox w-20 h-20 bg-gray-400'></div>
      <div className='box bluebox w-20 h-20 bg-blue-400'></div>
    </div>
    </div>
  )
}

export default App
