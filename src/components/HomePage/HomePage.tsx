// import Title from '../Title/Title';
import './HomePage.css';
import {Typography } from 'antd';
const { Title, Paragraph, } = Typography;

export default function HomePage() {
  return (
    <section className="home">      
      {/* <Title tag="h1" variants={["center"]} mixinClass="home__title">
        Тестовое задание от Экосистема Альфа
      </Title> */}
      <Typography>
      <Title>Тестовое задание от Экосистема Альфа</Title>
      <Paragraph>
        В данном проекте использованы такие инструменты, как библиотеки React.js, React Router Dom, react-hook-form, UI Ant Design 
      </Paragraph>
      
      </Typography>


    </section>
  );
};