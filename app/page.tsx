import Image from 'next/image';
import Header from './Header';
import Nav from './Nav';
import Card from './Card';
import Footer from './Footer';

export default function Home() {
  return (
   
    <>
      <Header/>
      <Nav/>
       <div className="card-grid"> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>    
      </div>     
      
      <div className="fin">
        <br />
        <br />
      </div>

      <Footer/>
    </>
  );
}
