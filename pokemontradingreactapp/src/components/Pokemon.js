import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokeArray: [],
            inventory: []
        }
        this.addToInventory = this.addToInventory.bind(this);
        this.removeFromInventory = this.removeFromInventory.bind(this);
    }

    async addToInventory(newValue) {
        let allowToAdd = true;
        let indexValue;
        for (let i = 0; i < this.state.inventory.length; i++) {
            if (newValue.name === this.state.inventory[i].name) {
                allowToAdd = false;
                indexValue = i;
                break;
            }
        }

        let tempArray = this.state.inventory.slice();
        if (allowToAdd) {
            tempArray.push(newValue);
        } else {
            tempArray[indexValue].qty += 1;
        }

        await this.setState({
            inventory: tempArray
        })
    }

    async componentDidMount() {
        const tempArray = []
        for (let i = 0; i < 9; i++) {
            tempArray.push(
                fetch("https://localhost:5001/api/values")
                    .then(response => response.json())
            )
        }
        
        Promise.all(tempArray)
            .then(data => {
                this.setState({
                    pokeArray: data
                })
            })
    }

    async removeFromInventory(currentValue) {
        let allowToRemove = false;
        let indexValue;
        for (let i = 0; i < this.state.inventory.length; i++) {
            if (currentValue.name === this.state.inventory[i].name) {
                allowToRemove = true;
                indexValue = i;
                break;
            }
        }

        let tempArray = this.state.inventory.slice();
        if (allowToRemove) {
            alert(`Don't worry! We'll take good care of ${currentValue.name}!`);
            if (tempArray[indexValue].qty === 1) {
                tempArray = this.state.inventory.filter(pokemon => pokemon.name !== currentValue.name)
            } else {
                tempArray[indexValue].qty -= 1;
            }
        } else {
            alert('You must have this Pokemon if you would like to sell it!');
        }

        await this.setState({
            inventory: tempArray
        });
    }

    render() {
        const data = this.state.pokeArray;
        let listItems = data.map((dat, index) =>
            <PokemonLogic addMethod={this.addToInventory} removeMethod={this.removeFromInventory} pokemon={dat} key={index} inventory={this.state.inventory}/>
        )
        const pokemonNames = this.state.inventory;
        let pokeListNames = pokemonNames.map((poke, index) => 
            <p key={index}>{poke.name} ({poke.qty})</p>
        )
        return (
            <div className ="pokemon">
                    Inventory: {pokeListNames}
                <div className="pokemon-boxes">
                    {listItems} 
                </div>
            </div>
        )
    }
}

export default Pokemon;