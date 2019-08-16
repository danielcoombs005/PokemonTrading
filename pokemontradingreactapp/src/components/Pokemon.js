import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    
    //insert fetch
    


    render() {
        return (
            <div className = "pokemon">
                <div className = "pokemon-boxes">  
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name1", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name2", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name3", type:"type...", pkmnid:"pokemon id"}}/>
    
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name4", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name5", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name6", type:"type...", pkmnid:"pokemon id"}}/>
    
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name7", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name8", type:"type...", pkmnid:"pokemon id"}}/>
                    <PokemonLogic pokemon={{sprite: "http://i.imgur.com/wJw46bi.png", name:"name9", type:"type...", pkmnid:"pokemon id"}}/>
                </div>
            </div>
        )
    }
}

export default Pokemon;