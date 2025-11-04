import './ProductsPage.css';
import Card from 'antd/es/card/Card';
import { Typography } from 'antd';
import { DeleteOutlined, LikeOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const products =[
  {
    id: 1,
    title:"Sberbank",
      description: 1335987412358749,
    src: "card-1.jpeg",
},
{
    id: 2,
    title:"Alfa-bank",
    description: 3258145732596854,
    src: "card-2.jpeg",
},
{
    id: 3,
    title:"VTB",
       description: 9654125003285472,
    src: "card-3.jpeg",
},
]

export default function ProductsPage() {

  return (
    <section className="products">
     
      <Typography.Title>
      Наши продукты
      </Typography.Title>

<ul className="products__list">
  {
  products.map(item=>(
 
<Card
className="products__item"
    key={item.id}
    hoverable
    // style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt={item.title}
        // src={item.src}
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
    actions={[
      <LikeOutlined key="like" />,
      <DeleteOutlined  key="delete" />,      
    ]}
  >
    <Link to={`/product/${item.id}`}>
    <h3 className="products__title">{item.title}</h3>
    <p className="products__description">{item.description}</p>
    </Link>
  </Card>
     
))
}
</ul>
    </section>
  );
}
