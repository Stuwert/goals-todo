import React from 'react';

export default (props) => {
  const { items, remove, toggle } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} >
          <span className={item.complete ? 'struckThrough' : ''} onClick={() => toggle && toggle(item)} >{item.name}</span>
          <button onClick={() => remove(item)}>X</button>
        </li>
      ))}
    </ul>
  )
}
