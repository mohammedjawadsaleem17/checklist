
export default function Item(props) {
  return <li>
    <input type="checkbox" value={props.item.packed} onChange={() => props.onToggleItems(props.item.id)} />
    <span style={props.item.packed ? { textDecoration: "line-through" } : {}} key={props.item.id}>{props.item.quantity} {props.item.description} </span>
    <button onClick={() => props.onDeleteItem(props.item.id)}>❌</button>
  </li>;
}
