import { useContext } from "react";
import { ThemeContext } from "./Context";

const ThemeBox = () => {
    const theme = useContext(ThemeContext);
    return (
        <div
            style={{
                backgroundColor: theme.primary.main,
            }}
        >
            <h1>Theme Box</h1>
        </div>
    );
}

export default ThemeBox;