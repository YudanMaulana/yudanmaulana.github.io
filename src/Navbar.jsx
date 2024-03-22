import './index.css'
import Imagenav from './Imagenav'
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => (
        setIsOpen(!isOpen)
    );
    // animasi navbar
    useEffect(() => {
        gsap.set(".navbarnav", { opacity: 0, y: -50 }); // Set keadaan awal
        gsap.to(".navbarnav", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }); // Animasi ke keadaan yang diinginkan
    }, []);

    // animasi text-navbar
    useEffect(() => {
        gsap.from("navbar-text", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    }, []);

    return (
        <>
        <nav className='navbarnav  flex p-4 text-slate w-screen justify-between bg-white/60 backdrop-blur-md fixed z-[999]'>
        <Imagenav />
            <FiAlignRight onClick={toogleMenu} className='text-3xl md:hidden border-2 border-red-600' />
            {isOpen && (
                <div className={`md:flex hidden border-2 border-red-600 items-center ${isOpen ? 'flex' : 'hidden'}`}>
                <a className='navbar navbar-text' href='#'>Beranda</a>
                <a className='navbar navbar-text' href='#'>Artikel</a>
                <a className='navbar mr-6 navbar-text' href='#'>Tentang</a>
                </div>
            )}
        </nav>
        </>
    )
}

export default Navbar