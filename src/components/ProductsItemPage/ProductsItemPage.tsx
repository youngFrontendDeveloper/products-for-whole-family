import './ProductsItemPage.css';
import {Link, useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../redux/api/products/productsApi.ts";
import {Typography} from 'antd';
import {Image} from "antd";
import Star from "../Star/Star.tsx";
import Loader from "../Loader/Loader.tsx";
import Error from "../Error/Error.tsx";


export default function ProductsItemPage() {
    const params = useParams();
    const id = params.id || "";
    const {data, isError, isLoading} = useGetProductByIdQuery(id);
    const wordReviews =
        data?.rating?.count.toString().endsWith("1") && !String(data?.rating?.count).endsWith("11")
            ? " отзыв"
            : (data?.rating?.count.toString().endsWith("2") && !String(data?.rating?.count).endsWith("12")) ||
            (data?.rating?.count.toString().endsWith("3") && !String(data?.rating?.count).endsWith("13")) ||
            (data?.rating?.count.toString().endsWith("4") && !String(data?.rating?.count).endsWith("14"))
                ? " отзыва"
                : " отзывов";

    console.log(data)
    return (
        <section className="product">
            {isLoading && <Loader />}
            {isError && <Error><p>Ошибка загрузки товара</p></Error>}
            <Link to="/products" className="product__link">Вернуться к товарам</Link>

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
                        {data?.rating?.rate}  {data?.rating?.count} {wordReviews}
                    </Typography.Paragraph>
                </div>

                <Typography.Paragraph className="product__price">
                    ${data?.price}
                </Typography.Paragraph>

                <Typography.Paragraph className="product__description">
                    {data?.description}
                </Typography.Paragraph>



            </div>

        </section>
    );
}
