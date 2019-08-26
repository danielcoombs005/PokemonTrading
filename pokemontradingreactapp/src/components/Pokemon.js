import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            currency: 500,
            pokeArray: [],
            inventory: []
        }
        this.addToInventory = this.addToInventory.bind(this);
        this.calculateCurrency = this.calculateCurrency.bind(this);
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
        if (newValue.value <= this.state.currency) {
            alert(`Congratulations on your purchase of ${newValue.name}!`)
            this.calculateCurrency(-newValue.value)
            if (allowToAdd) {
                tempArray.push(newValue);
            } else {
                tempArray[indexValue].qty += 1;
            }
        } else {
            alert(`You do not have enough coins to purchase ${newValue.name}.`)
        }

        await this.setState({
            inventory: tempArray
        })
    }

    calculateCurrency(value) {
        this.setState({
            currency: this.state.currency + value
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
            this.calculateCurrency(Math.floor(currentValue.value / 2));
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
            <span key={index}>{poke.name} ({poke.qty}) </span>
        )
        return (
            <div className="pokemon">
                <div className="currency">
                    Currency: {this.state.currency}
                    <br/>
                </div>
                <div className="inventory">
                    Inventory: {pokeListNames}
                </div>
                <div className="pokemon-boxes">
                    {listItems} 
                </div>
            </div>
        )
    }
}

export default Pokemon;