import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

import goldNecklace from '../images/goldNecklace.webp';
import goldRing from '../images/goldRing.webp';
import platinumEarring from '../images/platinumEarring.webp';
import platinumNosering from '../images/platinumNosering.jpg';

const Wishlist = () => {
    const list = [
        { name: 'Gold Necklace', image: goldNecklace, price: '₹150000' },
        { name: 'Gold Ring', image: goldRing, price: '₹70000' },
        { name: 'Platinum Earring', image: platinumEarring, price: '₹10000' },
        { name: 'Platinum Nose Ring', image: platinumNosering, price: '₹6000' },

    ];

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" align="center" style={{ marginBottom: 20, color: "#832729", fontWeight: "bold", marginTop: 10 }}>
                    Wishlist
                </Typography>
                <Grid container spacing={3} >
                    {list.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    height="140"
                                    image={product.image}
                                
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2" style={{ color: "#832729", fontWeight: "bold" }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="inherit" component="p">
                                        Price: {product.price}
                                    </Typography>
                                    <Button variant='outlined' style={{ color: "#832729", fontWeight: "bold", marginBottom: "-15px" }}>
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Wishlist;
