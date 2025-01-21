
const AgeCalculatorResult = ({year, month, day}) => {

    const date = new Date()
    
    return (
        <div>{`${year} ${month} ${day} ${date.getMonth()+1} `}</div>
    )
}

export default AgeCalculatorResult;