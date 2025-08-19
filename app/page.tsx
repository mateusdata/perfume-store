import Image from "next/image";
import pagina1 from "@/public/concept/pagina1.png";
import pagina2 from "@/public/concept/pagina2.png";
import pagina3 from "@/public/concept/pagina3.png";
import pagina4 from "@/public/concept/pagina4.png";
import pagina5 from "@/public/concept/pagina5.png";
import pagina6 from "@/public/concept/pagina6.png";
import pagina7 from "@/public/concept/pagina7.png";
import pagina8 from "@/public/concept/pagina8.png";
import pagina9 from "@/public/concept/pagina9.png";
import pagina10 from "@/public/concept/pagina10.png";
import pagina11 from "@/public/concept/pagina11.png";
import pagina12 from "@/public/concept/pagina12.png";
import pagina13 from "@/public/concept/pagina13.png";

export default function Home() {
  const imagens = [
    pagina1,
    pagina2,
    pagina3,
    pagina4,
    pagina5,
    pagina6,
    pagina7,
    pagina8,
    pagina9,
    pagina10,
    pagina11,
    pagina12,
    pagina13
  ]
  return (
    <div
      className="w-full flex items-center justify-center" style={{ backgroundColor: "#E9E9E9", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(80px)" }}
    >
      <div className="w-full md:max-w-6xl ">
     
    {imagens.map((imagem, index) => (
      <Image
        key={index}
        src={imagem}
        alt={`Documento Canva ${index + 1}`}
        className="w-full h-auto"
      />
    ))}

      <footer
        className="w-full flex flex-col items-center justify-center py-4 mt-8"
        style={{ backgroundColor: "#E9E9E9", color: "#333" }}
      >
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Nona Concept. Todos os direitos reservados.
        </span>
      </footer>
      </div>
    </div>
  );
}
