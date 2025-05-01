'use client';
import Image from 'next/image';
import Header from './Header';
import Nav from './Nav';
import Card from './Card';
import Footer from './Footer';
import { useEffect, useState } from 'react';
interface Book {
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://680a57e41f1a52874ce025be.mockapi.io/libro');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
   
    <>
      <Header/>
      <Nav/>
       <div className="card-grid"> 
       <Card titulo="Cien Años de Soledad" autor="Gabriel García Márquez" precio={70} imagen="/book-cien-años-de-soledad.png" />
       <Card titulo="El Principito" autor="Antoine de Saint-Exupéry" precio={50} imagen="/book-principito.png" />
       <Card titulo="El Alquimista" autor="Paulo Coelho" precio={60} imagen="/book-alquimista.png" />
       <Card titulo="Los juegos del hambre" autor="Suzanne Collins" precio={65} imagen="/book-juegos-del-hambre.png" />
      <Card titulo="Elon Musk" autor="Ashlee Vance" precio={120} imagen="/book-musk.png" />
      <Card titulo="Steve Jobs" autor="Walter Isaacson" precio={130} imagen="/book-Jobs.png" />
      <Card titulo="Código Limpio" autor="Robert C. Martin" precio={60} imagen="/book-clean-code.png" />
      <Card titulo="Gamer" autor="Chris Bradford" precio={100} imagen="/book-gamer.png" />
      <Card titulo="Código Fuente" autor="Bill Gates" precio={150} imagen="/book-Codigo-fuente.png" />
      <Card titulo="C# Estudiantes" autor="Grover Magueño" precio={50} imagen="/book-c.png" />
      </div>     
      
      <div className="fin">
        <br />
        <br />
      </div>

      <Footer/>
    </>
  );
}
