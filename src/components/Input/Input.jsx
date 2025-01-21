import './styles.css';

const Input = ({ label, placeholder, maxLength, value, onChange }) => {

    const handleKeyPress = (e) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            return; 
        }
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="input__container">
            <label>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;
