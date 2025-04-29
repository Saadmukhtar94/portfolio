import React from 'react'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='d-flex justify-content-between align-items-center px-5 bg-primary bg-opacity-75 py-2'>
        <div>
        <span className='text-light fs-3'>Saad Mukhtar</span>
        </div>
        <div>
        <ul className='d-flex list-unstyled gap-3 text-decoration-none pt-2'>
        <li><Link href="/home" className='text-decoration-none text-light'>Home</Link></li>

            <li><Link href="#about" className='text-decoration-none text-light'>About</Link></li>
            <li><Link href="/contact" className='text-decoration-none text-light'>Contact</Link></li>
            <li><Link href="/projects" className='text-decoration-none text-light'>Projects</Link></li>

        </ul>
        </div>

    </div>
  )
}
