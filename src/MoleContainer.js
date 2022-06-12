import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);

  const bopped = (e) => {
    props.setScore(props.score + 1);
    setDisplayMole(false);
  };

  let theMole = displayMole ? (
    <Mole setScore={props.setScore} toggle={setDisplayMole} bopped={bopped} />
  ) : (
    <EmptySlot toggle={setDisplayMole} />
  );
  return (
    <div style={{'display': "inline-block", 'width': '30vw'}}>
      {theMole}
    </div>
  );
}

export default MoleContainer;
