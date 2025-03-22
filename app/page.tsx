import Image from "next/image";
import perfume from "@/public/perfume.png";
import perfume2 from "@/public/perfume2.jpg";
import perfume3 from "@/public/perfume3.jpg";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <header>
        <h1 className="text-4xl font-bold text-gray-700 mb-2">nonaperfumaria</h1>
        <h2 className="text-2xl text-gray-500 font-light">Nona | Essência & Aroma | Perfumaria</h2>
        <p style={{ color: "#555" }}>Explore nossa coleção exclusiva</p>
      </header>

      <section style={{ marginBottom: "20px" }}>
        {/* Link para Instagram */}
        <a
          href="https://scontent-for2-2.cdninstagram.com/v/t51.2885-19/483438639_9104407999658097_8164724548969486896_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-for2-2.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QFnZC6jsz_84d0FUg9zWpnwvVA4IMPSxUoFc6zZ7HUJ2RZQhylA1ta1HwTXaW9MhQYLMTxpU4G--NTRtsvMuy0k&_nc_ohc=KVNbp7ALO1MQ7kNvgFVxDi1&_nc_gid=xiEbTQJu6Pgnou8cEgqolw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYEHqpDHcgOpqur4Cr4G9LLDHNCZkkdZ3SFB2iRc-AnskQ&oe=67E3D019&_nc_sid=22de04"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            backgroundColor: "#E1306C",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Visite nosso Instagram
        </a>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Cartões de Perfumes */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={perfume}
            alt="Perfume 1"
            layout="responsive"
            width={200}
            height={200}
          />
          <div style={{ padding: "10px" }}>
          <h3>Perfume Infalível Suave</h3>
            <p style={{ color: "#555" }}>Uma mistura requintada de elegância.</p>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={perfume2}
            alt="Perfume 2"
            layout="responsive"
            width={200}
            height={200}
          />
          <div style={{ padding: "10px" }}>
            <h3>Perfume Kaik</h3>
            <p style={{ color: "#555" }}>Uma fragrância de beleza atemporal.</p>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={perfume3}
            alt="Perfume 3"
            layout="responsive"
            width={200}
            height={200}
          />
          <div style={{ padding: "10px" }}>
            <h3>Perfume Suavage</h3>
            <p style={{ color: "#555" }}>Capture momentos inesquecíveis.</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: "20px" }}>
        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/557581796229"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Fale conosco pelo WhatsApp
        </a>
      </footer>
    </div>
  );
}
