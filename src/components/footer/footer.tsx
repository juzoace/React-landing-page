import "./footer.css";
import footerLogo from "../../assets/footerLogo.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";

function footer () {
    return (
        <main id="footer">
            <div id="footer__imageContainer">
                <img id="footer__image" src={footerLogo} alt=""/>
            </div>
            
            <div id="footer__ccnnectionContainer">
                <div id="footer__connectionParagraphContainer">
                    <p id="footer__connectionParagraph">Connect with us on</p>
                </div>
                <div id="footer__connectionImageContainer">
                    <img className="footer__connectionImage" id="footer__connectionImageOne" src={twitter} alt="" />
                    <img className="footer__connectionImage" id="footer__connectionImageTwo" src={linkedin} alt="" />
                    <img className="footer__connectionImage" id="footer__connectionImageThree" src={facebook} alt="" />
                </div>
            </div>
        </main>
    )
}

export default footer;