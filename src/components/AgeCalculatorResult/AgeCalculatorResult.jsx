const AgeCalculatorResult = ({ year, month, day }) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
   
    const calculateAge = () => {
        let yearDiff = currentYear - year;

        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            yearDiff -= 1;
        }
        return yearDiff;
    };

    const calculateMonths = () => {
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
        const lastBirthMonthDay = new Date(currentYear, month, 0).getDate();
        let dayDiff = currentDay - day;

        if (dayDiff < 0) {
            dayDiff += lastBirthMonthDay;
        }
        return dayDiff;
    };

    return (
        <div>
            <p>Years: {calculateAge()}</p>
            <p>Months: {calculateMonths()}</p>
            <p>Days: {calculateDays()}</p>
        </div>
    );
};

export default AgeCalculatorResult;
