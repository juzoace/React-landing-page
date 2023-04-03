import "./header.css";
import navLogo from "../../assets/navLogo.png";
import { useState } from "react";
 
function Header() {

    const [dropdownState, setDropdownState] = useState(false);

    const toggleNavBar = () => {
        setDropdownState(!dropdownState);
    }
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
                    <div onClick={toggleNavBar} id="navBar__Breadcrumb">
                        <div className="navBar__BreadcrumbLine" id="navBar__BreadcrumbLineOne">___</div>
                        <div className="navBar__BreadcrumbLine">___</div>
                        <div className="navBar__BreadcrumbLine">___</div>
                    </div>
                </nav>
                {dropdownState ?
                 <div id="navDropdown">

                    <div id="navDropdown__itemContainer">
                        <a href="#">Curriculum</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                : <div>Hello</div>    
            }
                
            </header>
        </>

    )
}

export default Header;