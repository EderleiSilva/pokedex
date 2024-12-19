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
                if (searchButton === '') {
                    for (let id = 1; id <= show; id++) {
                        listPokemon.push(`${startLinkApi}/pokemon/${id}`)
                    }
                } else {
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
                        <Inpult type="text" className="searchPokemon" id="input-search" placeholder="Pesquise um Pokemon" onChange={handleInpult}></Inpult>
                        <button className="btnSearch" id="btn-search" onClick={() => setSearchButton(filteredPokemon)}
                            style={{ fontSize: 25, opacity: '50%', backgroundColor: theme.backgroundColor2 }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Div>
                </li>
            </ul>
            <ul className="listPokemons">
                {
                    pokemons.filter((pokemon) => pokemon.name.includes(filteredPokemon)).map((pokemon, index) => {
                        return (
                            <Link key={index} to={`/pokemon/${pokemon.name}`}>
                                <li className="cardPokemon"
                                    style={{ color: theme.color1, backgroundColor: theme.backgroundColor1 }}>
                                    <img src={pokemon.sprites.front_default}
                                        style={{ backgroundColor: theme.backgroundColor2 }} />
                                    <p>N°{pokemon.id}</p>
                                    <h1>{pokemon.name}</h1>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <button className="btnLoadMore" onClick={() => setShow(show < 1020 ? show + 10 : show + 5)}
                style={{ color: theme.color1, backgroundColor: theme.backgroundColor1, cursor: 'pointer', border: 0 }}>
                Carragar Mais Pokémons
            </button>
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

export { ListPokemons }