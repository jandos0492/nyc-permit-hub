import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";

const HomePage = () => {
    return (
        <RedirectToSignInIfSignedOut>
            <NavBar />
        </RedirectToSignInIfSignedOut>
    );
}

export default HomePage;