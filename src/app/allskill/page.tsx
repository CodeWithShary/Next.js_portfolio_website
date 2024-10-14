import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactUs(){
    return(
        <div>
            <Header/>
            <div className="about-container">
        
           <section className="personal-details">
            <h2 className="section-title">Skills</h2>
            <div className="content">
               
                 <p>1. <b>Typescript</b> </p>
                 <p>2. Html & Css </p>
                 <p>3. <b>Next.js </b></p>
                 <p>4. <b>Javascripts</b></p>

            </div>
          </section>
          </div>
          <Footer/>

        </div>
    );
}