
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

function App() {
  useEffect(() => {
    anime({
      targets: 'div.box',
      translateY:[
        {value:200, duration : 500},
        {value:0, duration : 800}
      ],
      rotate: {
        value : '1turn',
        // delay:500,
        easing : 'easeInOutSine', 
      },      
      delay: function(el, i ,l){
        console.log(el, i ,l)
        return i*1000}
    });
    
  }, []); // Empty dependency array to run only on mount

  return (
    <>
      <div className=' p-5 flex space-x-5'>
        <div className='box w-20 h-20 bg-red-600 '>  </div>
        <div className='box w-20 h-20 bg-yellow-300'>  </div>
        <div className='box w-20 h-20 bg-blue-600 '>  </div>
        <div className='box w-20 h-20 bg-gray-800'>  </div>
      </div>
    </>
  )
}

export default App
