import { useEffect, useState } from 'react';
import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  transactionType: string;
  createdAt: number;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((response) => {
            return (
              <tr key={response.id}>
                <td>{response.title}</td>
                <td className={response.transactionType}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(response.amount)}
                </td>
                <td>{response.category}</td>
                <td>
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(response.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
