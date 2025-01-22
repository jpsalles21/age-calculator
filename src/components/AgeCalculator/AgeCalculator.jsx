import { useState } from 'react';
import Input from "../Input/Input";
import './styles.css';
import AgeCalculatorResult from '../AgeCalculatorResult/AgeCalculatorResult';

const AgeCalculator = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
    const [errors, setErrors] = useState({ year: '', month: '', day: '' });

    const validateInputs = () => {
        const currentYear = new Date().getFullYear();
        const daysInMonth = new Date(year || currentYear, month || 1, 0).getDate();

        let isValid = true;
        const inputError = { year: '', month: '', day: '' };

        if (!year || year > currentYear) {
            inputError.year = "Must be in the past or a valid year";
            isValid = false;
        }
        if (!month || month < 1 || month > 12) {
            inputError.month = "Must be a valid month";
            isValid = false;
        }
        if (!day || day < 1 || day > daysInMonth) {
            inputError.day = "Must be a valid day";
            isValid = false;
        }

        setErrors(inputError);
        return isValid;
    };

    const handleClick = () => {
        if (validateInputs()) {
            setBirthDate({ year, month, day });
        } else {
            setBirthDate({ year: '', month: '', day: '' });
        }
    };

    return (
        <div className="age-calculator__container">
            <div className="age-calculator__inputs-container">
                <Input
                    label="YEAR"
                    maxLength="4"
                    place="YYYY"
                    value={year}
                    onChange={setYear}
                    error={errors.year}
                />
                <Input
                    label="MONTH"
                    maxLength="2"
                    place="MM"
                    value={month}
                    onChange={setMonth}
                    error={errors.month}
                />
                <Input
                    label="DAY"
                    maxLength="2"
                    place="DD"
                    value={day}
                    onChange={setDay}
                    error={errors.day}
                />
                <button onClick={handleClick}>Calculate Age</button>
            </div>
            <AgeCalculatorResult
                year={birthDate.year}
                month={birthDate.month}
                day={birthDate.day}
            />
        </div>
    );
};

export default AgeCalculator;
