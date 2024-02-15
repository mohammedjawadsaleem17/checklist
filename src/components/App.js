// import './App.css';
// import './index.css';
import {useState} from "react";
 import X from "./Logo"
import Form from "./Form"
import PackingList from './PackingList';
import  Stats  from './Stats';
import "../index.css"

export default function App() {
   const [items,setItems] = useState([])
   console.log(items);
  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }

  function handleToggleItem(id){
    setItems(
    (items)=>items.map((item)=>item.id===id ?{...item,packed: !item.packed}:item)
    )
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id))
    console.log("Delete Clicked!!!")
  }

  return (
    <div className="app"> 
      <X/>
      <Form onAddItems={handleAddItems}/> 

      <PackingList items = {items} onDeleteItem={handleDeleteItem} onToggleItems = {handleToggleItem} clearList={setItems} />
      <Stats items={items}/> 
      


    </div>
  );
}







