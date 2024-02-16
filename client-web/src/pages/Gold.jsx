import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

import goldNecklace from '../images/goldNecklace.webp';
import goldRing from '../images/goldRing.webp';
import goldEarring from '../images/goldEarring.webp';
import goldNosering from '../images/goldNosering.webp';
import { Link } from 'react-router-dom';

const Gold = () => {
    const goldProducts = [
        { name: 'Gold Necklace', image: goldNecklace, price: '₹150000' },
        { name: 'Gold Ring', image: goldRing, price: '₹70000' },
        { name: 'Gold Earring', image: goldEarring, price: '₹90000' },
        { name: 'Gold Nose Ring', image: goldNosering, price: '₹50000' },

        { name: 'Gold Necklace', image: goldNecklace, price: '₹150000' },
        { name: 'Gold Ring', image: goldRing, price: '₹70000' },
        { name: 'Gold Earring', image: goldEarring, price: '₹90000' },
        { name: 'Gold Nose Ring', image: goldNosering, price: '₹50000' },

    ];

    return (
        <>
        <Navbar />
        <Container>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
            {goldProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.image}
                            
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2" style={{color: "#832729", fontWeight: "bold"}}>
                                {product.name}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit" component="p">
                                Price: {product.price}
                            </Typography>
                            <Button variant='outlined' component={Link} to="/cart" style={{color: "#832729", fontWeight: "bold", marginBottom: "-15px"}}>
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

export default Gold;
