import Image from "next/image";
export default function QuienesSomos() {
    return (
      <section
        id="quienes-somos"
        className="h-[calc(100vh-2px)] bg-black text-white flex items-center relative"
      >
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/Logo-letras-blancas-fondo-negro.jpg')] bg-cover bg-center opacity-10" />
        </div>
        <div className="w-1/2 flex items-center justify-center relative z-10">
          <h1 className="text-5xl">¿Quiénes somos?</h1>
        </div>
        <div className="w-1/2 flex items-center justify-center relative z-10">
          <p className="max-w-lg text-lg">
            Somos un grupo interdisciplinario fundado por cuatro socios con amplia y diversa experiencia en el ámbito deportivo. Quienes, desde nuestras respectivas áreas de especialización, nos unimos para ofrecer un servicio integral de gestión y asesoramiento deportivo. Nuestro objetivo es ofrecerle a nuestros clientes un servicio profesional que permita elevar el rendimiento y profesionalizar su actividad, ya sean atletas, equipos, clubes, asociaciones, eventos u organizaciones.
          </p>
        </div>
      </section>
    );
}       