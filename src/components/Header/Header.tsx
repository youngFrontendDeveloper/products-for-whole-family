import './Header.css';
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
        <header className="header">
            <Container mixinClass="header__container">               
                <Logo mixinClass="header__logo"/>
                <Navigation />
            </Container>
        </header>
    );
};