import Navigation from "../Navigation";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <div className="container p-4">
                {children}
            </div>
        </>
    )
}
