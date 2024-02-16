import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

import platinumNecklace from '../images/platinumNecklace.webp';
import platinumRing from '../images/platinumRing.png';
import platinumEarring from '../images/platinumEarring.webp';
import platinumNosering from '../images/platinumNosering.jpg';
// Import other gold product images as needed

const Platinum = () => {
    const platinumProducts = [
        { name: 'Platinum Necklace', image: platinumNecklace, price: '₹20000' },
        { name: 'Platinum Ring', image: platinumRing, price: '₹15000' },
        { name: 'Platinum Earring', image: platinumEarring, price: '₹10000' },
        { name: 'Platinum Nose Ring', image: platinumNosering, price: '₹6000' },

        { name: 'Platinum Necklace', image: platinumNecklace, price: '₹20000' },
        { name: 'Platinum Ring', image: platinumRing, price: '₹15000' },
        { name: 'Platinum Earring', image: platinumEarring, price: '₹10000' },
        { name: 'Platinum Nose Ring', image: platinumNosering, price: '₹6000' },

        // Add more gold products as needed
    ];

    return (
        <>
        <Navbar />
        <Container>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
            {platinumProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.image}
                            // title={product.name}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2" style={{color: "#832729", fontWeight: "bold"}}>
                                {product.name}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit" component="p">
                                Price: {product.price}
                            </Typography>
                            <Button variant='outlined' style={{color: "#832729", fontWeight: "bold", marginBottom: "-15px"}}>
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

export default Platinum;
