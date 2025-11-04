import './Footer.css';
import Container from "../Container/Container";

export default function Footer() {
    return (
        <footer className="footer">
           <Container mixinClass="footer__container">
               <p className="footer__text">
                   &copy; Все права защищены 2025
               </p>
           </Container>
        </footer>
    );
};