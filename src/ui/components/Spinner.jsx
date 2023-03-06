const spinnerContStyle = {
    height: '100vh',
    alignItems: 'center',
    color:'#24da48'
}

export const Spinner = () => {
    return (  
    <div style={spinnerContStyle} className="align-middle d-flex justify-content-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem",}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    );
}