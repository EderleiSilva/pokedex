import { useContext, useEffect, useState } from "react";
import { startLinkApi } from "../../variables/variables";
import axios from "axios";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import './index.css'
import { ThemeContext } from "../../contexts/theme-contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ListPokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState(10)

    const [filteredPokemon, setFilteredPokemon] = useState('')
    const [searchButton, setSearchButton] = useState('')
    
    const handleInpult = (event) => {
        setFilteredPokemon(event.target.value)
    }
    
    useEffect(() => {
        const lisOfPokemons = async () => {
            const listPokemon = []

            try {
                if(searchButton === ''){
                    for (let id = 1; id <= show; id++) {
                        listPokemon.push(`${startLinkApi}/pokemon/${id}`)
                    }
                }else {
                    listPokemon.push(`${startLinkApi}/pokemon/${searchButton}`)
                }

                await axios.all(listPokemon.map((pokemon => axios.get(pokemon))))
                    .then((results) => axios.all(results.map(async results => results.data)))
                    .then((datas) => {
                        setPokemons(datas)
                    })
                    .catch(function (error) {
                        console.log(error)
                        
                    });
            } catch (error) {
                console.log(error)
            }
        }
        
        lisOfPokemons();
    }, [show, searchButton]);
    
    const { theme } = useContext(ThemeContext)

    return (
        <Div style={{ color: theme.color1, backgroundColor: theme.backgroundColor2 }}>
            <ul>
                <li>
                    <Div search>
                        <Inpult placeholder="Pesquise um Pokemon" onChange={handleInpult}></Inpult>
                        <button onClick={() => setSearchButton(filteredPokemon)}
                                style={{fontSize: 25, opacity: '50%', backgroundColor: theme.backgroundColor2}}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Div>
                </li>
            </ul>
            <Ul>
                {
                    pokemons.filter((pokemon) => pokemon.name.includes(filteredPokemon)).map((pokemon, index) => {
                        return (
                            <Link key={index} to={`/pokemon/${pokemon.name}`}>
                                <Li className="card"
                                    style={{ color: theme.color1, backgroundColor: theme.backgroundColor1 }}>
                                    <Img src={pokemon.sprites.front_default}
                                        style={{ backgroundColor: theme.backgroundColor2 }} />
                                    <P>N°{pokemon.id}</P>
                                    <H1 className="namePokemon">{pokemon.name}</H1>
                                </Li>
                            </Link>
                        )
                    })
                }
            </Ul>
            <Button className="btn" onClick={() => setShow(show < 1020 ? show + 10 : show + 5)}
                style={{ color: theme.color1, backgroundColor: theme.backgroundColor1, cursor: 'pointer', border: 0}}>
                Carragar Mais Pokémons
            </Button>
        </Div>
    );
}

const Div = styled.div`
    max-width: 1100px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 50px;
    border-radius: 20px;
    ${props => props.search && css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 0;
        margin: 22px;
        gap: 10px;
    `}
`

const Inpult = styled.input`
    border-radius: 20px;
    padding: 10px;
    width: 300px;
    border: 0;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    width: 150px;
    border: 1px solid;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: 0.2s ease-in-out;
`

const Img = styled.img`
    width: 100px;
    margin: 10px 10px 0;
    border: 1px solid;
    border-radius: 10px;
`;

const H1 = styled.h1`
    font-size: 20px;
`

const P = styled.p`
    width: 70%;
    font-size: 12px;
`;

const Button = styled.button`
    text-decoration: none;
    margin: 50px;
    padding: 20px 30px;
    font-size: 20px;
    border-radius:10px;
    transition: 0.2s ease-in-out;
`

export { ListPokemons }