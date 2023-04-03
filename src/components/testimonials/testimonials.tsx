import "./testimonials.css";
import TestifyCandidateOne from "../../assets/testify candidate one.png";
import Star from "../../assets/Star.png";
import TestifyCandidateCardOneTwo from "../../assets/testify candidate two-two.png";
import TestifyCandidateCardOneOne from "../../assets/testify candidate two-one.png";
import TestifyCandidateCardOneThree from "../../assets/testify candidate two-three.png";

function testimonials() {
    return (
        <>
            <main id="testimonials">

                <div id="testimonials__cardOne">
                    <div id="testimonials__cardOneImageContainer">
                        <img id="testimonials__cardOneImage" src={TestifyCandidateOne} alt="Octa8 website testify candidate taiwo ojo"/>
                    </div>
                    <div id="testimonials__cardOneTextContainer">
                        <p id="testimonials__cardOneText">I joined sense8 on the Frontend Engineering track. 
                            <br></br>I went from a complete newbie to developing scalable web apps and <br></br> chatbots using the latest AI technologies in roughly 2 months.</p>
                        <h1>Taiwo Ojo</h1>
                    </div>
                </div>
                
                <div id="testimonials__cardTwo">
                    <h1 id="testimonials__cardTwoHeader">Our Students love us</h1>
                    <div id="testimonials__cardTwoCardsContainer">



                        <div className="testimonials__cardTwoCard" id="testimonials__cardTwoCardOneFirstTestimonial">
                            <div className="testimonials__cardTwoCardOneRating">
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                            </div>
                            <p className="testimonials__cardTwoCardParagraph" id="testimonials__cardTwoCardOneParagraph">I've tried many online software engineering courses before, but none of them compare to this one. The real-time training and personalised feedback i received from the instructors were invaluabe.</p>

                            <div className="testimonials__cardTwoImageAndTextContainer" id="testimonials__cardTwoCardOneImageAndTextContainer">
                                <div className="testimonials__cardTwoCardImageContainer" id="testimonials__cardTwoCardOneImageContainer">
                                    <img src={TestifyCandidateCardOneOne} alt=""/>
                                </div>
                                <div id="testimonials__cardTwoCardOneTextContainer">
                                    <h1 className="testimonials__CardTwoCardHeader" id="testimonials__CardTwoCardOneHeader">
                                        Alabi Opeyemi
                                    </h1>
                                    <p id="testimonials__cardTwoCardOneText">
                                        Recent graduate
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials__cardTwoCard" id="testimonials__cardTwoCardTwoSecondTestimonial">
                            <div className="testimonials__cardTwoCardOneRating">
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                            </div>
                            <p className="testimonials__cardTwoCardParagraph" id="testimonials__cardTwoCardOneParagraph">I'm so glad I stumbled upon this website. The lessons are easy to follow, and the additional resources were a game-changer for me.</p>
                            <div className="testimonials__cardTwoImageAndTextContainer" id="testimonials__cardTwoCardOneImageAndTextContainer">
                                <div className="testimonials__cardTwoCardImageContainer" id="testimonials__cardTwoCardOneImageContainer">
                                    <img src={TestifyCandidateCardOneTwo} alt=""/>
                                </div>
                                <div id="testimonials__cardTwoCardOneTextContainer">
                                    <h1 className="testimonials__CardTwoCardHeader" id="testimonials__CardTwoCardOneHeader">
                                        Albert Oguns
                                    </h1>
                                    <p id="testimonials__cardTwoCardOneText">
                                        Freelance Artist
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div className="testimonials__cardTwoCard" id="testimonials__cardTwoCardThreeThirdTestimonial">
                            <div className="testimonials__cardTwoCardOneRating">
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                                <img src={Star} alt=""/>
                            </div> 
                            <p className="testimonials__cardTwoCardParagraph" id="testimonials__cardTwoCardOneParagraph">I'm so glad I stumbled upon this website. The lessons are easy to follow, and the additional resources were a game-changer for me.</p>
                            <div className="testimonials__cardTwoImageAndTextContainer" id="testimonials__cardTwoCardOneImageAndTextContainer">
                                <div className="testimonials__cardTwoCardImageContainer" id="testimonials__cardTwoCardOneImageContainer">
                                    <img src={TestifyCandidateCardOneThree} alt=""/>
                                </div>
                                <div id="testimonials__cardTwoCardOneTextContainer">
                                    <h1 className="testimonials__CardTwoCardHeader" id="testimonials__CardTwoCardOneHeader">
                                        Salisu Ibrahim
                                    </h1>
                                    <p id="testimonials__cardTwoCardOneText">
                                        Corps member
                                    </p>
                                </div> 
                            </div>
                        </div>

                    </div>

                    <div id="testimonials__whiteSpace">

                    </div>
                </div>

            </main>
        </>
    )
}

export default testimonials