import { Link } from "react-router-dom";
import NavBar from "shared-components/NavBar";

const AutoChooseLanguage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-cyan-50 flex justify-center font-lato">
                <div className="w-full max-w-6xl h-screen bg-teal-50 flex mt-24 flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:mt-60 md:justify-between">
                    <Link to="/auto/english">
                        <div className="w-[300px] h-[370px] md:w-[420px] md:h-[500px] bg-cyan-800 flex flex-col items-center justify-center py-16 rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <img
                                className="w-[280px] h-[360px] md:w-[380px] md:h-[460px] object-cover rounded-lg"
                                src="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english.jpg"
                                alt="car"
                            />
                            <div className="text-cyan-200 mt-8">english</div>
                        </div>
                    </Link>
                    <Link to="/auto/russian">
                        <div className="w-[300px] h-[370px] md:w-[420px] md:h-[500px] bg-cyan-800 flex flex-col items-center justify-center py-16 rounded-lg mb-6 transform transition-transform duration-300 hover:scale-105">
                            <img
                                className="w-[280px] h-[360px] md:w-[380px] md:h-[460px] object-cover rounded-lg"
                                src="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/russian.jpg"
                                alt="truck"
                            />
                            <div className="text-cyan-200 mt-8">russian</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AutoChooseLanguage;