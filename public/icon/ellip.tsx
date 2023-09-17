function Ellip ({className} : any) {
    let prop = {
        className,
    }
    return ( <>
        <svg {...prop} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="30" fill="#0E81A5"/>
        </svg>
    </> );
}

export default Ellip ;