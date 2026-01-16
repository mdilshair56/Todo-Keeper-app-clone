import React from "react";

function Footer() {
 const year = new Date();
 const fullYear = year.getFullYear();

    return(
        <footer>
         <p>Made with ❤️ By Dilshair Zafar <br/> Copyright ⓒ {fullYear}</p>
        </footer>
    )
}
export default Footer;