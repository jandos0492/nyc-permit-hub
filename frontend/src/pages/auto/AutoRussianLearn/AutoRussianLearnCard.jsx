const AutoRussianLearnCard = ({
    autoRussianLearn,
    russianLearnQuestionQty,
}) => {
    const answerHasImage = () => {
        return autoRussianLearn.answers[0].includes(".jpg");
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {autoRussianLearn.no} / {russianLearnQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                {autoRussianLearn.image && (
                    <img
                        className="w-24 h-24 md:w-48 md:h-48 object-contain"
                        src={autoRussianLearn.image}
                        alt="russian learn"
                    />
                )}
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl font-bold font-playfair text-center">
                    {autoRussianLearn.question}
                </div>
                {answerHasImage() ? (
                    <img
                        className="w-24 h-24 md:w-48 md:h-48 object-contain mt-8" 
                        src={
                            autoRussianLearn.answers[
                                autoRussianLearn.correctAnswerIndex
                            ]
                        }
                        alt=""
                    />
                ) : (
                    <div className="flex flex-shrink justify-center w-48 md:w-96 mt-8 text-cyan-900 text-sm md:text-lg font-playfair text-center">
                        {
                            autoRussianLearn.answers[
                                autoRussianLearn.correctAnswerIndex
                            ]
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoRussianLearnCard;
