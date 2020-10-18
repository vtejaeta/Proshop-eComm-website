import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card>
        <Link to={`/product/${product._id}`} className=''>
          <Card.Img
            src={product.image}
            variant='top'
            style={{ maxHeight: '175px' }}
            // height='200'
            // width='295'
          />
        </Link>
      </Card>
      <Card.Body>
        <Link to={`/product/${product._id}`} className=''>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
