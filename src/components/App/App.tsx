import './App.css'
import {Route, Routes} from 'react-router-dom';

// import LayoutComponent from "../LayoutComponent/LayoutComponent.tsx";
import ProductsPage from "../ProductsPage/ProductsPage.tsx";
import ProductsItemPage from "../ProductsItemPage/ProductsItemPage.tsx";
import HomePage from "../HomePage/HomePage.tsx";
import Layout from '../Layout/Layout.tsx';

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />

            <Route
                path="/products"
                element={
                    <Layout>
                        <ProductsPage />
                    </Layout>
                }
            />

            <Route
                path="/product/:id"
                element={
                    <Layout>
                        <ProductsItemPage />
                    </Layout>
                }
            />
        </Routes>
    )
}

