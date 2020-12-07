const LoggedOut = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000");
    return(
        <div></div>
    )
}

export default LoggedOut;