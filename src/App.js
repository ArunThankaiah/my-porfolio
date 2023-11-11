import img02 from './photos/img02.png'
import img01 from './photos/img01.png'

function App() {



  return (
    <>
    <section className="p-10 bg-slate-800 mb-10">
        <div className = "container  border-white mx-auto">
            <div className="flex">
              <a className = 'text-1-xl font-sm lg:text-3xl font-bold text-white' href= '/'> Arun Thankaiah</a>
              <div className = 'ml-auto'>
               <button className=' lg:hidden' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
              </button>



              <ul className='hidden lg:flex  text-white'>
                <li className='pr-5 font-sm'><a className='px-3 py-2 border border-slate-800 hover:border-b-slate-100 ' href='/'>Home</a></li>
                <li className='pr-5 font-sm'><a className='px-3 py-2 border border-slate-800 hover:border-b-slate-100 ' href='/about'>About</a></li>
                <li className='pr-5 font-sm'><a className='px-3 py-2 border border-slate-800 hover:border-b-slate-100 ' href='/skills'>Skills</a></li>
                <li className='pr-5 font-sm'><a className='px-3 py-2 border border-slate-800 hover:border-b-slate-100 ' href='/contact'>Contact</a></li>
                
              </ul>
              </div>
            </div>
        </div>
        <div >
        <ul className='hidden lg:hidden text-white '>
                <li className='mt-1'><a className=' py-2  text-xs' href='/'>Home</a></li>
                <li className='mt-1'><a className=' py-2  text-xs' href='/about'>About</a></li>
                <li className='mt-1'><a className=' py-2  text-xs' href='/skills'>Skills</a></li>
                <li className='mt-1'><a className=' py-2  text-xs' href='/contact'>Contact</a></li>
                
              </ul>
        </div>
        <div className='flex py-12 lg:py-36'>
          <div className='w-full lg:w-1/2  justify-end'>
            <h3 className='text-center lg:text-left  text-1xl lg:text-3xl text-white'>Hello, <span className='text-cyan-400'>It's Me</span></h3>
            <h1 className=' text-center lg:text-left text-1xl lg:text-3xl text-violet-300'>Arun Thankaiah</h1>
            <h3 className=' text-center lg:text-left text-1xl lg:text-3xl text-white'>And I'm a<span className='pl-1 text-sm lg:text-base text-cyan-400'>Full Stack Web Developer</span></h3>
            <p className='text-center lg:text-left mt-4 lg:mt-6 text-xs lg:text-sm text-gray-300'>
            As a full stack web developer, I have a passion for creating engaging, responsive,
           and user-friendly. I have worked with both front-end and back-end technologies to 
           develop web applications that are both aesthetically pleasing and highly functional.
            </p>
           <div className='flex justify-center lg:justify-start mt-6 lg:mt-8 text-gray-100 ' >
           <a href='' className='bg-cyan-600 px-4 py-2 rounded transition duration-300 ease-in-out'>Download CV</a>
           
           </div>
          </div>
          <div className='w-1/2 hidden lg:flex justify-center '>
            <img src = {img02} alt='img02' className=' w-80 h-80 bg-slate-700 rounded'/>
          </div>
        </div>
    </section>

    <section className="p-10 bg-slate-600 rounded mb-10">
        <div className = "container   mx-auto">
          <div className = "flex flex-wrap">
            <div className='w-full border lg:w-1/2 lg:pr-5'>
                <img src={img01} atl='' className = 'w-16 h-16 rounded bg-slate-800 ml-auto'  />
            </div>
            <div className='w-full lg:w-1/2 lg:pl-5'>
              <div >
                <h2>About <span>Me</span></h2>
              </div>
              <div>
                <h2>FUll stack web developer</h2>
              </div>
              <div>
                <p>
                I am always amazed at the endless possibilities that technology has to offer. Not only do I get to work with the latest development tools and frameworks, but I also get to use my creativity to build and deploy websites and applications that are both functional and visually appealing. One of the most rewarding aspects of learning web development is that I am constantly challenged to come up with new solutions to problems. I love being able to work with a team of developers to create something that is both user-friendly and innovative. I am also grateful for the opportunity to gain new skills and knowledge that I can use to help others. Being a full stack web developer learner gives me the opportunity to be part of something bigger than myself and to make a difference in the world. At the end of the day, I am constantly learning and growing as a developer. I am excited to see what the future holds for me and for the web development industry as a whole.
                </p>
              </div>
            </div>
            
        </div>
        </div>
    </section>

  
    

    </>
  );
}

export default App;
