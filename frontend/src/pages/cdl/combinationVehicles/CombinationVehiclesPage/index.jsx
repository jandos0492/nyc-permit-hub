import LearningOrTestCard from "shared-components/LearningOrTestCard";
import NavBar from "shared-components/NavBar";

const CombinationVehiclesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-cyan-50 flex justify-center font-lato">
                <div className="w-full max-w-6xl bg-cyan-50 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0 md:items-start my-8 md:mt-60 md:py-4">
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/learn.jpg"
                        text="Learn all the questions and prepare for the CDL Combination Vehicles NYC permit test"
                        header="learn all questions"
                        link="/cdl/combination-vehicles/learn"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/full-test.jpg"
                        text="Pass all the questions for CDL Combination Vehicles test and get the result"
                        header="full test"
                        link="/cdl/combination-vehicles/full-test"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/express-test.jpg"
                        text="Pass only 25 random questions for CDL Combination Vehicles, like the real test in NYC DMV"
                        header="express test"
                        link="/cdl/combination-vehicles/express-test"
                    />
                </div>
            </div>
        </div>
    );
};

export default CombinationVehiclesPage;
