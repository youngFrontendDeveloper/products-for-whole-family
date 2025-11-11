import './HomePage.css';
import {List, Typography} from 'antd';

const {Title,} = Typography;

const data = [
    'Широкий ассортимент',
    'Качественные товары',
    'Удобный поиск',
    'Быстрая и бережная доставка',
    'Приемлемые цены',
];

export default function HomePage() {
    return (
        <section className="home">

            <Typography>

                <Title className="home__title">Магазин для всей семьи</Title>
                <Title level={4} italic className="home__subtitle">Откройте для себя мир моды, технологий и
                    роскоши</Title>

                <List
                    size="small"
                    header={<div className="home__list-title">Почему мы? -</div>}
                    footer={<div className="home__list-footer">Мы работаем для Вас!</div>}
                    bordered
                    dataSource={data}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                {/*    <Paragraph className="home__text">*/}
                {/*    Посмотрите,- подобрали специально для Вас:*/}
                {/*</Paragraph>*/}

            </Typography>

        </section>
    );
};