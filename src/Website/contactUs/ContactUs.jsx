import "./ContactUS.css"

function ContactUS(){
    return(
    <div id="Contacts">
        <div className="ContactUs">
             <h1>SEND US A MESSAGE</h1>
             <div className="inputBoxes">
    
                <input type="text" placeholder="FirstName" />
             

             
                <input type="text" placeholder="LasttName" />
             

             
                <input type="text" placeholder="EmailsName" />
             

             
                <input type="text" placeholder="PhoneName" />
                  
                  <textarea name="" id="textarea" cols="30" rows="5" placeholder="Message"></textarea>
                  <button className="Sendbutton">SEND MESSAGE</button>
             </div>

            
        </div>


        <div className="contactDetails">
        <h1>Office Address</h1>
        <p>L B Nagar, Hyderabad</p>
        <p>Telangana State</p>

        <h1>Call Us</h1>
        <p>Tel: +91</p>
        <p>9491921707</p>

        <h1>Send an E-mail</h1>
        <p className="emailsId">nyKerthy@gmail.com</p>

        <i class="bi bi-facebook" id="facebook"></i>
        <i class="bi bi-linkedin" id="linkdin"></i>
        </div>
        </div>

    )
}

export default ContactUS;