import { useState } from 'react';
import Input from "../Input/Input";
import './styles.css';
import IconArrow from '../../assets/icon-arrow.svg'
import AgeCalculatorResult from '../AgeCalculatorResult/AgeCalculatorResult';

const AgeCalculator = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
    const [errors, setErrors] = useState({ year: '', month: '', day: '' });

    const validateInputs = () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const daysInMonth = new Date(year || currentYear, month || 1, 0).getDate();
        const currentMonth = date.getMonth() + 1;
        const currentDay = date.getDate();

        let isValid = true;
        const inputError = { year: '', month: '', day: '' };

        if (year > currentYear) {
            inputError.year = "Must be in the past";
            isValid = false;
        }
        if (month < 1 || month > 12) {
            inputError.month = "Must be a valid month";
            isValid = false;
        }
        if (day < 1 || day > daysInMonth) {
            inputError.day = "Must be a valid day";
            isValid = false;
        }
        if (currentYear == year && currentMonth < month) {
            inputError.month = "Must be in the past";
            inputError.day = "Must be in the past";
            isValid = false;
        }
        if (currentYear == year && currentMonth == month && currentDay < day) {
            inputError.day = "Must be in the past";
            isValid = false;
        }
        if (!year || year < 0) {
            inputError.year = "This field is required";
        }
        if (!month) {
            inputError.month = "This field is required";
        }
        if (!day) {
            inputError.day = "This field is required";
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
                    label="DAY"
                    maxLength="2"
                    placeholder="DD"
                    value={day}
                    onChange={setDay}
                    error={errors.day}
                />
                <Input
                    label="MONTH"
                    maxLength="2"
                    placeholder="MM"
                    value={month}
                    onChange={setMonth}
                    error={errors.month}
                />
                 <Input
                    label="YEAR"
                    maxLength="4"
                    placeholder="YYYY"
                    value={year}
                    onChange={setYear}
                    error={errors.year}
                />
            </div>
            <div className="age-calculator__button">
                <button onClick={handleClick}>
                    <img src={IconArrow} alt="" />
                </button>
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
