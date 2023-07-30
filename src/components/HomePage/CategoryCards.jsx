import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function CategoryCards() {

    const cards = [
        {
          title: 'Headphones',
          text: 'This is the first object.',
          image: 'https://source.unsplash.com/286x286/?headphone'
        },
        {
          title: 'Smartphones',
          text: 'This is the second object.',
          image: 'https://source.unsplash.com/286x286/?smartphones'
        },
        {
          title: 'Watches',
          text: 'This is the third object.',
          image: 'https://source.unsplash.com/286x286/?wristwatch'
        },
        {
          title: 'Keyboards',
          text: 'This is the fourth object.',
          image: 'https://source.unsplash.com/286x286/?Keyboard-dark'
        },
        {
          title: "Smart Watches",
          text: 'This is the fifth object.',
          image: 'https://source.unsplash.com/286x286/?smartwatch'
        }
      ];
      
  return (
    <div className='d-flex'>
        {cards.map((card,index)=>(
          <Card key={index} style={{ width: '15rem' }} className="m-auto my-5 border-0" >
            <Link to='product' className='no-underline text-gamma'>
            <Image src={card.image} roundedCircle />
            <Card.Body className='text-center'>
                <Card.Title className='mb-4 no-underline'>{card.title}</Card.Title>
                <Button variant="primary">Shop now!</Button>
            </Card.Body>
                </Link>
          </Card>
        ))}
    </div>
  );
}

export default CategoryCards;