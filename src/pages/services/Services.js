import "./services.css";

export default function Services({down}) {
    return (
        <div className="services">
            <h1 className="serv-title" ref={down}>SERVICES</h1>
            <div className="serv">
                <div className="web">
                    <img className="lap" src="/images/laptop.png" />
                    <h1>Web Development</h1>
                    <p>We provide custom software services and leverage new approaches to develop web applications that adhere to strict coding styles and user-friendly interfaces We bring front-end, back-end, and design ability together to provide your business and your customers with a flexible and consistent experience. </p>
                </div>
                <div className="design">
                <img className="lap" src="/images/design.png" />
                    <h1>UI/UX Design</h1>
                    <p>User interface and user experience design is a high-demand field,both of these are crucial to an IT product and need to work closely together. UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces. UX design usually comes first in the product development process, followed by UI.
</p>
                </div>
                <div className="mobile">
                <img className="lap" src="/images/mobile.png" />
                    <h1>Mobile Application</h1>
                    <p>Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas. Mobile apps were originally offered for general productivity and information retrieval, including email, calendar, contacts, the stock market and weather information.</p>
                </div>
                <div className="smm">
                <img className="lap" src="/images/smm.png" />
                    <h1>SMM</h1>
                    <p>Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas. Mobile apps were originally offered for general productivity and information retrieval, including email, calendar, contacts, the stock market and weather information.</p>
                </div>
            </div>
        </div>
        
    )
}