import anime from 'animejs';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const Card = () => {

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handlemousemove = (e) => {
      const mouseX = (window.innerWidth / 2 - e.clientX) / 20;
      const mouseY = (window.innerWidth / 2 - e.clientY) / 20;

      cardRef.current.style.transform = `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
      titleRef.current.style.transform = 'translateZ(45px)'
      descriptionRef.current.style.transform = 'translateZ(45px)'
      imageRef.current.style.transform = 'translateZ(45px) rotateZ(-10deg)'
      // console.log(mouseX, mouseY)
    }

    const handlemouseleave = (e) => {
      cardRef.current.style.transform = `rotateY(0deg) rotate(0deg)`;
      cardRef.current.style.transition = 'all 0.5s ease';
      
      titleRef.current.style.transition = 'all 0.75s ease-out';
      descriptionRef.current.style.transition = 'all 0.75s ease-out';
      imageRef.current.style.transition = 'all 0.75s ease-out';


      titleRef.current.style.transform = 'translateZ(0px)'
      descriptionRef.current.style.transform = 'translateZ(0px)'
      imageRef.current.style.transform = 'translateZ(0px)'
    }

    const handlemouseenter = (e) => {
      cardRef.current.style.transition = 'none';
    }

    containerRef.current.addEventListener("mousemove", handlemousemove);
    containerRef.current.addEventListener("mouseenter", handlemouseenter);
    containerRef.current.addEventListener("mouseleave", handlemouseleave);
  }, [])


  return (
    <div className='flex justify-center items-center min-w-screen min-h-screen'>

      <div ref={containerRef} className='container flex justify-center items-center w-[55vw] h-[80vh]  '
        style={{ perspective: '3d' }}
      >
        <div ref={cardRef} className='card  w-80 h-[60vh]  bg-slate-100 p-5 flex flex-col items-center'
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 50px rgba(0,0,0,0.2)'
          }}
        >

          <div ref={titleRef} className='title text-2xl font-serif text-slate-700 
                '> Embroidery machine</div>
          <img ref={imageRef} src="/embMach2.png" className='p-2 w-72'></img>
          <div className='description font-mono'
            ref={descriptionRef}>
            <a> 12 Head emboridery machine to craft your dreamed designs on clothes that you can wear with high quality. </a>
          </div>

          <div className='buttons flex space-x-5 w-full justify-evenly mt-20'>
            <button className='px-2 p-1 bg-slate-600 text-white hover:bg-slate-400 shadow-xl shadow-blackd hover:text-slate-800 rounded-md'> Ask </button>
            <button className='px-2 p-1 bg-slate-600 text-white hover:bg-slate-400 shadow-xl shadow-blackd hover:text-slate-800 rounded-md'> Buy Now  </button>

          </div>

        </div>
      </div>

    </div>

  )
}

export default Card
