import logo from "../logoo.jpg";

export default function NavBar() {
    return (

        <div className="flex justify-center mb-9 backdrop-blur-md p-4">
            <img src={logo} alt="logo" className="h-16 w-16 rounded absolute top-1" />
        </div>
    )
}