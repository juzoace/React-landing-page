import "./header.css";
import navLogo from "../../assets/navLogo.png";

function header() {
    return (
        <>
            <header>
                <nav id="navBar">
                    <div className="textLogo">
                        <img className="logoDocplanner" src={navLogo} alt="octa8Academy"/>
                    </div>
                    <div id="navLinks">
                        <a href="#curriculum">Curriculum </a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="contactUs" id="navButton">Contact Us</a>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default header