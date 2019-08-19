import React from 'react';
import '../App.css';

function PokemonLogic(props) {
    return (
        <div>
            <div className = "pokeinfo">
                <img id="image" src={props.pokemon.sprite} alt={props.pokemon.name}/>
                <h3 id="name">{props.pokemon.name}</h3>
                <h3 id="desc">Type: {props.pokemon.type}</h3>
                <h3 id="pkmnid">ID: {props.pokemon.id}</h3>

                <div className = "pokebuttons">
                    <button>Buy</button>
                    <button>Sell</button>
                </div> 
                
            </div>
        </div>
    )
}

export default PokemonLogic;