export default function Stats({ items }) {
  const numItems1 = items.length;
  return <footer className="stats">
    <em> You have {numItems1} items on your list  </em>
  </footer>;
}
