const GeneralKnowledgePageCard = ({
    generalKnowledgeLearn,
    generalKnowledgeLearnQuestionQty,
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {generalKnowledgeLearn.no} / {generalKnowledgeLearnQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl  font-playfair font-bold text-center">
                    {generalKnowledgeLearn.question}
                </div>
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-8 text-cyan-900 text-sm md:text-lg font-playfair text-center">
                    {
                        generalKnowledgeLearn.answers[
                            generalKnowledgeLearn.correctAnswerIndex
                        ]
                    }
                </div>
            </div>
        </div>
    );
};

export default GeneralKnowledgePageCard;
