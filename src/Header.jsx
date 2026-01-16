import moment from "moment";
import { useState } from "react";

function Header() {
    let time  = new Date().toLocaleTimeString()

    const date = moment().format('MMMM Do YYYY');    

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
  
    setInterval(UpdateTime)

    return(
        <div className="header">
        <h1><span className="material-symbols-outlined">lightbulb</span>Notes</h1>
        <h3 className="clock">{ctime}</h3>
        <h3 className="date" >{date}</h3>
        </div>
    )

}
export default Header;
