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
        const response = await fetch('https://68140292225ff1af1627af11.mockapi.io/book');
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
      <Header />
      <Nav />

      <div className="card-grid">
        {books.map((book, index) => (
          <Card
            key={index}
            titulo={book.titulo}
            autor={book.autor}
            precio={book.precio}
            imagen={book.imagen}
          />
        ))}
      </div>

      <div className="fin">
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
}
