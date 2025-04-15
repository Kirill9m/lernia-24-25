function List({items = [], category = 'Unsorted'}) {
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((b, a) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => (a.calories) - (b.calories));
  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)

  const listItems = items.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

  return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
  )
}

export default List