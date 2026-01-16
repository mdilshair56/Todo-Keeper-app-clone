import React from "react";
function fullMonth() {

const date = new Date();
const month = date.getMonth();
const day = date.getDay();

document.write("getMonthName"(month) + "<br>")
document.write("getDayName"(day) + "<br>")

function getMonthName(monthnumber) {
  var monthname = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ]
  return monthname(monthnumber)
}
return (
    <div>
      <day />
      <month />
    </div>
)

}
 export default fullMonth;