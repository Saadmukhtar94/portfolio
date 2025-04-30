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
      Description: '"B2B-Net – a web template integrated with a mock server to simulate backend functionality(NextJs) ',

    },
    {
      title: 'Project1',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"CRUD-App – a basic interface to create, read, update, and delete data using server-side storage through mock API integration."(NextJs)',
    },
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"A responsive  website clone built using HTML, CSS, and Bootstrap to showcase layout and styling fundamentals."',
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
      Description: '"A university web template designed using HTML and CSS, utilizing Flexbox and Bootstrap Grid for responsive layout."',
    },
    {
      title: 'Project2',
      image: '/images/Hero-Img.jpeg',
      previewLink: 'https://travellli.netlify.app/',
      codeLink: 'https://github.com/Saadmukhtar94/travelli',
      Description: '"A static Dribbble clone built with HTML and CSS, replicating the layout and design of the original platform."',
    },
    
    
  ];

  return (
    <div  className="projects-container d-flex justify-content-center align-items-center  text-center row container mx-auto " id="projectContainer">
      <h1 className='pt-5 pb-2'>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="containerCard col-md-3">

        <div  className="card_box mb-5" >
        {/* <span className="position-absolute top-25  start-100 translate-start badge rounded-pill bg-danger w-auto h-auto">
{project.Technology}   
  </span> */}
            <span id='card_boxSpan'></span>
            <p className='fs-5 text-light px-2 lh-1 fw-bold' id='card_boxDescription'>{project.Description}</p>
            <div className="" id='card_boxBtn'>
            <Link className="btn btn-success" href={project.codeLink}   target="_blank" ><i className="fa-brands fa-github mx-1"></i>Git</Link>
            <Link className="btn btn-info opacity-75" href={project.previewLink} target="_blank" ><i className="fa-solid fa-eye mx-1"></i>Preview</Link>
            </div>
           
        </div>
    </div>
      ))}
      {/* <div className="d-flex justify-content-center align-items-center gap-3">
<div  className="containerCard">
    <div  className="card_box">
        <span></span>
        <div className="" id='card_boxBtn'>
        <button className="btn btn-success text-light"><i className="fa-brands fa-github mx-1"></i>Git</button>
        <button className="btn btn-warning"><i className="fa-solid fa-eye mx-1 "></i>Preview</button>
        </div>
       
    </div>
</div>
<div  className="containerCard">
    <div  className="card_box">
        <span></span>
        <div className="" id='card_boxBtn'>
        <Link className="btn btn-success" href={projects.codeLink}><i className="fa-brands fa-github mx-1"></i>Git</Link>
        <Link className="btn btn-warning" href={projects.previewLink}><i className="fa-solid fa-eye mx-1"></i>Preview</Link>
        </div>
       
    </div>
</div>
<div  className="containerCard">
    <div  className="card_box">
        <span></span>
        <div className="" id='card_boxBtn'>
        <button className="btn btn-success"><i className="fa-brands fa-github mx-1"></i>Git</button>
        <button className="btn btn-warning"><i className="fa-solid fa-eye mx-1"></i>Preview</button>
        </div>
       
    </div>
</div>
<div  className="containerCard">
    <div  className="card_box">
        <span></span>
        <div className="" id='card_boxBtn'>
        <button className="btn btn-success"><i className="fa-brands fa-github mx-1"></i>Git</button>
        <button className="btn btn-warning"><i className="fa-solid fa-eye mx-1"></i>Preview</button>
        </div>
       
    </div>
</div>
      </div> */}

    </div>
  );
}
