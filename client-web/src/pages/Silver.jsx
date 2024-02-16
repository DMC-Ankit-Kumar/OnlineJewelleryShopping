import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

import silverNecklace from '../images/silverNecklace.jpg';
import silverRing from '../images/silverRing.webp';
import silverEarring from '../images/silverEarring.jpg';
import siverNosering from '../images/siverNosering.webp';
// Import other gold product images as needed

const Silver = () => {
    const silverProducts = [
        { name: 'Siver Necklace', image: silverNecklace, price: '₹3000' },
        { name: 'Siver Ring', image: silverRing, price: '₹1000' },
        { name: 'Siver Earring', image: silverEarring, price: '₹1000' },
        { name: 'Siver Nose Ring', image: siverNosering, price: '₹1500' },

        { name: 'Siver Necklace', image: silverNecklace, price: '₹3000' },
        { name: 'Siver Ring', image: silverRing, price: '₹1000' },
        { name: 'Siver Earring', image: silverEarring, price: '₹1000' },
        { name: 'Siver Nose Ring', image: siverNosering, price: '₹1500' },

        // Add more gold products as needed
    ];

    return (
        <>
        <Navbar />
        <Container>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
            {silverProducts.map((product, index) => (
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

export default Silver;
