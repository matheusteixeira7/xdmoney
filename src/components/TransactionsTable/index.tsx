import { Container } from "./styles"

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>

        <tr>
          <td>Monitor</td>
          <td className="withdraw">$ 1000,00</td>
          <td>Desk setup</td>
          <td>3/15/2021</td>
        </tr>

        <tr>
          <td>Salary</td>
          <td className="deposit">$ 3000,00</td>
          <td>Job</td>
          <td>3/20/2021</td>
        </tr>
      </table>
    </Container>
  )
}
