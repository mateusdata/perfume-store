"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import imagem from "@/public/imagem.png";
import imagem2 from "@/public/imagem2.png";
import imagem3 from "@/public/imagem3.png";
import imagem4 from "@/public/imagem4.png";
import logo from "@/public/logo.png";

const perfumes = [
  {
    id: 1,
    src: imagem,
    alt: "Perfume 1",
    title: "Natura Una Artisan ",
    description: "Uma mistura requintada de elegância.",
  },
  {
    id: 2,
    src: imagem2,
    alt: "Perfume 2",
    title: "Essencial Único, da Natura ",
    description: "Uma fragrância de beleza atemporal.",
  },
  {
    id: 3,
    src: imagem3,
    alt: "Perfume 3",
    title: "Asad, da Lattafa ",
    description: "Capture momentos inesquecíveis.",
  },
  {
    id: 4,
    src: imagem4,
    alt: "Perfume 4",
    title: "Arabes ",
    description: "Uma combinação perfeita de sofisticação e elegância.",
  },
];

export default function Home() {
  return (
    <div className="font-sans p-8 text-center">
      <header className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-2">nonaperfumaria</h1>
          <h2 className="text-xl text-gray-400">Nona | Essência & Aroma | Perfumaria</h2>
          <p className="text-gray-400">Descubra nossa coleção exclusiva de perfumes ✨</p>
        </motion.div>
      </header>

      <section className="my-8">
        <motion.a
          href="https://wa.me/557581796229"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition duration-200"
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fale conosco pelo WhatsApp
        </motion.a>
      </section>

      <section className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-5xl mx-auto">
        <motion.div
          className="rounded-lg  overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden">
            <Image
              src={logo}
              alt={"Logo"}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-2xl font-semibold "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Novos perfumes
        </motion.h1>

        {perfumes.map((perfume) => (
          <motion.div
            key={perfume.id}
            className="rounded-lg  overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto  rounded-lg overflow-hidden">
              <Image
                src={perfume.src}
                alt={perfume.alt}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{perfume.title}</h3>
              <p className="text-gray-400 mt-2">{perfume.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="mt-8">
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} nonaperfumaria. Todos os direitos reservados.
            </p>
            <p className="text-sm mt-2">
              Desenvolvido por{" "}
              <a
                href="https://github.com/mateusdata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Mateus Santos
              </a>.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
