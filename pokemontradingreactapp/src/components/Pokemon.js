import React from 'react';
import '../App.css';
import PokemonLogic from './PokemonLogic';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            poke1: {},
            poke2: {},
            poke3: {},
            poke4: {},
            poke5: {},
            poke6: {},
            poke7: {},
            poke8: {},
            poke9: {}
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = ()  => {
        // fetch("https://localhost:5001/api/values")
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             pokemon: data
        //         })
        //     })
        Promise.all([
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values"),
            fetch("https://localhost:5001/api/values")
        ])
            .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) =>
                Promise.all([res1.json(), res2.json(), res3.json(),
                             res4.json(), res5.json(), res6.json(),
                             res7.json(), res8.json(), res9.json()]))
            .then(([data1, data2, data3, data4, data5, data6, data7, data8, data9]) =>
                this.setState({
                    poke1: data1,
                    poke2: data2,
                    poke3: data3,
                    poke4: data4,
                    poke5: data5,
                    poke6: data6,
                    poke7: data7,
                    poke8: data8,
                    poke9: data9
                }));
    }

    render() {
        return (
            <div className = "pokemon">
                <div className = "pokemon-boxes">
                    <PokemonLogic pokemon={this.state.poke1}/>
                    <PokemonLogic pokemon={this.state.poke2}/>
                    <PokemonLogic pokemon={this.state.poke3}/>
    
                    <PokemonLogic pokemon={this.state.poke4}/>
                    <PokemonLogic pokemon={this.state.poke5}/>
                    <PokemonLogic pokemon={this.state.poke6}/>
    
                    <PokemonLogic pokemon={this.state.poke7}/>
                    <PokemonLogic pokemon={this.state.poke8}/>
                    <PokemonLogic pokemon={this.state.poke9}/>
                </div>
            </div>
        )
    }
}

export default Pokemon;