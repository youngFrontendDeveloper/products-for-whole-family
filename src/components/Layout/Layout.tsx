import './Layout.css';
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import Container from "../Container/Container.tsx";
import type {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="main">
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
};