import "./Services.css"

function Services(){
    return(
        <div  id="Services">
            <p>
            <span className="no-underline">S</span>
           <span className="underline">ervice</span>
           <span  className="no-underline">s</span>
           </p>
           <h4>We are deeply committed to growth and success of our clients.</h4>
           <div className="service-container">
               <div className="card">
                    <img src="https://imgv3.fotor.com/images/side/vector-characters-working-on-how-to-edit-image.png" alt="" width={"100%"} height={"300px"}/>
                     <h3>Web Development</h3>
                     <span>We specialize in creating and optimizing hight-quality custom website for bussiness and organization of all sizes. building mobile-friendly and easy-to-use website nad application for clients</span>
               </div>

               <div className="card">
                     <img src="https://images.appypie.com/wp-content/uploads/2020/02/25062935/App-development1.png" alt="" width={"100%"} height={"290px"}/>
                     <h3>Mobile App Development</h3>
                     <span>We develop high-quality, custom cross-platform mobile application that are robust and optimized for performance Scalability, and accessbility.</span>
                </div>
                
                <div className="card">
                <img src="https://uphost.pk/wp-content/uploads/2023/03/web-hosting-image-2.png.webp" alt="" width={"100%"} height={"290px"}/>
                     <h3>Domain and Hoisting Services</h3>
                     <span>We provide  domain registration and web hosting services to individuals and orgnization to enable them gain visibility in the digital space.</span>
                </div>
                
                <div className="card">
                <img src="https://prominentpixel.com/assets/images/svg/big-data-element.svg" alt="" width={"100%"} height={"290px"}/>
                     <h3>General IT Consultaing</h3>
                     <span>Our consulting services provides expert guidance and support for bussinesses and individuals looking to optimize their technology solution.</span>
                </div>
           </div>
        </div>
    )
}

export default Services;