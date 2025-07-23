// app/page.tsx
"use client"; // Necessário para o efeito de scroll do header
import image from "@/public/image.jpeg";
import concept from "@/public/concept.jpeg";
import projeto1 from "@/public/projeto1.jpeg";
import projeto2 from "@/public/projeto2.jpeg";
import projeto3 from "@/public/projeto3.jpeg";



import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // --- Lógica para o Header ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Dados de Exemplo para Habilidades e Portfólio ---
  const skillsList = [
    "Criação de Conteúdo",
    "Análise de Dados",
    "Gestão de Comunidade",
    "Estratégias para Redes Sociais"
  ];

  const projects = [
    { title: "Marca de Moda", desc: "Crescimento de 150% no engajamento." },
    { title: "Restaurante Local", desc: "Gestão de comunidade e aumento de reservas." },
    { title: "Startup de Tech", desc: "Estratégia de conteúdo para lançamento." },
  ];

  return (
    <main>
      {/* ===== HEADER ===== */}
      <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
        ? "backdrop-blur-md bg-white/10 shadow-md"
        : "backdrop-blur-md "
      }`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-primary">NONA CONCEPT</h1>
        <div className="hidden md:flex items-center space-x-8">
        <Link href="#sobre" className="text-dark-light hover:text-primary transition-colors">Sobre Mim</Link>
        <Link href="#habilidades" className="text-dark-light hover:text-primary transition-colors">Habilidades</Link>
        <Link href="#portfolio" className="text-dark-light hover:text-primary transition-colors">Projetos</Link>
        <Link href="#contato" className="bg-primary  px-4 py-2 rounded-md hover:bg-primary-light transition-colors">Contato</Link>
        </div>
      </nav>
      </header>

      {/* ===== SEÇÃO HERO ===== */}
      <section id="home" className="relative min-h-screen flex items-center bg-light pt-20 md:pt-0">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
              Conectando Marcas e Públicos com <span className="text-secondary">Criatividade</span> e <span className="text-secondary">Inovação</span>
            </h2>
            <p className="mt-4 text-lg text-dark-light">
              Portfólio de Social Media por <span className="font-bold">Lucy Santos</span>
            </p>
            <p className="mt-2 text-md text-dark-light">
              Estratégias criativas e resultados impactantes.
            </p>
            <a href="#portfolio" className="mt-8 inline-block bg-secondary  font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Ver Projetos
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <Image src={image} alt="Nona" layout="fill" objectFit="cover" className="rounded-full shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO SOBRE MIM ===== */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-80 h-80">
              <Image src={concept} alt="Lucy Santos em palestra" layout="fill" objectFit="cover" className="rounded-xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0"/>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-black text-primary mb-4">SOBRE MIM</h2>
            <p className="text-dark-light leading-relaxed">
              Profissional multifacetada com sólida experiência em design, edição de vídeos, atendimento ao público, palestras e perfumaria. Apaixonada por transformar ideias em conteúdo visual de impacto, conecto marcas e pessoas com autenticidade e propósito.
            </p>
            <p className="mt-4 text-dark-light leading-relaxed">
              Ao longo da minha trajetória, desenvolvi estratégias criativas que fortalecem a presença digital de empreendedores e empresas. Também sou fundadora do projeto social Nona Esperança, uma iniciativa voltada para ações comunitárias, levando carinho, brinquedos e apoio a crianças em situação de vulnerabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO HABILIDADES ===== */}
      <section id="habilidades" className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-primary mb-12">MINHAS HABILIDADES</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/3 text-center md:text-right">
              <p className="text-xl text-dark leading-relaxed">
                Combinando <span className="text-secondary font-bold">criatividade</span> com <span className="text-secondary font-bold">análise</span>, minhas habilidades são projetadas para maximizar a visibilidade e engajamento nas redes sociais.
              </p>
            </div>
            <div className="w-px bg-gray-300 h-32 hidden md:block"></div>
            <div className="md:w-1/3">
              <ul className="space-y-4">
                {skillsList.map(skill => (
                  <li key={skill} className="bg-green-500 p-4 rounded-lg shadow-md flex items-center">
                    <span className="text-secondary text-2xl mr-4">✓</span>
                    <span className="font-bold text-dark-light">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO PORTFÓLIO ===== */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-primary mb-4">PORTFÓLIO DE PROJETOS</h2>
          <p className="text-lg text-dark-light mb-12 max-w-2xl mx-auto">
            Cada projeto é uma história de sucesso. Aqui estão alguns exemplos de como contribuí para o crescimento digital de marcas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[projeto1, projeto2, projeto3].map((img, idx) => (
              <div key={projects[idx].title} className="bg-light rounded-lg shadow-lg overflow-hidden group">
              <div className="w-full h-48 relative">
                <Image
                src={img}
                alt={`Imagem do projeto ${projects[idx].title}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{projects[idx].title}</h3>
                <p className="mt-2 text-dark-light">{projects[idx].desc}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RODAPÉ / CONTATO ===== */}
      <footer id="contato" className="  py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos Conectar?</h2>
          <p className="mb-6 text-gray-300">Estou sempre aberta a novas oportunidades e colaborações.</p>
          <a href="mailto:contato@nonaconcept.com" className="bg-secondary  font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            contato@nonaconcept.com
          </a>
          <div className="mt-8">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Nona Concept por Lucy Santos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}