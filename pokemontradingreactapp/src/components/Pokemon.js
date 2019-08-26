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
    }

    async addToInventory(newValue) {
        let tempArray = this.state.inventory.slice();
        tempArray.push(newValue);
        await this.setState({
            inventory: tempArray
        })
        console.log(this.state.inventory)
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

    render() {
        const data = this.state.pokeArray;
        let listItems = data.map((dat, index) =>
            <PokemonLogic parentMethod={this.addToInventory} pokemon={dat} key={index} inventory={this.state.inventory}/>
        )
        return (
            <div className ="pokemon">
                <div>
                    Inventory: {this.state.inventory.name}
                </div>
                <div className="pokemon-boxes">
                    {listItems} 
                </div>
            </div>
        )
    }
}

export default Pokemon;