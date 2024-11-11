import LearningOrTestCard from "shared-components/LearningOrTestCard";
import NavBar from "shared-components/NavBar";

const GeneralKnowledgePage = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-cyan-50 flex justify-center font-lato">
                <div className="w-full max-w-6xl bg-cyan-50 flex flex-col items-center gap-8 py-20 md:flex-row md:justify-between md:gap-0 md:items-start md:mt-60 md:py-4">
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/learn.jpg"
                        text="Learn all the questions and prepare for the CDL General Knowledge NYC permit test"
                        header="learn all questions"
                        link="/cdl/general-knowledge/learn"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/full-test.jpg"
                        text="Pass all the questions for CDL General Knowledge test and get the result"
                        header="full test"
                        link="/cdl/general-knowledge/full-test"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/express-test.jpg"
                        text="Pass only 50 random questions for CDL General Knowledge, like the real test in NYC DMV"
                        header="express test"
                        link="/cdl/general-knowledge/express-test"
                    />
                </div>
            </div>
        </div>
    );
};

export default GeneralKnowledgePage;
