import './CreateProductPage.css';
import {Typography, Button, Form, Input, Select, Result} from 'antd';
import type {FormProps} from 'antd';
import {useDispatch} from "react-redux";
import {createNewProduct} from "../../productsSlice.ts";
import LinkComponent from "../../../../components/LinkComponent/LinkComponent.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";

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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
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

        dispatch(createNewProduct(newProduct));

        setSuccess(true);
        setError(false);

        form.resetFields();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
        setSuccess(false);
        setError(true);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <section className="create-product">

            <Typography.Title>
                Создать новый товар
            </Typography.Title>

            <LinkComponent href="/products" mixinClass="create-product__link">
                Вернуться к товарам
            </LinkComponent>

            {
                !success && !error ? (

                    <Form
                        {...layout}
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{maxWidth: 800}}
                        labelCol={{flex: '230px'}}
                        labelAlign="left"

                    >
                        <Form.Item<FieldType>
                            label="Название товара"
                            name="title"
                            rules={[{required: true, message: 'Пожалуйста, напишите название товара!'}]}
                        >
                            <Input onChange={(e) => setTitle(e.target.value)} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Описание товара"
                            name="description"
                            rules={[{required: true, message: 'Пожалуйста, заполните описание товара!'}]}

                        >
                            <Input onChange={(e) => setDescription(e.target.value)} />
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
                                options={[
                                    {label: 'Мужская одежда', value: "men's clothing"},
                                    {label: 'Ювелирные изделия', value: 'jewelery'},
                                    {label: 'Электроника', value: 'electronics'},
                                    {label: 'Женская одежда', value: "women's clothing"},
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" style={{width: "100px", marginRight: "10px"}}>
                                Создать
                            </Button>

                            <Button htmlType="button" onClick={onReset} style={{width: "100px"}}>
                                Reset
                            </Button>
                        </Form.Item>

                    </Form>

                ) : success && !error ? (

                    <Result
                        status="success"
                        title="Товар успешно создан!"
                        subTitle={`Название: ${title}, описание: ${description.length > 40 ? description.slice(0, 40) + "..." : description}`}
                        extra={[
                            <Button
                                key="create"
                                color="primary"
                                variant="solid"
                                onClick={() => {
                                    setSuccess(false);
                                    setError(false)
                                }}
                            >Создать еще товар</Button>,

                            <Link to="/products" className="create-product__button-link">
                                Вернуться к продуктам
                            </Link>,
                        ]}
                    />
                ) : !success && error ? (

                    <Result
                        status="warning"
                        title="Произошла непредвиденная ошибка. Товар не создан"
                        extra={
                            <Button type="primary" key="console">
                                Go Console
                            </Button>
                        }
                    />
                ) : null
            }

        </section>
    );
};