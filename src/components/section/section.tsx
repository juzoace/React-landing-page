import "./section.css"
import Rectangle1 from "../../assets/Rectangle 1.png";
import Rectangle2 from "../../assets/Rectangle 2.png";
import LadyPhoto from "../../assets/Lady photo.png";
import Rectangle3 from "../../assets/Rectangle 3.png";
import Rectangle4 from "../../assets/Rectangle 4.png";
import Rectangle5 from "../../assets/Rectangle 5.png";

function Section() {
    return (
        <>
            <main id="section">
                <h1 id="section__header">For those thinking of switching careers or getting into programming</h1>
                <p id="section__paragraph">Jumpstart your <b>tech career</b> in less than <b>30 days</b> leveraging <b>AI</b></p>
                <p id="section__paragraph">Kickoff your tech career and ship your first application in less than 30 days</p>
                <div id="section__buttonContainer">
                    <a className="section__button" id="section__button--enroll" href="#enroll">Enroll now</a>
                    <a className="section__button" id="section__button--contact" href="#contact">Talk to us</a>
                </div>
                <div id="section__imageContainer">
                    <img className="section__image" id="section__imageOne" src={Rectangle1} alt=""/>
                    <img className="section__image" id="section__imageTwo" src={Rectangle2}  alt=""/>
                    <img className="section__image" id="section__ladyPhoto" src={LadyPhoto} alt=""/> 
                    <img className="section__image" id="section__imageFour" src={Rectangle4} alt=""/>     
                    <img className="section__image" id="section__imageThree" src={Rectangle3} alt=""/>
                    <img className="section__image" id="section__imageFive" src={Rectangle5} alt=""/>
                </div>
            </main>
        </>

    )
}  

export default Section;