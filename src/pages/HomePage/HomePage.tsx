import './HomePage.css';
import {List, Typography} from 'antd';
import * as React from "react";
import {CheckCircleFilled} from "@ant-design/icons";

const data = [
    'Широкий ассортимент',
    'Качественные товары',
    'Удобный поиск',
    'Быстрая и бережная доставка',
    'Приемлемые цены',
];

const listStyle: React.CSSProperties = {
    position: 'relative',
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto 20px auto",
    paddingLeft: '25px',
    listStyle: 'none',
};

export default function HomePage() {
    return (
        <section className="home">

            <Typography.Title
                className="home__title"
                style={{
                    marginBottom: "30px",
                    fontSize: "50px",
                    textAlign: "center",
                    color: "var(--color-blue-100)"
                }}
            >
                Магазин для всей семьи
            </Typography.Title>
            <Typography.Title
                level={5} italic className="home__subtitle"
                style={{
                    marginBottom: "30px",
                    fontSize: "20px",
                    textAlign: "center"
                }}
            >
                Откройте для себя мир моды, технологий и
                роскоши
            </Typography.Title>

            <List
                size="small"
                style={listStyle}
                header={<div className="home__list-title">Почему мы? -</div>}
                footer={<div className="home__list-footer">Мы работаем для Вас!</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{<CheckCircleFilled />} {item}</List.Item>}
            />

            {/*<Typography.Title*/}
            {/*    level={4}*/}
            {/*    style={{*/}
            {/*        marginBottom: "30px",*/}
            {/*        fontSize: "30px",*/}
            {/*        textAlign: "center"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Посмотрите,- подобрали специально для Вас:*/}
            {/*</Typography.Title>*/}

            {/*<Carousel*/}
            {/*    autoplay={{dotDuration: true}} autoplaySpeed={5000}*/}
            {/*    style={{width: "100%", maxWidth: "800px", margin: "0 auto"}}*/}
            {/*>*/}
            {/*    <div>*/}
            {/*        <h3 className="card__title">1</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className="card__title">2</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className="card__title">3</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className="card__title">4</h3>*/}
            {/*    </div>*/}
            {/*</Carousel>*/}

        </section>
    );
};