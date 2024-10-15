import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function ContactoSection() {
  return (
    <section className="bg-white flex flex-col justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl w-full px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-12">Contacto</h1>
        <div className="space-y-6 mb-12">
          <p className="text-xl">
            <Link href="mailto:manegestiondeportiva@gmail.com" className="text-balck-600 hover:underline">
                manegestiondeportiva@gmail.com
            </Link>
          </p>
          <p className="text-xl">Avenida Roca 1024, General Roca, Río Negro.</p>
          <p className="text-xl">Cel. +54 9 2984 777484</p>
        </div>
        <div className="flex justify-center space-x-8">
          <Link href="https://www.facebook.com" className="text-black hover:text-gray-600 transition-colors">
            <Facebook size={32} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/mane.gestion/" className="text-black hover:text-gray-600 transition-colors">
            <Instagram size={32} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com" className="text-black hover:text-gray-600 transition-colors">
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}