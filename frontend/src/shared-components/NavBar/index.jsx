import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import MobileMenuModal from "./modals/MobileMenuModal";
import ModalWrapper from "./modals/ModalWrapper";
import * as sessionActions from "store/session";

const NavBar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const username = useSelector((state) => state.session.user?.username);
    const dispatch = useDispatch();
    const isAdmin = useSelector((state) =>
        Boolean(state.session.user?.isAdmin)
    );

    const signOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <RedirectToSignInIfSignedOut>
            <>
                    <nav
                        onMouseLeave={() => setUserMenuOpen(false)}
                        className="bg-cyan-800 flex justify-center font-lato"
                    >
                        <div className="w-full max-w-7xl flex items-center justify-between px-8 py-2 md:justify-around">
                            <div className="text-white font-playfair text-2xl flex flex-col items-center">
                                <Link
                                    to="/"
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        className="w-14"
                                        src="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/nyc-permit-hub-logo.jpg"
                                        alt="logo"
                                    />
                                    NYC Permit Hub
                                </Link>
                            </div>
                            <div className="justify-around flex-1 hidden lg:flex">
                                {isAdmin && (
                                    <div className="text-xl text-cyan-200">
                                        <i className="fa-light fa-users mr-2"></i>
                                        <Link to="/all-users">users</Link>
                                    </div>
                                )}
                                <div className="text-2xl text-cyan-200">
                                    <Link to="/auto/choose-language">
                                        <i className="fa-duotone fa-solid fa-car"></i>
                                    </Link>
                                </div>
                                <div className="text-2xl text-cyan-200">
                                    <Link to="/cdl">
                                        <i className="fa-duotone fa-solid fa-truck"></i>
                                    </Link>
                                </div>
                                <div className="text-xl text-cyan-200">
                                    <Link to="/downloads">
                                        <i className="fa-regular fa-download text-xl mr-2"></i>
                                        downloads
                                    </Link>
                                </div>
                                <div className="text-xl text-cyan-200">
                                    <i className="fa-solid fa-square-poll-horizontal mr-2"></i>
                                    <Link to="/results">results</Link>
                                </div>
                                <div className=" flex justify-end">
                                    <div className="relative min-w-32">
                                        <button
                                            onClick={() =>
                                                setUserMenuOpen(true)
                                            }
                                            className="text-cyan-200 flex gap-2 items-center text-xl"
                                        >
                                            <i className="fa-solid fa-user"></i>
                                            {username}
                                        </button>
                                        {userMenuOpen && (
                                            <div className="absolute bottom-[-46px] left-0 bg-white rounded-md shadow-md">
                                                <button
                                                    onClick={signOut}
                                                    className="text-slate-500 hover:text-cyan-700 px-4 py-2"
                                                >
                                                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                                                    sign out
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="flex lg:hidden text-3xl"
                            >
                                <i className="fa-solid fa-bars text-cyan-200"></i>
                            </button>
                        </div>
                    </nav>
                    <ModalWrapper
                        isOpen={mobileMenuOpen}
                        onCloseClick={() => setMobileMenuOpen(false)}
                    >
                        <MobileMenuModal />
                    </ModalWrapper>
            </>
        </RedirectToSignInIfSignedOut>
    );
};

export default NavBar;
