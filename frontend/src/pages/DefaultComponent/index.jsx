import NavBar from "shared-components/NavBar";

const DefaultComponent = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center pt-24 md:pt-48 font-lato">
                <div className="text-slate-400 text-xl md:text-3xl">page not found</div>
            </div>
        </>
    );
};

export default DefaultComponent;
