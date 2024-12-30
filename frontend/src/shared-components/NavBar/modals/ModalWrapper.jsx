import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
    const backgroundDivRef = useRef();

    if (!isOpen) {
        return null;
    }

    return (
        <RemoveScroll>
            <div
                ref={backgroundDivRef}
                onClick={(e) => {
                    if (e.target === backgroundDivRef.current) {
                        onCloseClick();
                    }
                }}
                className="fixed top-0 left-0 w-full h-full items-start z-[2] bg-black/30 backdrop-blur-sm flex justify-end font-lato"
            >
                <button
                    className="absolute z-[30] top-4 right-4 p-2 text-4xl text-cyan-400 hover:text-cyan-500 z-[3]"
                    onClick={onCloseClick}
                >
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {children}
            </div>
        </RemoveScroll>
    );
};

export default ModalWrapper;
