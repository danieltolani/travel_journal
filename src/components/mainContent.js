export default function MainContent(props){
    console.log(props)
    return(
       
        <section className="App-content">
            <img className="App-image" src={props.imageUrl} />

            <div className="content-wrapper"> 
                <div className="content-container">
                    <div className="country-container">
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.32 5.25a1.67 1.67 0 1 1-.002-3.34 1.67 1.67 0 0 1 .001 3.34M4.225 0C2.283 0 .74 1.637.74 3.656c0 2.752 2.95 5.596 2.95 5.596.397.376.644.406 1.066 0 0 0 2.984-2.844 2.984-5.596C7.74 1.636 6.166 0 4.225 0" fill="#F55A5A"/></svg>
                        <h4 className="country-name">{props.location}</h4>
                    </div>
                    <h1>{props.title}</h1>
                    <h4>{props.startDate} - {props.endDate}</h4>
                    <p className="description"> {props.description} </p>   
                </div>
            </div>
        </section>
    )
}