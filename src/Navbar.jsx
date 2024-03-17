import './index.css'
import Imagenav from './Imagenav'
import gsap from 'gsap';
import { useEffect } from 'react';

function Navbar() {
    // animasi navbar
    useEffect(() => {
        gsap.set(".navbarnav", { opacity: 0, y: -50 }); // Set keadaan awal
        gsap.to(".navbarnav", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }); // Animasi ke keadaan yang diinginkan
    }, []);

    // animasi text-navbar
    useEffect(() => {
        gsap.from(".navbar-text", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    }, []);

    return (
        <>
        <nav className='navbarnav flex p-4 text-slate w-screen justify-between bg-white/60 backdrop-blur-md fixed z-[999]'>
        <Imagenav />
            <div className='flex'>
            <a className='navbar .navbar-text' href='#'>Beranda</a>
            <a className='navbar .navbar-text' href='#'>Artikel</a>
            <a className='navbar mr-6 .navbar-text' href='#'>Tentang</a>
            </div>
        </nav>
        </>
    )
}

export default Navbar