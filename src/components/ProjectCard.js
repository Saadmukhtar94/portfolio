import React from 'react'
import Link from 'next/link'

export default function Page() {
    const projects =  [
        
        {
    title:'Travelli',
    image: '/images/Hero-Img.jpeg',
    previewLink:'https://travellli.netlify.app/',
    codeLink:'https://github.com/Saadmukhtar94/travelli',
        },
        {
            title:'B2BNet',
            image:' /images/Hero-Img.jpeg',
            previewLink:'https://b2bnettt.netlify.app/',
            codeLink:'https://github.com/Saadmukhtar94/travelli',
            Description:'i have done it'
                },
                {
                    title:'project1',
                    image:' /images/Hero-Img.jpeg',
                    previewLink:'https://travellli.netlify.app/',
                    codeLink:'https://github.com/Saadmukhtar94/travelli',
                        },{
                            title:'project1',
                            image:' /images/Hero-Img.jpeg',
                            previewLink:'https://travellli.netlify.app/',
                            codeLink:'https://github.com/Saadmukhtar94/travelli',
                                }
    ]
  return (
    <div className="projects-container" id='projectContainer'>
    {projects.map((project, index) => (
      // <div key={index} className="project-card">
      //   <img src={project.image} alt={project.title} className="project-image" />
      //   <h3>{project.title}</h3>
      //   <div className="buttons d">
      //     <Link href={project.previewLink} target="_blank"  className="btn btn-primary">
      //     <i className="fa-solid fa-eye"></i> Preview
      //     </Link>
      //     <Link href={project.codeLink} target="_blank"  className="btn btn-primary">
      //     <i className="fa-solid fa-code mx-1 fs-6"></i>
      //       Git Code
      //     </Link>
         
      //   </div>
      //   <p className='text-muted mt-3'>{project.Description}</p>
      // </div>
<div key={index} className="card d-flex flex-wrap h-100" style={project.width}>
  <img src={project.image} className="card-img-top" alt="..."/>
  <h5 className='project.title'>{project.title}</h5>
  <div className="card-body">
    <p className="card-text">{project.Description}</p>
</div>
</div> 
   
    ))}
  </div>
  )
}
