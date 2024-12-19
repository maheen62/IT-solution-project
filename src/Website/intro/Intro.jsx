import "./Intro.css"

function Intro(){
    return(
        <div id="Introduction">
          <div className="intro-first-div">
            <h1 className="intro-first">We build digital solutions to help large bussinesses scale.</h1>
            <p className="intro-first">we are a passionate team of talent developers committed to providing top-quality software solution .</p>
            <button className="intro-btn intro-first" >Learn more</button>
          </div>

          <div className="image-div">
            <img src="https://img.freepik.com/premium-vector/big-data-conference-abstract-concept-vector-illustration_107173-34099.jpg?w=900" alt="" width={"100%"} height={"600px"}/>
          </div>
        </div>
    )
}

export default Intro;