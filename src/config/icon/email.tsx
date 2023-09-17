function Email({className} :any) {
    let prop = {
        className
    }
    return ( <>
        <svg {...prop} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 5L12 14L21 5" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </> );
}

export default Email;