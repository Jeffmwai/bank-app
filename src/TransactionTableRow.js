import React from 'react';

function TransactionTableRow({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>${transaction.amount.toFixed(2)}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionTableRow;
