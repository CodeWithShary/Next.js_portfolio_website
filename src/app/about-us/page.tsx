import Header from "@/components/header";
import Footer from "@/components/footer";


export default function About() {
    return(
        <div>
            <Header/>
            <div className="about-container">
        
        <section className="personal-details">
            <h2 className="section-title">Personal Details</h2>
            <div className="content">
                <p><strong>Name:</strong> Muhammad Shaharyar</p>
                <p><strong>E-mail:</strong> muhammadshaharyar2003@gmail.com</p>
                <p><strong>Location:</strong> Karachi, Pakistan</p>
                <p><strong>Religion:</strong> Islam</p>
                <p><strong>Languages:</strong> English, Urdu</p>

            </div>
        </section>

        <section className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="content">
                <p><strong>Graphic Designer:</strong> 1 year experience (Beginner)</p>
                <p><strong>Typescript , html & Css:</strong> 4 month experience</p>
                <p><strong>Next.js:</strong> 1 month experience (Beginner)</p>
                <p><strong>Digitial Marketing:</strong> 1 Years</p>

                <ul className="experience-list">
                    <li>Set clear, specific goals – Break goals into small, actionable steps.</li>
                    <li>Stay consistent – Focus on daily discipline and don’t give up.</li>
                    <li>Trust in Allah and take action – Work hard and rely on Allah for the outcome.</li>
                </ul>
            </div>  
        </section>

        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="content">
                
                <p><strong>Matriculation:</strong> 2021</p>
                <p><strong>Intermediate:</strong> 2023</p>
                <p><strong>Degree:</strong> BSCS Bachelor of Science in Computer Science</p>
                <p><strong>University:</strong> Federal Urdu University</p>
                <p><strong>Year of Graduation:</strong> 2028</p>
                <p><strong>Study In GIAIC:</strong> Quarter-2</p>

            </div>
        </section>
    </div>
    <Footer/>
    
        </div>
    );
}