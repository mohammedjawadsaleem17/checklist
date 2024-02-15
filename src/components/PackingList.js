import { useState } from "react";
import  Item  from './Item';

// onChange={props.onToggleItems(props.item.packed)} 
export default function PackingList({ items, onDeleteItem, onToggleItems, clearList }) {
  const [sortBy, setSortBy] = useState("input");


  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }


  function handleClear() {
    if (items.length === 0) {
      alert("No Elements are in the list");
      return;
    }

    const confirmed = window.confirm("Are you sure to clear all items");
    if (confirmed) {
      clearList([]);
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} />)}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>

        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
