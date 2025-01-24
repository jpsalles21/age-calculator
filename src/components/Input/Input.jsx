import './styles.css';


const Input = ({ label, placeholder, maxLength, value, onChange, error }) => {

    const handleKeyPress = (e) => {
        if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab') {
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
        <div className={`input__container ${error ? 'input__error' : ''}`}>
            <label className={`input__label ${error ? 'input__label__error' : ''}`}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
}

export default Input;
