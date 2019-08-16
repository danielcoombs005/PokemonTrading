import React from 'react';
import '../App.css';

class PokemonLogic extends React.Component {
    costructor() {

    }


    render() {
        return (
            <div>
                <div className = "pokeinfo">
                    <h3 id="name">Name</h3>
                    <h3 id="desc">Description</h3>
                    <h3 id="pkmnid">Pokemon ID</h3>
                </div>
            </div>
        )
    }
}

export default PokemonLogic;