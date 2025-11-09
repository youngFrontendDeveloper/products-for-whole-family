import './CreateProductPage.css';
import {Typography, Button, Form, Input, Select} from 'antd';
import type {FormProps} from 'antd';
import {useDispatch} from "react-redux";
import {createNewProduct} from "../productsSlice.ts";

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


export default function CreateProductPage() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        const newProduct = {
            id: Date.now(),
            title: values.title,
            price: Number(values.price),
            description: values.description,
            category: values.category,
            image: values.image,
            isLiked: false,
            rating: {
                rate: 0,
                count: 0
            }
        }
        console.log(newProduct)
        dispatch(createNewProduct(newProduct));
        form.resetFields();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <section className="create-product">
            <Typography.Title>
                Создать новый товар
            </Typography.Title>

            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{maxWidth: 600}}
            >
                <Form.Item<FieldType>
                    label="Название товара"
                    name="title"
                    rules={[{required: true, message: 'Пожалуйста, напишите название товара!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Описание товара"
                    name="description"
                    rules={[{required: true, message: 'Пожалуйста, заполните описание товара!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Цена"
                    name="price"
                    rules={[{required: true, message: 'Пожалуйста, укажите цену товара!'}]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Ссылка на изображение товара"
                    name="image"
                    rules={[{required: true, message: 'Пожалуйста, напишите ссылку на изображение товара!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="category" label="Категория товара"
                    rules={[{required: true, message: 'Пожалуйста, выберите категорию товара'},]}
                >
                    <Select
                        allowClear
                        placeholder="Выберите категорию товара"
                        // onChange={onCategoryChange}
                        options={[
                            {label: 'Мужская одежда', value: 'mens-clothing'},
                            {label: 'Ювелирные изделия', value: 'jewelery'},
                            {label: 'Электроника', value: 'electronics'},
                            {label: 'Женская одежда', value: 'womens-clothing'},
                        ]}
                    />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>

                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>


            </Form>
        </section>
    );
};