import "./details.css";
import tick from "../../assets/Icon.png";
import amount from "../../assets/Five thousand naira.png";

function Details() {
    return (
        <>
            <main id="details">
                <h1 id="details__header">All features for one price</h1>              
                <div id="details__card">

                    <div>
                        <div id="details__item">
                            <img src={tick} alt=""/> <p id="details__item">Introduction to software engineering</p>
                        </div>
                        <div id="details__item">
                            <img src={tick} alt=""/> <p id="details__item">Using low code technologies to create web <br></br> and mobile applications with little or no <br></br> knowledge of programming</p>
                        </div>
                    </div>

                    <div>
                        <div id="details__item">
                            <img src={tick} alt=""/> <p id="details__item">Using AI tools to ideate solutions quickly.</p>
                        </div>
                        <div id="details__item">
                            <img src={tick} alt=""/> <p id="details__item">Build Dating apps, fintech apps & edtech <br></br> using no-code tools</p>
                        </div>
                    </div>

                    <div>
                        <div id="details__amountContainer">
                            <img id="details__amountImage" src={amount} alt="Five thousand naira"/>
                        </div>
                        
                        <div id="details__enrollContainer">
                            <a id="details__enrollButton" href="Enroll">Enroll Now</a>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}

export default Details;
