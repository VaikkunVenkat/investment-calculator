// {
//     year: i + 1, // year identifier
//     interest: interestEarnedInYear, // the amount of interest earned in this year
//     valueEndOfYear: investmentValue, // investment value at end of year
//     annualInvestment: annualInvestment, // investment added in this year
//   }

const DUMMY_RESULTS = [
    {
        id: '1',
        year: 1,
        valueEndOfYear: 1000,
        interest: 10,
        totalInterest: 20,
        investedCapital: 2000
    }
]

const InvestmentReturnsTable = () => {
    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {DUMMY_RESULTS.map(record => (
                    <tr key={record.id}>
                        <td>{record.year}</td>
                        <td>{record.valueEndOfYear}</td>
                        <td>{record.interest}</td>
                        <td>{record.totalInterest}</td>
                        <td>{record.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default InvestmentReturnsTable;