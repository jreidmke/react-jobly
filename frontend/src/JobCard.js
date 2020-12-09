const JobCard = ({title, salary, equity, company_handle, handleApply, isActive}) => {
    return(
        <div className='card'>
            <h1>{title}</h1>
            <h3>Salary: {salary}</h3>
            <h3>Equity: {equity}</h3>
            <h4>{company_handle} </h4>
            <button onClick={handleApply} disabled={isActive}>{isActive ? "Applied" : "Apply"}</button>
        </div>
    )
}

export default JobCard