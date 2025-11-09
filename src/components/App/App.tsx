import './App.css'
import {Route, Routes} from 'react-router-dom';

// import LayoutComponent from "../LayoutComponent/LayoutComponent.tsx";
import ProductsPage from "../../features/products/ProductsPage/ProductsPage.tsx";
import ProductsItemPage from "../../pages/ProductsItemPage/ProductsItemPage.tsx";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import Layout from '../Layout/Layout.tsx';
import Meta from "../../utils/Meta/Meta.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";
import CreateProductPage from "../../features/products/CreateProductPage/CreateProductPage.tsx";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Meta
                            title="Home | Продукты для всей семьи"
                            description="Тестовое задание от компании Экосистема Альфа"
                        />
                        <HomePage />
                    </Layout>
                }
            />

            <Route
                path="/products"
                element={
                    <Layout>
                        <Meta
                            title="Продукты | Продукты для всей семьи"
                            description="Продукты разных брендов для всей семьи"
                        />
                        <ProductsPage />
                    </Layout>
                }
            />

            <Route
                path="/product/:id"
                element={
                    <Layout>
                        <Meta
                            title="Отдельный продукт  | Продукты для всей семьи"
                            description="Продукты разных брендов для всей семьи"
                        />
                        <ProductsItemPage />
                    </Layout>
                }
            />

            <Route
                path="/create-product"
                element={
                    <Layout>
                        <Meta
                            title="Создать продукт  | Продукты для всей семьи"
                            description="Создать новый продукт"
                        />
                        <CreateProductPage />
                    </Layout>
                }
            />
            <Route
                path="*"
                element={
                    <Layout>
                        <Meta
                            title="Страница не найдена | Продукты для всей семьи"
                            description="Такая страница не найдена"
                        />
                        <NotFoundPage />
                    </Layout>
                }
            />

        </Routes>
    )
}

