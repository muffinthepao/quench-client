import React from "react";
// import Button from 'react-bootstrap/Button';
import { Card, Button, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

import ImageComponent from "../../../components/image-component/ImageComponent";
import styles from './beverage-card.module.scss';

function BeverageCard(props) {
    //destructurting
    const { _id, name, brandName, price, stock, description, spec, img } = props.data;

    console.log("props.data", props.data)

    return (
        <>
        <div className="d-grid gap-3">
            <div className={styles['child']}>
                <div className="p-2 bg-light border">
                    {props.data ? (
                        
                            <Card style={{ width: "18rem", height: "600px" }}>
                                <Card.Img className={styles['img']} variant="top" src={ImageComponent(img)} />
                                <Link to={`/beverages/${_id}`}>
                                    <Card.Body>
                                            <Card.Text>${price}</Card.Text>
                                            {/* svg for the add favourite heart */}
                                            <svg width="24" height="24" viewBox="0 0 24 24" color="#0d6efd"><title>favourite</title><path d="M20.5 9.225a4.73 4.73 0 0 1-1.38 3.34l-6.766 6.788a.5.5 0 0 1-.708 0l-6.767-6.788a4.734 4.734 0 0 1 0-6.68 4.701 4.701 0 0 1 6.664 0l.457.458.457-.458a4.703 4.703 0 0 1 6.663 0 4.73 4.73 0 0 1 1.38 3.34zM12 18.292l5.6-5.62.812-.813a3.73 3.73 0 0 0 0-5.268 3.703 3.703 0 0 0-5.247 0l-.811.814a.5.5 0 0 1-.708 0l-.812-.814a3.701 3.701 0 0 0-5.247 0 3.734 3.734 0 0 0 0 5.268L12 18.292z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>{spec}</Card.Text>                              
                                    </Card.Body>
                                </Link>
                                <Card.Footer className={styles['greycontainer']}>
                                    <div className={styles['addCart']}>
                                        {/* svg for increse and decrease icon together with input field */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgRemoveFromCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><rect width="2" height="16" x="19" y="12" fill="#FFF" rx="1" transform="rotate(90 20 20)"></rect></g></svg>
                                        <input aria-label="quantity" name="quantity" type="number" autocomplete="off" min="0" pattern="\d*" className={styles['inputOrder']}></input>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgAddToCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><g fill="#FFF" transform="translate(12 12)"><rect width="2" height="16" x="7" rx="1" transform="rotate(90 8 8)"></rect><rect width="2" height="16" x="7" rx="1"></rect></g></g></svg>
                                        <Button variant="primary" className="addcartbutton">Add to Cart</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                    ) : (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ImageComponent()} />
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                                    <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder.Button variant="primary" xs={6} />
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default BeverageCard;