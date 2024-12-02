import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import UserItem from "./UserItem";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as usersService from "services/allUsers";

const PAGE_SIZE = 3;

const AllUsers = () => {
    const [allUsersData, setAllUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageIdx, setPageIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await usersService.getAllUsers();
            const data = await response.json();
            setAllUsersData(data);
            setIsLoading(false);
        })();
    }, []);

    console.log(allUsersData[0]);

    const users = allUsersData
        .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
        .map((user, idx) => (
            <motion.div
                key={user.id}
                initial={{
                    opacity: 0,
                    translateY: "20px",
                }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3 + (idx % 3) * 0.2,
                    duration: 0.4,
                }}
            >
                <UserItem user={user} />
            </motion.div>
        ));

    const numPages = Math.ceil(allUsersData.length / PAGE_SIZE);
    const buttons = [];
    for (let i = 0; i < numPages; i++) {
        buttons.push(
            <button
                onClick={() => setPageIdx(i)}
                key={i}
                className={clsx(
                    "bg-cyan-800 text-cyan-200 text-xl rounded-sm m-1 w-6 transition-transform duration-200",
                    pageIdx === i &&
                        "bg-cyan-700 text-white scale-125 font-bold"
                )}
            >
                {i + 1}
            </button>
        );
    }

    return (
        <>
            <NavBar />
            {isLoading ? <LoadingSpinner /> : allUsersData.length > 0 ? (
                <div className="flex flex-col items-center bg-cyan-50 h-screen pt-12 md:pt-20">
                    <div className="w-full max-w-sm flex flex-col justify-center">
                        {users}
                    </div>
                    <div className="w-full max-w-2xl mt-4 flex justify-center">{buttons}</div>
                </div>
            ) : (
                <div className="flex justify-center pt-24 md:pt-48 text-slate-400 text-xl md:text-3xl">
                    No results found
                </div>
            )}
        </>
    );
};

export default AllUsers;
