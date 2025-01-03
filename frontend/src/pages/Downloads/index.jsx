import { motion } from "framer-motion";
import NavBar from "shared-components/NavBar";
import downloads from "data/downloads.json";
import DownloadItem from "./DownloadItem";

const Downloads = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-start bg-teal-50 min-h-screen">
                <div className="w-full max-w-5xl flex justify-center bg-teal-50 pt-12 md:pt-32 gap-4 md:gap-12 flex-wrap">
                    {downloads.map((download, idx) => (
                        <motion.div
                            key={download.no}
                            initial={{ opacity: 0, translateY: "20px" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3 + (idx % 3) * 0.2,
                                duration: 0.4,
                            }}
                        >
                            <DownloadItem download={download} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Downloads;
