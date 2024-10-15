import Image from "next/image";
import Header from '@/app/ui/header/header2';
import QuienesSomos from "./ui/quienesSomos/quienesSomos";
import Contacto from "./ui/contacto/contacto";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <QuienesSomos />
      <Contacto/>
      <Footer />
    </>
  );
}
