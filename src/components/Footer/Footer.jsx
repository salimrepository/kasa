import React from "react";
import"./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src="../Logo-footer.png" alt="" />
            </div>
            <div className="copyright">
                © 2020 Kaza. All rights reserved
            </div>
        </div>
    );
}

export default Footer;