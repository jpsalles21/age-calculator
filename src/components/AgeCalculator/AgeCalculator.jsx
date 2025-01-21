import Input from "../Input/Input"
import './styles.css';


const AgeCalculator = () => {
    return (
        <div className="age-calculator__container">
            <div className="age-calculator__inputs-container">
                <Input label='YEAR' maxLength='4' place='YY' />
                <Input label='MONTH' maxLength='2' place='MM' />
                <Input label='DAY' maxLength='2' place='DD' />
            </div>
        </div>
    )
}

export default AgeCalculator;