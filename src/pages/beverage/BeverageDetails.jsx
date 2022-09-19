import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './beverage-details.scss';

import axios from "axios";

import ImageComponent from "../../components/image-component/ImageComponent";

const baseURL = "http://localhost:8000/api/v1/beverages";

function BeverageDetails(props) {
    
    const {beverageId} = useParams();
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        const axiosCall = async () => {
          const response = await axios.get(`${baseURL}/${beverageId}`)
          setBeverage(response.data)
        }
        
        axiosCall()
  
       },[beverageId]);

    // useEffect(() => {
    //     const fetchBeverage = async () => {
    //         const response = await fetch(`${baseURL}/${params.beverageId}`);
    //         const data = await response.json();
    //         setBeverage(data);
    //     };
    //     fetchBeverage();
    // }, []);

    // useEffect(() => {
    //     axios
    //         .get(`${baseURL}/${params.beverageId}`)
    //         .then((response) => {
    //             setBeverage(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     // if (!beverage) return null;
    // }, []);

    // useEffect(async () => {
    //     const response = await axios.get(`${baseURL}/${params.beverageId}`);

    //     setBeverage(response.data)

    //     // if (!beverage) return null;
    // },[]);

    console.log("beverage: ", beverage);

    return beverage ? (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={ImageComponent(beverage.img)} alt={beverage.name} className="showImage" />
                    </Col>
                    <Col>
                        <h4 className="price">${beverage.price.toFixed(2)}</h4>
                        <div className="saledetails">
                            <p>{beverage.name}</p>
                                <div className={styles['brandSpec']}>
                                    <span>{beverage.spec} | </span>
                                    <span>Brand: {beverage.brandName}</span>
                                </div>
                            <p>Stock Available: {beverage.stock}</p>
                        </div>
                        <div>
                            {/* svg for increse and decrease icon together with input field */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgRemoveFromCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><rect width="2" height="16" x="19" y="12" fill="#FFF" rx="1" transform="rotate(90 20 20)"></rect></g></svg>
                            <input aria-label="quantity" name="quantity" type="number" autocomplete="off" min="0" value="1" pattern="\d*" className="inputOrderShow"></input>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgAddToCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><g fill="#FFF" transform="translate(12 12)"><rect width="2" height="16" x="7" rx="1" transform="rotate(90 8 8)"></rect><rect width="2" height="16" x="7" rx="1"></rect></g></g></svg>
                            <Button variant="primary">Add to Cart</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="description">Description</h3>
                        <p className="details">{beverage.description}</p>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    ) : null
}

export default BeverageDetails;


