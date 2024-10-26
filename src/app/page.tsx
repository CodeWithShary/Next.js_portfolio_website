import Image from "next/image";
import image3 from './public/image3.jpeg'
import Header from "../components/header"
import Footer from "../components/footer"
export default function Home() {
  return (
    <div>
      <Header/>
          
    <div className="background-home">
    <div className="portfolio-container">
      <div className="text-home">
        <h1 className="heading">
          <b>Muhammad Shaharyar</b>
        </h1>
        <p className="description">Muhammad Shaharyar is an ambitious university level student and has a strong foundation in modern web development technologies, including TypeScript, Next.js, HTML, and CSS. </p>
      </div>
      
      <div className="image">
      <Image src={image3} alt="My Picture" ></Image>

      </div>
    </div>
    </div>
    <Footer/>

          
    </div>
    
  );
}
