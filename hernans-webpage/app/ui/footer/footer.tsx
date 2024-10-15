import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex justify-center">
            <Image
              src="/Logo-letras-blancas-fondo-negro.jpg"
              alt="Logo de la empresa"
              width={100}
              height={100}
            />
          </div>
          <div className="w-1/3 text-right text-sm">
            Diseñado por <span className="font-semibold">Cueto</span>
          </div>
        </div>
      </div>
    </footer>
  )
}