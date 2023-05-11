
const { directive } = require("@babel/types");

function Navbar(){
    return(
        <div className="w-screen h-20 mx-0 my-3 inline-flex">
            <div className="w-auto h-auto inset-y-0 left-0">
                <img alt="logo" src={require('./images/logo.png')} className="w-40 h-22"/>
            </div>
            <ul className="flex my-7 absolute right-0 mx-4 font-display">
                <li className="mx-3">About</li>
                <li className="mx-3">Leads</li>
                <li className="mx-3">Comps</li>
                <li className="mx-3">Sign in</li>
                <li className="mx-3">Sign up</li>
            </ul>
        </div>
    );
}

export default Navbar;
