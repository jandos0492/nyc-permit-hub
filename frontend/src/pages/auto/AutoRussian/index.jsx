import LearningOrTestCard from "shared-components/LearningOrTestCard";
import NavBar from "shared-components/NavBar";

const AutoRussian = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-cyan-50 flex justify-center font-lato">
                <div className="w-full max-w-6xl bg-cyan-50 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0 md:items-start my-8 md:mt-60 md:py-4">
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/learn-traffic-signs.jpg"
                        text="Изучите все необходимые дорожные знаки для прохождения теста на пермит в Нью-Йорке"
                        header="дорожные знаки"
                        link="/auto/russian/traffic-signs"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/learn.jpg"
                        text="Изучите все вопросы и подготовтесь к тесту на получение водительского пермита в Нью-Йорке"
                        header="подготовка"
                        link="/auto/russian/learn"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/full-test.jpg"
                        text="Пройдите тест по всем вопросам и получите результат"
                        header="полный тест"
                        link="/auto/russian/full-test"
                    />
                    <LearningOrTestCard
                        imageSrc="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/express-test.jpg"
                        text="Пройдите тест по 20 случайным вопросам, как в настоящем тесте"
                        header="экспресс тест"
                        link="/auto/russian/express-test"
                    />
                </div>
            </div>
        </div>
    );
};

export default AutoRussian;
