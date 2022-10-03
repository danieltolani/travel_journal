export default function MainContent(props){
    console.log(props)
    return(
       
        <section className="App-content">
            <img className="App-image" src={props.imageUrl} />

            <div className="content-wrapper"> 
                <div className="content-container">
                    <div className="country-container">
                    <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.777 14.294a4.275 4.275 0 0 1-4.276-4.276 4.276 4.276 0 1 1 8.553 0 4.276 4.276 0 0 1-4.277 4.276M9.534.854c-4.97 0-8.919 4.19-8.919 9.359 0 7.046 7.555 14.327 7.555 14.327 1.016.962 1.647 1.04 2.728 0 0 0 7.638-7.281 7.638-14.327 0-5.169-4.031-9.36-9.002-9.36" fill="#F55A5A"/></svg>
                    <h4 className="country-name">{props.location} <span className = "location-span"> <a target="_blank" class="location-link" href={props.googleMapsUrl}> View on Google Maps </a> </span></h4>
                    </div>
                    <h1 className="location-title">{props.title}</h1>
                    <h4 className="duration">{props.startDate} - {props.endDate}</h4>
                    <p className="description"> {props.description} </p>   
                </div>
            </div>
        </section>
    )
}