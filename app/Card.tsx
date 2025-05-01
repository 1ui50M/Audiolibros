import Image from "next/image"

interface CardProps {
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
}

const card = ({ titulo, autor, precio, imagen }: CardProps) => {
  return (
     <div className="card">
      <Image src={imagen} alt={titulo} width={150} height={220} />
      <h3>{titulo}</h3>
      <p>by {autor}</p>
      <div className="price-container">
        <h3 className="price">Bs. {precio}</h3>
        <button>Comprar</button>
      </div>
    </div>

      
  )
}

export default card