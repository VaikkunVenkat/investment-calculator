import Input from "./Input";

const CalculatorInputs = () => {
    return (
        <form id="user-input" className="input-group">
            <div>
                <Input id="initial-investment" label="Initial Investment" />
                <Input id="annual-investment" label="Annual Investment" />
            </div>
            <div>
                <Input id="expected-return" label="Expected Return" />
                <Input id="duration" label="Duration" />
            </div>
        </form>
    )
};

export default CalculatorInputs;