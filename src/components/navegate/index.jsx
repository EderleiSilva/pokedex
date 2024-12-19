import { Link } from "react-router-dom";
import { ThemeToggleButton } from "../theme-toggle-button/theme-toggle-button";
import { ThemeContext } from "../../contexts/theme-contexts";
import { useContext } from "react";
import "./index.css"


function Navegate(){

    const { theme } = useContext(ThemeContext)
    
    return (
        <section className="navegate" style={{ color: theme.color1, backgroundColor: theme.backgroundColor1}}>
            <Link to='/'><img src="./src/assets/images/pokedex.png" /></Link>
            <ThemeToggleButton></ThemeToggleButton>
        </section>
    )
}

export{ Navegate }