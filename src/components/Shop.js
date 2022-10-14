import { Component } from 'react'
import "../styles/style.css";
import Data_v2 from '../data_v2.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default class Shop extends Component {



  render() {

    return (
    <>
      <div className='titre'>
        <h1><strong>Shop Now</strong></h1>
      </div>
      <Container> 
        <div className='row'>
            { Data_v2.map( data => (
              <div className='col-md-4'>
                <Card className='mx-auto my-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data["Picture_1"]} />
                  <Card.Body>
                    <Card.Title className='card_titre'>{data["Brand"]} - {data["Street_price"]} $</Card.Title>
                    <Card.Text>
                      <Link id='card_btn' className="btn btn-secondary" to={'/Shop/'+data["Product_id"]} >Show More</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
      </Container>
    
    </>  
    )
  }
}
