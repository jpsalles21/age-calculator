import { useState } from 'react';
import Input from "../Input/Input";
import './styles.css';
import AgeCalculatorResult from '../AgeCalculatorResult/AgeCalculatorResult';

const AgeCalculator = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' }); 
   
    const handleClick = () => {
        setBirthDate({
            year: year,
            month: month,
            day: day,
        });
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
                />
                <Input
                    label="MONTH"
                    maxLength="2"
                    place="MM"
                    value={month}
                    onChange={setMonth}
                />
                <Input
                    label="DAY"
                    maxLength="2"
                    place="DD"
                    value={day}
                    onChange={setDay} 
                />
                <button onClick={handleClick}>Calculate Age</button>
            </div>            
            {birthDate.year && (
                <AgeCalculatorResult
                    year={birthDate.year}
                    month={birthDate.month}
                    day={birthDate.day}
                />
            )}
        </div>
    );
};

export default AgeCalculator;
