import "./CompanyCard.css";

const CompanyCard = ({handle, description, logoUrl, name, numEmployees}) => {
    return(
        <div className='card
        '>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>Number of Employees: {numEmployees}</h3>
            <h4>{handle} and {logoUrl} who cares tho</h4>
        </div>
    )
}

export default CompanyCard