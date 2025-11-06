import "./NotFoundPage.css";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="not-found" aria-label="Page Not Found">
            <h1 className="visually-hidden">Эта страница не найдена</h1>
            <p className="not-found__main">404</p>
            <p className="not-found__text">Опачки! Эта страница не найдена!</p>
            <p className="not-found__text">Пока мы ее ищем, -
            </p>
            <Link to="/" className="not-found__link">
                перейдите на главную страницу
            </Link>


        </section>
    );
}
