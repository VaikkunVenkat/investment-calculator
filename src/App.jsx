import { useState } from "react";
import CalculatorInputs from "./components/CalculatorInputs";
import Header from "./components/Header";
import InvestmentReturnsTable from "./components/InvestmentReturnsTable";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 8,
  });

  const handleCalculationInputChange = (id, value) => {
    setCalculatorInputs((prevCalculationFields) => ({
      ...prevCalculationFields,
      [id]: +value,
    }));
  };

  return (
    <>
      <Header />
      <CalculatorInputs
        inputValues={calculatorInputs}
        onCalculatorChange={handleCalculationInputChange}
      />
      {calculatorInputs.duration > 0 ? (
        <InvestmentReturnsTable
          results={calculateInvestmentResults(calculatorInputs)}
        />
      ) : (
        <p className="center">Duration should be positive</p>
      )}
    </>
  );
}

export default App;
