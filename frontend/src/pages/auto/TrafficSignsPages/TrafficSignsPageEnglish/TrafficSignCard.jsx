const TrafficSignCard = ({ image, description, no, signsQty }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {no} / {signsQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                <img
                    className="w-24 h-24 md:w-48 md:h-48 object-contain"
                    src={image}
                    alt="traffic sign"
                />
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-8 text-cyan-900 text-sm md:text-lg font-playfair text-center">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default TrafficSignCard;
