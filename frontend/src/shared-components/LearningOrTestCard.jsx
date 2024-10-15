import { Link } from "react-router-dom";

const LearningOrTestCard = ({ imageSrc, text, header, link }) => {
    return (
        <Link to={link}>
            <div className="w-[160px] h-[240px] md:w-[200px] md:h-[340px] bg-cyan-800 flex flex-col items-center justify-start pt-2 rounded-lg pb-2 transform transition-transform duration-300 hover:scale-105">
                <img
                    className="w-[140px] h-[120px] md:w-[180px] md:h-[300px] object-cover rounded-lg"
                    src={imageSrc}
                    alt={header}
                />
                <div className="text-cyan-200 pt-6 font-playfair">{header}</div>
                <div className="text-xs text-center text-cyan-100 mt-2 mb-4 mx-4">
                    {text}
                </div>
            </div>
        </Link>
    );
};

export default LearningOrTestCard;