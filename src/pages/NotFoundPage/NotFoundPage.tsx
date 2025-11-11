import "./NotFoundPage.css";
import { Result} from "antd";
import LinkComponent from "../../components/LinkComponent/LinkComponent.tsx";

export default function NotFoundPage() {
    return (

        <Result
            className="not-found__result"
            status="404"
            title={<span>Опачки!<br/>Эта страница не найдена!</span>}
            subTitle="Пока мы ее ищем, -"
            extra={  <LinkComponent href="/" variants={['center']} >перейдите на главную страницу</LinkComponent>}
        />

    );
}
