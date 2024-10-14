import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactUs(){
    return(
        <div>
            <Header/>
            <div className="about-container">
        
           <section className="personal-details">
            <h2 className="section-title">Contact Us</h2>
            <div className="content">
               
                 <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-shaharyar-113395297/" className="profile-link linkedin-link">Linkedin-link</a></p>
                 <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100013586612472" className="profile-link facebook-link">Facebook-link</a></p>
                 <p>Vercel: <a href="https://vercel.com/muhammad-shaharyars-projects-1de60634" className="profile-link Vercel-link">Vercel-link</a></p>
                 <p>Github: <a href="https://github.com/CodeWithShary" className="profile-link github-link">Github-link</a></p>

            </div>
          </section>
          </div>
          <Footer/>

        </div>
    );
}