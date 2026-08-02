import Image from "next/image";
import Hero from "./secciones/Hero/Hero";
import Historia from "./secciones/Histora/Historia";
import DetallesDia from "./secciones/DetallesDia/DetallesDia";
import Galeria from "./secciones/Galeria/Galeria";
import Itinerario from "./secciones/Itinerario/Itinerario";
import HeroDos from "./secciones/Hero/HeroDos";
import Canva from "./components/Canva/Canva";

export default function Home() {
  return (
    <>
      {/* 
      <Historia />
      <DetallesDia />
      <Galeria />
      <Itinerario /> */}
      <HeroDos />
      <Canva />
    </>
  );
}
