const FormContainer = ({ children }) => {
    return (
        <>
            <div className="flex">
                <div className="relative hidden md:flex">
                    <img
                        className="h-screen object-cover"
                        src="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/911-image.jpg"
                        alt="NYC"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-green-800/30"></div>
                </div>
            </div>
            <div className="h-screen flex flex-col items-center justify-center bg-green-50 w-full">
                <div className="flex flex-col items-center mx-2 my-8">
                    <div className="font-playfair text-emerald-700 text-3xl">
                        NYC Permit Hub
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default FormContainer;
