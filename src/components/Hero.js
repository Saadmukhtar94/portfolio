import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Social from "@/components/Social.js"
export default function Page() {
  return (
    <div className=''>
        <div className="row mt-5 h-auto container mx-3">
            <div className="col-md-6 " id='Hero-Img'>
            <Image
      src="/images/Hero-Imgnew.png"
      width={500}
      height={500}
      alt="Saad Mukhtar"
      className='Hero-Img'
      id='Hero-Img'
    />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center gap-2 mt-5">
                <h1>"Hi, I'm Saad Mukhtar"</h1>
                <p> "Frontend Developer | Passionate about building beautiful websites"</p>
                <div>            
              <Social/>
            </div>
                <button className='btn btn-primary '>View my work</button>
            </div>
           
        </div>
    </div>
  )
}
