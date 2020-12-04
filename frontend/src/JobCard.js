import "./JobCard.css";

const JobCard = ({title, salary, equity, company_handle}) => {
    return(
        <div className='card
        '>
            <h1>{title}</h1>
            <h3>Salary: {salary}</h3>
            <h3>Equity: {equity}</h3>
            <h4>{company_handle} </h4>
        </div>
    )
}

export default JobCard