import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <section className="transactions">
      <p>Latest Loads are displayed here</p>
      <table>
        <thead className="thead-grey">
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No/UPI</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td className="credit-green">{transaction.credit}</td>
              <td>{transaction.acBalance}</td>
              <td>{transaction.utr}</td>
              <td>{transaction.acNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
