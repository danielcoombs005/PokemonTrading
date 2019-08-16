import React from 'react';
import '../App.css';

function PokemonLogic(props) {
    return (
        <div>
            <div className = "pokeinfo">
                <h3 id="name">{props.pokemon.name}</h3>
                <h3 id="desc">{props.pokemon.description}</h3>
                <h3 id="pkmnid">{props.pokemon.pkmnid}</h3>

                <div className = "pokebuttons">
                    <button>Buy</button>
                    <button>Sell</button>
                </div> 
                
            </div>
        </div>
    )
}

export default PokemonLogic;