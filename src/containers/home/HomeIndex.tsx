import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HomeIndex = () => {
    const appState = useContext(AppContext);
    return (
            <div>
                Hello, {appState.firstname}
            </div>
    );
}

export default HomeIndex;