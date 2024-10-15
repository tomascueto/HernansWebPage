// components/Header.js
import Link from 'next/link';


export default function Header(){
    return (
        <header className="bg-black text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Title */}
                <div className="flex flex-col space-y-1">
                <h1 className="text-lg font-bold tracking-wide">
                    KEES DABUS RUIZ <span className="block text-sm font-normal">ABOGADOS</span>
                </h1>
                <span className="text-xs">ISO 9001:2008</span>
                </div>

                {/* Navigation */}
                <nav className="space-x-8 text-sm">
                    <Link href="/">
                        <Link className="hover:text-gray-300" href="/">INICIO</Link>
                    </Link>
                    <Link href="/areas-de-practica">
                        <Link className="hover:text-gray-300" href="/">ÁREAS DE PRÁCTICA</Link>
                    </Link>
                    <Link href="/staff">
                        <Link className="hover:text-gray-300" href="/">STAFF</Link>
                    </Link>
                    <Link href="/contacto">
                        <Link className="hover:text-gray-300" href="/">CONTACTO</Link>
                    </Link>
                </nav>
            </div>
        </header>
    )
}


