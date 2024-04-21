import { useState } from "react";
import CalculatorInputs from "./components/CalculatorInputs";
import Header from "./components/Header";
import InvestmentReturnsTable from "./components/InvestmentReturnsTable";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleCalculationInputChange = ({ target: { id, value } }) => {
    setCalculatorInputs((prevCalculationFields) => ({
      ...prevCalculationFields,
      [id]: +value,
    }));
  };

  const results = calculateInvestmentResults(calculatorInputs);

  return (
    <>
      <Header />
      <CalculatorInputs
        inputValues={calculatorInputs}
        onChange={handleCalculationInputChange}
      />
      {calculatorInputs.duration > 0 ? (
        <InvestmentReturnsTable results={results} />
      ) : (
        <p className="center">Duration should be positive</p>
      )}
    </>
  );
}

export default App;
