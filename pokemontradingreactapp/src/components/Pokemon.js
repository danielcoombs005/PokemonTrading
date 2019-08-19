import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/values")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pokemon: data
                })
            })
    }


    render() {
        return (
            <div className = "pokemon">
                <div className = "pokemon-boxes">  
                    <PokemonLogic pokemon={this.state.pokemon}/>
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