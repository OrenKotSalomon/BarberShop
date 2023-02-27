import { AppHeader } from "../cmps/app-header";
import download from "../assests/img/download.png";
import download2 from "../assests/img/download2.png";
import download3 from "../assests/img/download3.jpg";

export function HomePage() {
    return (
        <section className='home-page'>

            <section className="main-container">
                <div className="img-container">
                    <div className="img">
                        <img src={download} alt="" />
                    </div>
                    <div className="img">
                        <img src={download2} alt="" />
                    </div>
                    <div className="img">
                        <img src={download3} alt="" />
                    </div>
                </div>
            </section>

        </section>
    )
}