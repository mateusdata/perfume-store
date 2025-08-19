import Image from "next/image";
import imagem from "@/public/concept/imagem.png";

export default function Home() {
  return (
    <div
      className="w-full flex items-center justify-center" style={{ backgroundColor: "#E9E9E9", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(80px)" }}
    >
      <div className="w-full md:max-w-4xl ">
      <Image
        src={imagem}
        alt="Documento Canva"
        className="w-full h-auto rounded-2xl"
      />
      </div>
    </div>
  );
}
