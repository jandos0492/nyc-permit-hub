const AirBrakesLearnCard = ({
    airBrakesLearn,
    airBrakesLearnQuestionQty,
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {airBrakesLearn.no} / {airBrakesLearnQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl font-bold font-playfair text-center">
                    {airBrakesLearn.question}
                </div>
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-8 text-cyan-900 text-sm md:text-lg font-playfair text-center">
                    {
                        airBrakesLearn.answers[
                            airBrakesLearn.correctAnswerIndex
                        ]
                    }
                </div>
            </div>
        </div>
    );
};

export default AirBrakesLearnCard;
