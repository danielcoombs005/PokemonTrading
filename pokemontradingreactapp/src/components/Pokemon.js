import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

function Pokemon() {
    return (
        <div className = "pokemon">
            <div className = "pokemon-boxes">
                <PokemonLogic />
                <PokemonLogic />
                <PokemonLogic />

                <PokemonLogic />
                <PokemonLogic />
                <PokemonLogic />

                <PokemonLogic />
                <PokemonLogic />
                <PokemonLogic />
            </div>
        </div>
    )
}

export default Pokemon;