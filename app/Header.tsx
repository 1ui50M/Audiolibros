import Image from 'next/image';

const hearder = () => {
  return (
    <>
    <header className="top-bar">
        <h3>Explore Market</h3>
        <div className="n-s">
          <a href="###">
            <Image src="/ico_notificacion.png" alt="Notificación" width={22} height={22} />
          </a>
          <a href="#">
            <Image src="/ico_busqueda.png" alt="Búsqueda" width={22} height={22} />
          </a>
        </div>
      </header>
    </>
  )
}

export default hearder