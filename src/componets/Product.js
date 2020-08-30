import React, { Component } from 'react'
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
} from 'reactstrap';

export default class Product extends Component {
    render() {
        return (
            <div><Row>
                {
                    
                    data.products.map(itme =>
                        <Col md={3}>
                            <Card>
                                <CardImg src={itme.pic}/>
                                <CardBody>
                           <CardTitle> ราคา {itme.name} บาท</CardTitle>
                                    <CardSubtitle>จำนวน{itme.price}</CardSubtitle>
                                   <CardSubtitle> จำนวน {itme.stock}</CardSubtitle>
                    </CardBody>
                            </Card>
                        </Col>
                    )



                }
          </Row>  </div>
        )
    }
}
