import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Social from "@/components/Social.js"
export default function Page() {
  return (
    <div className=' container' id='hero'>
        <div className="row mt-5 h-auto container mx-3">
            {/* <div className="col-md-6 " id='Hero-Img'>
            <Image
      src="/images/saad1.png"
      width={350}
      height={500}
      alt="Saad Mukhtar"
      className='Hero-Img'
      id='Hero-Img'
    />
            </div> */}
            <div className="
            // col-md-6
             d-flex flex-column justify-content-center align-items-center gap-2 mt-5">
              <Image src="/images/chatgptbg.png"
              width={250}
              height={250}
              id='Hero-Img'
              className='rounded'
              alt='Saad Mukhtar'/>
                <h1>&#34;Hi, I&apos;m Saad Mukhtar&#34;</h1>
                {/* <p> &#34;Frontend Developer | Passionate about building beautiful websites&#34;</p> */}
                <p> "React & Next.js Frontend Developer"
                (Building clean, fast, modern UIs)</p>

                <div>            
              <Social/>
            </div>
                <Link className='btn text-light' href='#projectContainer' id="herobtn">View my work</Link>
            </div>
           
        </div>
    </div>
  )
}
