import Image from "next/image"

const card = () => {
  return (
    <>
        {/* <div className="card-grid"> */}
               <div className="card">
                 <Image src="/book-musk.png" alt="Elon Musk" width={150} height={220} />
                 <h3>Elon Musk</h3>
                 <p>by Ashlee Vance</p>
                 <div className="price-container">
                   <h3 className="price">Bs. 120</h3>
                   <button>Comprar</button>
                 </div>
               </div> 
         {/* </div>      */}
    </>

     /* <div className="card-grid">
        <div className="card">
          <Image src="/book-musk.png" alt="Elon Musk" width={150} height={220} />
          <h3>Elon Musk</h3>
          <p>by Ashlee Vance</p>
          <div className="price-container">
            <h3 className="price">Bs. 120</h3>
            <button>Comprar</button>
          </div>
        </div>

        <div className="card">
          <Image src="/book-Jobs.png" alt="Steve Jobs" width={150} height={220} />
          <h3>Steve Jobs</h3>
          <p>by Walter Isaacson</p>
          <div className="price-container">
            <h3 className="price">Bs. 130</h3>
            <button>Comprar</button>
          </div>
        </div>

        <div className="card">
          <Image src="/book-clean-code.png" alt="Código Limpio" width={150} height={220} />
          <h3>Código Limpio</h3>
          <p>by Robert C. Martin</p>
          <div className="price-container">
            <h3 className="price">Bs. 60</h3>
            <button>Comprar</button>
          </div>
        </div>

        <div className="card">
          <Image src="/book-gamer.png" alt="Gamer" width={150} height={220} />
          <h3>Gamer</h3>
          <p>by Chris Bradford</p>
          <div className="price-container">
            <h3 className="price">Bs. 100</h3>
            <button>Comprar</button>
          </div>
        </div>

        <div className="card">
          <Image src="/book-Codigo-fuente.png" alt="Código Fuente" width={150} height={220} />
          <h3>Código Fuente</h3>
          <p>by Bill Gates</p>
          <div className="price-container">
            <h3 className="price">Bs. 150</h3>
            <button>Comprar</button>
          </div>
        </div>

        <div className="card">
          <Image src="/book-c.png" alt="C# Estudiantes" width={150} height={220} />
          <h3>C# Estudiantes</h3>
          <p>by Grover Magueño</p>
          <div className="price-container">
            <h3 className="price">Bs. 50</h3>
            <button>Comprar</button>
          </div>
        </div>
      </div> */
  )
}

export default card