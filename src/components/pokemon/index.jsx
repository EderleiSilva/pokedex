import { useContext, useEffect, useState } from "react";
import { startLinkApi } from "../../variables/variables";
import axios from "axios";
import { useParams } from "react-router-dom";
import { starLinkImageApi, starLinkImageShinyApi, starLinkImageBackApi, starLinkImageShinyBackApi } from "../../variables/variables";
import styled, { css } from "styled-components";
import './index.css'
import { ThemeContext } from "../../contexts/theme-contexts";

async function getPokemon(name) {
    const response = await axios.get(`${startLinkApi}/pokemon/${name}`)
    return response.data
}

async function getMove(name) {
    const response = await axios.get(`${startLinkApi}/pokemon/${name}`)
    return response.data.moves
}

async function getType(name) {
    const response = await axios.get(`${startLinkApi}/pokemon/${name}`)
    return response.data.types
}

async function getAbility(name) {
    const response = await axios.get(`${startLinkApi}/pokemon/${name}`)
    return response.data.abilities
}

function PokemonDetails() {
    const [pokemon, setPokemon] = useState({});

    const { name } = useParams()

    useEffect(() => {
        async function fetchPokemons() {
            const pokemons = await getPokemon(name)
            setPokemon(pokemons)
        }
        fetchPokemons();
    }, []);

    const [move, setMove] = useState([]);

    useEffect(() => {
        async function fetchMove() {
            const moves = await getMove(name)
            setMove(moves)
        }
        fetchMove()
    }, [])

    const [type, setType] = useState([]);

    useEffect(() => {
        async function fetchType() {
            const types = await getType(name)
            setType(types)
        }
        fetchType()
    }, [])

    const [ability, setAbility] = useState([])

    useEffect(() => {
        async function fetchAbility() {
            const abilities = await getAbility(name)
            setAbility(abilities)
        }
        fetchAbility()
    }, [])

    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        async function fetchAbilities() {

            try {
                function fetchUrl() {
                    const listAbylities = []
                    ability.map((url) => {
                        listAbylities.push(url.ability.url)
                    })
                    return listAbylities
                }

                const listAbility = fetchUrl()

                await axios.all(listAbility.map((ability) => axios.get(ability)))
                    .then((results) => axios.all(results.map(async results => results.data)))
                    .then((urlAbility) => {
                        setAbilities(urlAbility)
                    })

            } catch (error) {
                console.log(error)
            }

        }
        fetchAbilities()
    }, [ability])

    const [effect, setEffect] = useState([])

    useEffect(() => {

        function fetchEffect() {
            const listEffect = []
            abilities.map((datas) => {
                datas.effect_entries.map((descrition) => {
                    if (descrition.language.name === "en") {
                        listEffect.push(descrition.effect)
                    }
                })
            })
            setEffect(listEffect)
        }
        fetchEffect()
    }, [abilities])

    const { theme } = useContext(ThemeContext)

    return (
        <section className="pokemonDetails" style={{ color: theme.color2, backgroundColor: theme.backgroundColor2 }}>
            {
                <ul>
                    <h1>{pokemon.name}</h1>
                    <li className="info">
                        <Ul image>
                            <li className="illustration">
                                <img src={`${starLinkImageApi}/${pokemon.id}.png`} />
                                <img src={`${starLinkImageBackApi}/${pokemon.id}.png`} />
                            </li>
                            <li className="illustration">
                                <img src={`${starLinkImageShinyApi}/${pokemon.id}.png`} />
                                <img src={`${starLinkImageShinyBackApi}/${pokemon.id}.png`} />
                            </li>
                        </Ul>
                        <Ul>
                            <Ul type>
                                {
                                    type.map((types, index) => {
                                        return (
                                            <li className="type" key={index}>
                                                <P type>{types.type.name}</P>

                                            </li>
                                        )
                                    })
                                }
                            </Ul>
                            <Ul ability
                                style={{ backgroundColor: theme.backgroundColor1 }}>
                                {
                                    abilities.map((ability, index) => {
                                        return (
                                            <li key={index}>
                                                <h3 style={{ color: theme.color1 }}>{ability.name}</h3>
                                                <P effect
                                                    style={{ backgroundColor: theme.backgroundColor2 }}>{effect[index]}</P>
                                            </li>
                                        )
                                    })
                                }
                            </Ul>
                        </Ul>
                    </li>
                </ul>
            }
            <h2>Moves</h2>
            <Ul mov
                style={{ color: theme.color2, backgroundColor: theme.backgroundColor1 }}>
                {
                    move.map((moves, index) => {
                        return (
                            <li key={index}>
                                <P style={{ backgroundColor: theme.backgroundColor2 }}>{moves.move.name}</P>
                            </li>
                        )
                    })
                }
            </Ul>
        </section>
    );
}

const Ul = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    ${props => props.image && css`
        text-align: center;
        justify-content: center;
    `}
    ${props => props.type && css`
        margin-bottom: 10px;        
    `}
    ${props => props.ability && css`
        padding: 10px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    `}
    ${props => props.mov && css`
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    `}
    
`

const P = styled.p`
    border-radius: 50px 0;
    margin: 5px;
    padding: 5px 15px;
    ${props => props.effect && css`
        border: 1px solid;
        border-radius: 10px;
    `}
    ${props => props.type && css`
        border-radius: 50px;
        margin: 5px;
        padding: 5px 10px;
        width: 100px;
        text-align: center;
        text-transform: uppercase;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    `}
`

export { PokemonDetails }