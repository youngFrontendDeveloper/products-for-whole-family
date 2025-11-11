import './ProductsFilter.css';
import {Form, Select} from "antd";
import type {FormProps} from 'antd';
import {createNewProduct} from "../../features/products/productsSlice.ts";
import {useState} from "react";

type FieldType = {
    title: string;
    description: string;
    image: string;
    category: string;
    price: number;
};

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

export default function ProductsFilter() {
    const [form] = Form.useForm();
    const [filter, setFilter] = useState<'all' | 'liked' | 'category'>('all');

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);

    };
    return (
        <section className="products-filter">
            <p>Фильтровать товары по</p>

            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                autoComplete="off"
                style={{maxWidth: 600}}
            >
                <Form.Item
                    name="category" label="Категория товара"
                    rules={[{required: true, message: 'Пожалуйста, выберите категорию товара'},]}
                >
                    <Select
                        allowClear
                        placeholder="Выберите категорию товара"
                        // onChange={onCategoryChange}
                        options={[
                            {label: 'Все', value: 'all'},
                            {label: 'Избранное', value: 'favorite'},
                            {label: 'Мужская одежда', value: 'mens-clothing'},
                            {label: 'Ювелирные изделия', value: 'jewelery'},
                            {label: 'Электроника', value: 'electronics'},
                            {label: 'Женская одежда', value: 'womens-clothing'},
                        ]}
                    />
                </Form.Item>
            </Form>
        </section>
    );
};