import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    
    //insert fetch
    
    

    render() {
        return (
            <div className = "pokemon">
                <div className = "pokemon-boxes">  
                    <PokemonLogic pokemon={{sprite: "", name:"name1", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name2", description:"description...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name3", description:"description...", pkmnid:"pokemon id"}}/>
    
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
    
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{name:"name", description:"description...", pkmnid:"pokemon id"}}/>
                </div>
            </div>
        )
    }
}

export default Pokemon;