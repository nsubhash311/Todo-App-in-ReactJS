import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
library.add(faHeart)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      favItems:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.addItemToFav = this.addItemToFav.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  addItem(e){
    // e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  addItemToFav(val,val2){
    var items = this.state.favItems;
    for(var item in items)
    {
      if(item.key === val)
      {
        return;
      }
    }

    const newItem = {
      text:val2,
      key:val
    }
      const x = [...this.state.favItems, newItem];
    this.setState({
      favItems: x
    })

  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
      const filteredItems2= this.state.favItems.filter(item =>
        item.key!==key);
    this.setState({
      items: filteredItems,
      favItems: filteredItems2
    })

  }
   
 render(){
  return (
    <div>
         <h1 className="Recipe" style = {{backgroundColor:'#7952b3', marginTop:'0px', padding:'10px', color:'white'}}>Recipe Maker</h1>
<div className="flex">
        
      <div className="App">
      <h1 className="fav">List</h1>
        <header id="to-do-form" >
            <input type="text" placeholder="Enter task"  onChange={this.handleInput}></input>
            <button variant="dark" onClick={this.addItem}>Add</button>{' '}
        </header>  
        <ListItems items={this.state.items} deleteItem={this.deleteItem} addItemToFav = {this.addItemToFav} visibility="true" />        
      </div>
      <div className="App"> <h1 className="fav">Favourites</h1>
        <ListItems items={this.state.favItems} deleteItem={this.deleteItem} addItemToFav = {this.addItemToFav} visibility="hidden" /> 
      </div>
      
    </div>  
       <Button className= "reset-btn" onClick={() => window.location.reload()} variant="dark">Reset</Button>{' '}
    </div>
      
      
  );
 }
}


export default App;
