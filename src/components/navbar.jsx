import { Link, useNavigate } from "react-router-dom";
import notif from '../assets/notif.svg'
import account from '../assets/account.svg'

function Navbar(){
    const navigate=useNavigate();

    function openHome(){
        navigate("/");
    }

    return(
        <div className="flex max-w-full gap-8 w-screen p-5 size-10 text-xl shadow-lg h-fit font-light rounded-xl">
            <div>
                <Link to="/" className="focus:font-medium">Home</Link>
            </div>
            <div>
                <Link to="/trends" className="focus:font-medium">Trends</Link>
            </div>
            <div>
                <Link to="/report" className="focus:font-medium">Report</Link>
            </div>
            <div>
                <Link to="/about" className="focus:font-medium">About</Link>
            </div>
            <div className="flex ml-112 mr-auto text-2xl">
                <p className="font-normal cursor-pointer" onClick={openHome}>Scam</p><p className="text-blue-500 font-semibold cursor-pointer" onClick={openHome}>Shield</p>
            </div>
            <div>
                <img className="size-8 cursor-pointer" src={notif} alt="notification"></img>
            </div>
            <div>
                <img className="size-8 cursor-pointer" src={account} alt="account"></img>
            </div>

            
        </div>
    )
}

export default Navbar;