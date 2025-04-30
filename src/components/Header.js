import React from 'react'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='d-flex justify-content-between align-items-center  py-2 px-3 text-primary text-opacity-75'>
        <div >
        <span className='text-primary text-opacity-75 fs-3'>Saad Mukhtar</span>
        </div>
        <div>
        <ul className='d-flex list-unstyled gap-3 text-decoration-none pt-2'>
        <li><Link href="#TechStation" className='text-decoration-none text-primary text-opacity-75'>Skills</Link></li>

            <li><Link href="#about" className='text-decoration-none text-primary text-opacity-75'>About</Link></li>
            <li><Link href="#contact" className='text-decoration-none text-primary text-opacity-75'>Contact</Link></li>
            <li><Link href="#projectContainer" className='text-decoration-none text-primary text-opacity-75'>Projects</Link></li>

        </ul>
        </div>

    </div>
  )
}
