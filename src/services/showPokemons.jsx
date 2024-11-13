import { startLinkApi } from "../variables/variables"

function showPokemons(showQuatity){
    const showPokemon = []
    
    for(let id = 1; id <= showQuatity; id++){
        showPokemon.push(`${startLinkApi}/pokemon/${id}`)
    }

    return showPokemon
}

export { showPokemons }