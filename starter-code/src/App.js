import React, { Component } from 'react';
import FoodBox from './FoodBox'
import Search from './Search'
import foodsJson from './foods.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: foodsJson,
      name: '',
      calories: 0,
      image: '',
      search: 's'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addFood = this.addFood.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addFood(e) {
    e.preventDefault() // Stop the form submission
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    }
    
    this.setState({
      foods: [newFood, ...this.state.foods], // The newFood is inserted at the front
      name: '', // Clear the input name
      calories: 0, // Clear the input calories
      image: '',  // Clear the input image
    })
  }
  handleSearch(searchValue) {
    this.setState({
      search: searchValue
    })
  }
  render() {
    let lowerSearch = this.state.search.toLowerCase()
    return (
      <div className="App">
        <h1 className="title" >IronNutrition</h1>
        <form onSubmit={this.addFood}>
          <input type="text" className="input" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} name="name" />
          <input type="number" className="input" placeholder="Calories" value={this.state.calories} onChange={this.handleInputChange} name="calories" />
          <input type="text" className="input" placeholder="Image URL" value={this.state.image} onChange={this.handleInputChange} name="image" />
          <button className="button is-primary">Add item</button>
        </form>
        <hr/>
        <Search value={this.state.search} onSearch={this.handleSearch} />
        <hr/>
        {/* Display as many FoodBox as foods items */}
        {this.state.foods
          .filter(food => food.name.toLowerCase().includes(lowerSearch))
          .map((food,i) => <FoodBox key={i} food={food} />)} 
      </div>
    );
  }
}

export default App;
