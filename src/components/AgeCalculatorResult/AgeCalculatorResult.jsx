import './styles.css';

const AgeCalculatorResult = ({ year, month, day }) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
   
    const calculateAge = () => {
        if (!year || !month || !day) return "--";

        let yearDiff = currentYear - year;

        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            yearDiff -= 1;
        }
        return yearDiff;
    };

    const calculateMonths = () => {
        if (!year || !month || !day) return "--";

        let monthDiff = currentMonth - month;

        if (currentDay < day) {
            monthDiff -= 1;
        }
        if (monthDiff < 0) {
            monthDiff += 12;
        }
        return monthDiff;
    };

    const calculateDays = () => {
        if (!year || !month || !day) return "--";
        
        const lastBirthMonthDay = new Date(currentYear, month, 0).getDate();
        let dayDiff = currentDay - day;

        if (dayDiff < 0) {
            dayDiff += lastBirthMonthDay;
        }
        return dayDiff;
    };

    return (
        <div className="age-calculator-result">
        <p>
            <span className="result-value">{calculateAge()}</span> years
        </p>
        <p>
            <span className="result-value">{calculateMonths()}</span> months
        </p>
        <p>
            <span className="result-value">{calculateDays()}</span> days
        </p>
    </div>
    
    );
};

export default AgeCalculatorResult;
