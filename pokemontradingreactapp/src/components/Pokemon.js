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
            <PokemonLogic pokemon={dat} key={index}/>
        )
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