import Input from "./Input";

const CalculatorInputs = ({ inputValues, onCalculatorChange }) => {
  const handleChange = ({ target: { id, value } }) => {
    onCalculatorChange(id, value)
  }
  return (
    <form id="user-input" className="input-group">
      <div>
        <Input
          id="initialInvestment"
          label="Initial Investment"
          value={inputValues.initialInvestment}
          onChange={handleChange}
        />
        <Input
          id="annualInvestment"
          label="Annual Investment"
          value={inputValues.annualInvestment}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          id="expectedReturn"
          label="Expected Return"
          value={inputValues.expectedReturn}
          onChange={handleChange}
        />
        <Input
          id="duration"
          label="Duration"
          value={inputValues.duration}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CalculatorInputs;
