import React from 'react';

function Cost(props) {
  return (
    <li>
      {props.Cost}
      <button onClick={() => props.onDeleteCost(props.id)}>Delete</button>
    </li>
  );
}

export default Cost;