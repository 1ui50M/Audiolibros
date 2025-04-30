import Image from "next/image"

const Footer = () => {
  return (
    <>
        <footer className="bottom-bar">
        <a href="#">
          <Image src="/ico-home.png" alt="Home" width={30} height={10} />
        </a>
        <a href="##">
          <Image src="/ico-opc.png" alt="Opciones" width={30} height={10} />
        </a>
        <a href="###">
          <Image src="/ico-save.png" alt="Guardar" width={30} height={10} />
        </a>
        <a href="####">
          <Image src="/ico-profile.png" alt="Perfil" width={30} height={10} />
        </a>
      </footer>
    </>
  )
}

export default Footer