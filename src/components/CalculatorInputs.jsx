import Input from "./Input";

const CalculatorInputs = ({ inputValues, onChange }) => {
  return (
    <form id="user-input" className="input-group">
      <div>
        <Input
          id="initialInvestment"
          label="Initial Investment"
          value={inputValues.initialInvestment}
          onChange={onChange}
        />
        <Input
          id="annualInvestment"
          label="Annual Investment"
          value={inputValues.annualInvestment}
          onChange={onChange}
        />
      </div>
      <div>
        <Input
          id="expectedReturn"
          label="Expected Return"
          value={inputValues.expectedReturn}
          onChange={onChange}
        />
        <Input
          id="duration"
          label="Duration"
          value={inputValues.duration}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default CalculatorInputs;
