import "./Careers.css"

function Careers(){
    return(
        <div id="Careers">
            <h1>Careers</h1>
            <div className="devWraper">
            <div className="webDev">
                 <img src="https://imgv3.fotor.com/images/side/vector-characters-working-on-how-to-edit-image.png" alt=""  width={"100%"} height={"250px"}/>
                 <h2>Web Development Inter</h2>
                 <p>We are looking for enthusiastic and talented individuals to join out team as a web Development Intern. if you're passionate about coding,eager
                    to learn,and ready to contribute to exciting projects,we want to hear from you!
                 </p>
                 <button>Apply <i class="bi bi-arrow-right" style={{fontSize:"2rem" , fontWeight:"bolder"}}></i></button>
            </div>

            <div className="mobileDev">
                  <img src="https://images.appypie.com/wp-content/uploads/2020/02/25062935/App-development1.png" alt=""  width={"100%"} height={"250px"}/>
                  <h2>Mobile App Development Intern</h2>
                  <p>We are exited to offer oppurtunity for aspiring mobile app developers to join our team as interns. if your passionate about 
                    Mobile technology and eager to learn in dynamic environment, we want to hear from you!
                  </p>
                  <button>Apply <i class="bi bi-arrow-right" style={{fontSize:"2rem" , fontWeight:"bolder"}}></i></button>
            </div>
            </div>
        
        </div>
    )
}

export default Careers;