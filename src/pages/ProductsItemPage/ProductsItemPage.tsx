import './ProductsItemPage.css';
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../features/products/productsApi.ts";
import {Typography} from 'antd';
import {Image} from "antd";
import {message} from 'antd';
import Star from "../../components/Star/Star.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import LinkComponent from "../../components/LinkComponent/LinkComponent.tsx";
import {useEffect} from "react";

export default function ProductsItemPage() {
    const params = useParams();
    const id = params.id || "";
    const {data, isError, isLoading} = useGetProductByIdQuery(id);
    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Не удалось загрузить данные товара ',
        });
    };

    useEffect(() => {
        if (isError) {
            error();
        }
    }, [isError]);

    const wordReviews =
        data?.rating?.count.toString().endsWith("1") && !String(data?.rating?.count).endsWith("11")
            ? " отзыв"
            : (data?.rating?.count.toString().endsWith("2") && !String(data?.rating?.count).endsWith("12")) ||
            (data?.rating?.count.toString().endsWith("3") && !String(data?.rating?.count).endsWith("13")) ||
            (data?.rating?.count.toString().endsWith("4") && !String(data?.rating?.count).endsWith("14"))
                ? " отзыва"
                : " отзывов";

    return (
        <section className="product">

            {contextHolder}

            <LinkComponent href="/products" mixinClass="product__link">
                Вернуться к товарам
            </LinkComponent>

            {isLoading && <Loader />}

            <div className="product__info-wrap">
                <Image
                    width={300}
                    src={data?.image}
                    alt={data?.title}
                    className="product__image"
                />

                <div className="product__info">

                    <Typography.Title className="product__title">
                        {data?.title}
                    </Typography.Title>

                    <div className="product__rating">
                        <Star width={20} />
                        <Typography.Paragraph className="product__rating-number">
                            {data?.rating?.rate} {data?.rating?.count} {wordReviews}
                        </Typography.Paragraph>
                    </div>

                    <Typography.Paragraph className="product__price">
                        ${data?.price}
                    </Typography.Paragraph>

                    <Typography.Paragraph className="product__description">
                        {data?.description}
                    </Typography.Paragraph>

                </div>

            </div>

        </section>
    );
}
