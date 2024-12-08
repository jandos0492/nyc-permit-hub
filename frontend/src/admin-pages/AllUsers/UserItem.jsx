import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as deleteUserService from "services/deleteUser";

const UserItem = ({ user, fetchUsers }) => {
    const myUserId = useSelector((state) => state.session.user.id);

    const handleDeleteUser = async () => {
        await deleteUserService.deleteUser({ id: user.id });
        fetchUsers();
    };

    const cardColor = user.isAdmin
        ? "bg-indigo-100 border-indigo-400"
        : "bg-gray-200 border-gray-400";
    const textColor = user.isAdmin ? "text-indigo-800" : "text-gray-800";

    return (
        <div
            className={`border rounded-lg p-4 shadow-lg flex flex-col gap-2 ${cardColor} transition-transform duration-300 hover:scale-105 mb-8`}
        >
            <div className="flex flex-col items-center gap-1">
                <div className="text-lg font-bold">{user.username}</div>
                <div className={`font-medium text-sm ${textColor}`}>
                    {user.isAdmin ? "Admin" : "Regular User"}
                </div>
            </div>
            <div className="border-t border-gray-300 pt-2 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="font-medium text-gray-700">User ID:</div>
                    <div className="text-gray-900">{user.id}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="font-medium text-gray-700">Email:</div>
                    <div className="text-gray-900 truncate">{user.email}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="font-medium text-gray-700">Username:</div>
                    <div className="text-gray-900">{user.username}</div>
                </div>
            </div>
            <div className="flex-1 flex justify-around mt-4">
                <Link
                    to={`/users/${user.id}/results`}
                    className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-semibold border border-blue-700 py-1 px-3 rounded-lg shadow-md transition-all duration-200
"
                >
                    See Results
                </Link>
                {myUserId !== user.id && (
                    <button
                        className="bg-red-600 text-white hover:bg-red-700 active:bg-red-800 font-semibold border border-red-700 py-1 px-3 rounded-lg shadow-md transition-all duration-200"
                        onClick={handleDeleteUser}
                    >
                        <i className="fa-solid fa-trash mr-2"></i>Delete user
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserItem;
