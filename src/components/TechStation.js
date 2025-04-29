import React from 'react';
import Image from 'next/image';
export default function  Page () {
  return (
    <div id="TechStation" className='text-center py-5'>
    <h1>Tech-Stacks</h1>
    {/* Languages,skills row */}
    <div className="d-md-flex justify-content-around py-5">
    {/* Languages row */}
    <div className=" d-flex flex-column justify-content-center container mx-auto">
    <h1>Languages</h1>    
    <div className="container text-center" id='lanuages'>
    <div  className="glass d-flex flex-column justify-content-around">
          <Image
      src="/images/HTML5.png"
      alt="Html"
      width={100}
      height={100}
    />   
    <span className='' id="html-span">HTML5</span>
        </div>
        <div  className="glass d-flex flex-column justify-content-around">
         
          <Image
      src="/images/CSS3.png"
      alt="CSS3"
      width={100}
      height={100}
    />   
        <span className='text-primary' id="">CSS3</span>

        </div>
        <div  className="glass d-flex flex-column justify-content-around">
          
 <Image
      src="/images/JAVASCRIPT.png"
      alt="JavaScript"
      width={100}
      height={100}
      
    />     
            <span className='' id="javascript-span">JavaScript(ES6+)</span>

       </div>
    </div>
   </div>
   
    {/* Librareis row */}      
    <div id="" className='text-center d-flex flex-column container '>
    <h1>Liabraries</h1>
      <div className="container">
      <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
               src="/images/BOOTSTRAP.png"
               alt="Bootstrap"
               width={100}
               height={100}
               id=''
             />     
                     <span className='' id="bootstrap-span">Bootstrap</span>
         
       </div>
      <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
               src="/images/Tailwind.png"
               alt="Tailwind"
               width={100}
               height={100}
               id=''
             />     
                     <span className='text-primary' id="">Tailwind</span>
         
      </div>
        <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
      src="/images/JQUERY.png"
      alt="Html"
      width={100}
      height={100}
    />   
    <span className='' id="html-span">JQUERY</span>
        </div>
       
      </div>
    </div>
    </div>

    {/* framework,liabraries Row */}
     <div className="d-md-flex justify-content-around ">
    {/* framework Row */}
     <div id="" className='text-center container d-flex flex-column'>
    <h1>Frameworks</h1>
      <div className="container">
      <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
               src="/images/REACT.png"
               alt="REACT"
               width={100}
               height={100}
               id='react-img'
             />     
                     <span className='text-primary' id="">React.Js</span>
         
    </div>
    <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
      src="/images/Next.js.png"
      alt="Next"
      width={100}
      height={100}
    />   
    <span className='' id="next.js-span">Next.Js</span>
    </div>
       
      </div>
    </div>
    {/* Skills flex */}
    <div id="" className='text-center container d-flex flex-column'>
    <h1>Skills</h1>
    <div className="container">
    <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
               src="/images/Git.png"
               alt="Git"
               width={100}
               height={100}
               id=''
             />     
                     <span className='' id="Git-span">Git</span>
         
    </div>
    <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
      src="/images/GitHub.png"
      alt="Github"
      width={100}
      height={100}
    />   
    <span className='' id="next.js-span">Github</span>
    </div>
    <div  className="glass d-flex flex-column justify-content-around">
          
          <Image
      src="/images/VsCode.png"
      alt="VsCode"
      width={100}
      height={100}
    />   
    <span className='text-primary text-opacity-100' id="">Vs Code</span>
    </div>
       
    </div>
    </div>

    </div>
     
    </div>
    
  );
}




