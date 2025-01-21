import './styles.css';

const Input = ({ label, place, maxLength }) => {

    const handleKeyPress = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };
    return (
        <div className="input__container">
            <label>{label}</label>
            <input
                type="text"
                placeholder={place}
                maxLength={maxLength}
                onKeyDown={handleKeyPress}
            >
            </input>
        </div>
    )
}

export default Input; 