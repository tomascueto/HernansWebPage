'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header2() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-black text-white py-6">
                <div className="container mx-auto flex justify-center">
                    <div className="w-full max-w-6xl flex justify-between items-center">
                        <div className="text-white flex flex-col items-start">
                            <Link href="/">
                                <Image 
                                    src="/Logo-letras-blancas-fondo-negro.jpg" 
                                    alt="Logo Mane" 
                                    className="w-full" 
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                
                        {/* Items navegacion DERECHA*/}
                        <div className={`text-white sm:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} sm:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-sm`}>
                            <Link className="hover:text-gray-300" href="#quienes-somos">¿QUIENES SOMOS?</Link>
                            <Link className="hover:text-gray-300" href="/">¿QUÉ HACEMOS?</Link>
                            <Link className="hover:text-gray-300" href="/">STAFF</Link>
                            <Link className="hover:text-gray-300" href="/">CONTACTO</Link>                        
                        </div>


                        {/* Hamburger menu for small screens */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>                
            </header>
        </div>
    );
}