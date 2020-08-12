import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

const ProductCard = (props) => {
  const {name, stocked, category, description, price} = props.product
  return (
    <div>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
        {!stocked && <p>Out of stock</p>}
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
      <CardFooter>
        Price: ${price}
        
      </CardFooter>
    </div>
  );
}

export default ProductCard;