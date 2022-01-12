import Navbar from "../navbar/Navbar";
import Welcome from "./sections/welcome/Welcome";

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Welcome />
        </div>
    )
}