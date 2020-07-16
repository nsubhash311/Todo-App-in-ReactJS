import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props)
{
    const items = props.items;
    
    const listItems = items.map(item =>
   {
    if(props.visibility==="hidden")
    {
        var x = "asd"
    }
       return <div className="list" key={item.key}>
         <p>
         <input type="text" defaultValue={item.text}/>
        
        <span className={x}> 
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.addItemToFav(item.key,item.text)
        }} icon="heart" />
        
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;