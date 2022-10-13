import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}