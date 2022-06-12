import { useEffect } from "react";
import moleImg from "./images/mole.png"

function Mole(props) {

  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 10000)
    let timer = setTimeout(() => {
      props.toggle(false)
    }, randSeconds)
    return () => clearTimeout(timer)
  })

    return (
      <div>
        <img style={{'width': '30vw'}} src={moleImg} onClick={props.bopped} />
      </div>
    )
  }
  export default Mole;