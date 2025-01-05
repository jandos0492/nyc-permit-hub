import LearningOrTestCard from "shared-components/LearningOrTestCard";
import NavBar from "shared-components/NavBar";

const CDLPage = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-cyan-50 flex justify-center font-lato">
                <div className="w-full max-w-6xl bg-cyan-50 flex flex-col items-center gap-4 md md:flex-row md:justify-between md:gap-0 md:items-start mt-8 md:mt-60 md:py-4">
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/general-kowledge-image.jpg"
                        text=""
                        header="general knowledge"
                        link="/cdl/general-knowledge"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/air-brakes-image.jpg"
                        text=""
                        header="air brakes"
                        link="/cdl/air-brakes"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/combination-vehicle-image.jpg"
                        text=""
                        header="combination vehicles"
                        link="/cdl/combination-vehicles"
                    />
                </div>
            </div>
        </div>
    );
};

export default CDLPage;
