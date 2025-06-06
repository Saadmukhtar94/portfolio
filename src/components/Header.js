import React from 'react'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap py-2 px-3' id='header'>
        <div >
        <span className='fw-bold fs-3'>Saad Mukhtar</span>
        </div>
        <div className='fw-bold'>
        <ul className='d-flex list-unstyled gap-3 text-decoration-none pt-2'>
        <li><Link href="#TechStation" className='text-decoration-none navlinks'>Skills</Link></li>

            <li><Link href="#about" className='text-decoration-none navlinks'>About</Link></li>
            <li><Link href="#contact" className='text-decoration-none navlinks'>Contact</Link></li>
            <li><Link href="#projectContainer" className='text-decoration-none navlinks'>Projects</Link></li>

        </ul>
        </div>

    </div>
  )
}
