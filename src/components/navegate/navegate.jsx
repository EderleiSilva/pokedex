import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeToggleButton } from "../theme-toggle-button/theme-toggle-button";
import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext } from "react";


function Navegate(){

    const { theme } = useContext(ThemeContext)
    
    return (
        <Section style={{ color: theme.color1, backgroundColor: theme.backgroundColor1}}>
            <Link to='/'><Img src="../../../public/image/pokedex.png" /></Link>
            <ThemeToggleButton></ThemeToggleButton>
        </Section>
    )
}

const Section = styled.section`
    //background-color: ;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 20px
`

const Img = styled.img`
    width: 100px;
`

export{ Navegate }