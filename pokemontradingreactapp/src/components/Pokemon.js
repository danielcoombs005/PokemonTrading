import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokeArray: []
        }
    }

    async componentDidMount() {
        const tempArray = []
        for (let i = 0; i < 9; i++) {
            tempArray.push(
                fetch("https://localhost:5001/api/values")
                    .then(response => response.json())
            )
        }
        await Promise.all(tempArray)
            .then(data => {
                this.setState({
                    pokeArray: tempArray
                });
            })
            .then(() => this.render())
    }

    render() {
        const data = this.state.pokeArray;
        const listItems = data.map((dat) =>
            <PokemonLogic key={data} pokemon={data}/>
        )
        console.log(this.state.pokeArray)
        return (
            <div className ="pokemon">
                <div className="pokemon-boxes">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default Pokemon;