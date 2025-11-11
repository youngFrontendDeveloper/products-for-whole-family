import './ProductsFilter.css';
import {Select} from "antd";
import type {FilterType} from "../../types.ts";

export default function ProductsFilter({setFilter}: { setFilter: (filter: FilterType) => void }) {

    const onCategoryChange = (value: FilterType) => {
        setFilter(value);
    };

    return (
        <section className="products-filter">

            <p className="products-filter__title">Фильтровать товары по</p>

            <Select
                className="products-filter__select"
                allowClear
                placeholder="Выберите категорию товара"
                onChange={onCategoryChange}
                options={[
                    {label: 'Все', value: 'all'},
                    {label: 'Избранное', value: 'favorite'},
                    {label: 'Мужская одежда', value: "men's clothing"},
                    {label: 'Ювелирные изделия', value: 'jewelery'},
                    {label: 'Электроника', value: 'electronics'},
                    {label: 'Женская одежда', value: "women's clothing"},
                ]}
            />

        </section>
    );
};