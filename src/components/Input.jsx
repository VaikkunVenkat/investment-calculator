const Input = ({ id, label }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
            />
        </>
    )
}

export default Input;