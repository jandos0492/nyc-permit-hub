import NavBar from "shared-components/NavBar";
import downloads from "data/downloads.json";
import DownloadItem from "./DownloadItem";

const Downloads = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-start bg-teal-50 min-h-screen">
                <div className="w-full max-w-5xl flex justify-center bg-teal-50 pt-12 md:pt-32 gap-4 md:gap-12 flex-wrap">
                    {downloads.map((download) => (
                        <DownloadItem key={download.no} download={download} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Downloads;

