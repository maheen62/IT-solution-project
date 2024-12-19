import "./IntroPart2.css"

function IntroPart2(){
    return(
        <div id="IntroPart2">
              <div className="introPart2Img">
                   <img src="https://imgv3.fotor.com/images/side/vector-characters-working-on-how-to-edit-image.png" alt="" width={"100%"} height={"500px"}/>
              </div>

              <div className="introPart2Content">
                   <h2 className="introPart2">We create premium custom web and mobile application for bussiness , and small to medium enterprises.</h2>
                   <p  className="introPart2">Our experience team in softeare development is ready to help bring your ideal application to life.</p>
                   {/* <br /> */}
                   <p  className="introPart2">We take responsibility for building custom software solution that cater for automation software of your bussiness processes and improve efficiency.</p>
                   <button  className="introPart2">Contact Us</button>
              </div>
        </div>
    )
}

export default IntroPart2;