import './styles.css'

const BirthdayCountdown = ({ month, day }) => {

    if (!month || !day) {
        return <div></div>;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    let birthday = new Date(currentYear, month - 1, day);

    let monthsDiff = birthday.getMonth() - today.getMonth();
    let daysDiff = birthday.getDate() - today.getDate();

    if (daysDiff < 0) {
        const lastMonth = new Date(birthday.getFullYear(), birthday.getMonth(), 0);
        daysDiff += lastMonth.getDate();
        monthsDiff--;
        if (monthsDiff < 0) {
            monthsDiff += 12;
        }
    }

    if (daysDiff == 0 && monthsDiff == 0) {
        return <div className="countdown">
            <p>It's your birthday! &#x1F389;&#x1F382;&#x1F973; </p>
        </div>
    }

    return (
        <div>
            <div className="countdown">
                <p>
                    <span className="result-value">{monthsDiff}</span> months and
                    <span className="result-value"> {daysDiff}</span> days until your next birthday.
                </p>
            </div>
        </div>
    );
};

export default BirthdayCountdown;
