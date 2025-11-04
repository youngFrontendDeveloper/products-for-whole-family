import './ProductsItemPage.css';
import {Typography } from 'antd';
const { Title, Paragraph,} = Typography;
// import Title from '../Title/Title.tsx';

export default function ProductsItemPage() {
  return (
    <section className="product">
      {/* <Title tag="h1" variants={[]} mixinClass="product__title">
        Отдельный продукт
      </Title> */}
      <Typography>
      <Title>Отдельный продукт</Title>
      <Paragraph>

      </Paragraph>
      
      </Typography>
    </section>
  );
}
