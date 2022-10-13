import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <div>
            <div className="text-center mt-5 md:mt-10">
                <h1 className="text-2xl md:text-3xl">A Community for Everything You Can Imagine - The Everything Server.</h1>
            </div>

        </div>
    )
}

Home.layout = MainLayout;