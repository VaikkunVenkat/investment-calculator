import { formatter } from "../util/investment";

const InvestmentReturnsTable = ({ results }) => (
  <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {results.map((record) => (
        <tr key={record.year}>
          <td>{record.year}</td>
          <td>{formatter.format(record.valueEndOfYear)}</td>
          <td>{formatter.format(record.interest)}</td>
          <td>{formatter.format(record.interestTotal)}</td>
          <td>{formatter.format(record.capitalInvested)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InvestmentReturnsTable;
