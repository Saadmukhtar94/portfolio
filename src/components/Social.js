"use client"
import React from 'react';
import Link from 'next/link';
export default function Card () {
  return (
      <div className="card" id="socialIcons-container">
        <span><i className="fa-solid fa-link fs-6 mx-1"></i>Social</span>
        <div className="d-flex">
        <a className="social-link" href="#">
        <Link href="/" className="list-unstyled"><i className="fa-brands fa-linkedin fs-3"></i></Link>
                   </a>
        <a className="social-link" href="#">
        <Link href="/" className="list-unstyled"><i className="fa-brands fa-square-facebook fs-3 border"></i></Link>
        </a>
        <a className="social-link" href="#">
        <Link href="/" className="list-unstyled"><i className="fa-brands fa-square-instagram fs-3 border"></i></Link>
        </a>
        <a className="social-link" href="#">
        <Link href="/" className="list-unstyled"><i className="fa-brands fa-square-github fs-3 border"></i></Link>     

        </a>
        </div>
        
      </div>
  );
}



