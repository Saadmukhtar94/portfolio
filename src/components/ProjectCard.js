import Link from 'next/link';
import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

export default function Page() {
  const projects = [
    {
      title: 'Travelli',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"Travelli – a web template for travel and tour booking.(React)"',

    },
    {
      title: 'B2BNet',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://b2bnettt.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/b2bnet',
      Description: '"B2B-Net – a web template integrated with a mock server to simulate backend functionality     (NextJs) ',

    },
    {
      title: 'Project1',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://crudsample.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/CRUD',
      Description: '"CRUD-App – a basic interface to create, read, update, and delete data using server-side storage through mock API integration."(NextJs)',
    },
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://calculatorneltify.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/calculator',
      Description: '"A basic web-based calculator built using JavaScript and jQuery. Ideal for practicing DOM manipulation and event handling."',
    },
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"A university web template designed using HTML and CSS, utilizing Flexbox and Bootstrap Grid for responsive layout."',
    },
    
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"A static Dribbble clone built with HTML and CSS, replicating the layout and design of the original platform."',
    },
    
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"A responsive  website clone built using HTML, CSS, and Bootstrap to showcase layout and styling fundamentals."',
    },
    
  ];

  return (
    <div id="projectContainer">
 <div  className="projects-container d-flex justify-content-center align-items-center  text-center row container mx-auto ">
      <h1 className='pt-3 pb-5'>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="containerCard col-md-3">

        <div  className="card_box mb-5" >
        
            <span id='card_boxSpan'></span>
            <p className='fs-5 text-light px-2 lh-1 fw-bold' id='card_boxDescription'>{project.Description}</p>
            <div className="" id='card_boxBtn'>
            <Link className="btn btn-success" href={project.codeLink}   target="_blank" ><i className="fa-brands fa-github mx-1"></i>Git</Link>
            <Link className="btn btn-info opacity-75" href={project.previewLink} target="_blank" ><i className="fa-solid fa-eye mx-1"></i>Preview</Link>
            </div>
           
        </div>
    </div>
      ))}


    </div>
    </div>
   
  );
}
