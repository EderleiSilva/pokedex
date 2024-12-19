import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-contexts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggleButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
            <button 
                style={{fontSize: 50, color: theme.color1, backgroundColor: theme.backgroundColor1, cursor: 'pointer', border: 0}} 
                onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                    <FontAwesomeIcon icon={faAdjust} />
            </button>
    )
}