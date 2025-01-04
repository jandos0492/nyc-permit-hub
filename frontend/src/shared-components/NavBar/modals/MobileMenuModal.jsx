import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "store/session";

const MobileMenuModal = () => {
    const username = useSelector((state) => state.session.user?.username);
    const isAdmin = useSelector((state) => state?.session?.user?.isAdmin);

    const dispatch = useDispatch();

    const signOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyan-800 relative text-cyan-200 flex flex-col pt-12 pr-12 text-lg items-start pb-6 rounded-bl-lg shadow-md z-[3] justify-center"
        >
            <div className="px-8 py-4 flex">
                <i className="mr-2 text-xl fa-solid fa-user"></i>
                {username}
            </div>
            {isAdmin && (
                <Link className="px-8 py-4 flex" to="/all-users">
                    <i className="fa-solid fa-users mr-2 text-xl"></i>
                    users
                </Link>
            )}
            <Link className="px-8 py-4 flex" to="/auto/choose-language">
                <i className="fa-duotone fa-solid fa-car text-xl mr-2"></i>
                auto
            </Link>
            <Link className="px-8 py-4 flex" to="/cdl">
                <i className="fa-duotone fa-solid fa-truck text-xl mr-2"></i>
                cdl
            </Link>
            <Link to="/downloads"></Link>
            <Link className="px-8 py-4 flex" to="/downloads">
                <i className="fa-solid fa-download text-xl mr-2"></i>
                downloads
            </Link>
            <Link className="px-8 py-4 flex" to="/results">
                <i className="fa-solid fa-square-poll-horizontal mr-2 text-xl"></i>
                results
            </Link>
            <button onClick={signOut} className="px-8 py-4 flex">
                <i className="mr-2 text-xl fa-solid fa-arrow-right-from-bracket"></i>
                sign out
            </button>
        </motion.div>
    );
};

export default MobileMenuModal;
