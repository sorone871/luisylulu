import Image from "next/image";
import Hero from "./secciones/Hero/Hero";
import Historia from "./secciones/Histora/Historia";
import DetallesDia from "./secciones/DetallesDia/DetallesDia";
import Galeria from "./secciones/Galeria/Galeria";
import Itinerario from "./secciones/Itinerario/Itinerario";
import HeroDos from "./secciones/Hero/HeroDos";

export default function Home() {
  return (
    <>
      <HeroDos />
      <Historia />
      <DetallesDia />
      <Galeria />
      <Itinerario />
    </>
  );
}
