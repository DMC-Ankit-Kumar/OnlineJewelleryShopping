import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

import diamondNecklace from '../images/diamondNecklace.webp';
import diamondRing from '../images/diamondRing.webp';
import diamondEarring from '../images/diamondEarring.png';
import diamondNosering from '../images/diamondNosering.png';
import { Link } from 'react-router-dom';

const Diamond = () => {
    const diamondProducts = [
        { name: 'Diamond Necklace', image: diamondNecklace, price: '₹450000' },
        { name: 'Diamond Ring', image: diamondRing, price: '₹270000' },
        { name: 'Diamond Earring', image: diamondEarring, price: '₹190000' },
        { name: 'Diamond Nose Ring', image: diamondNosering, price: '₹150000' },

        { name: 'Diamond Necklace', image: diamondNecklace, price: '₹450000' },
        { name: 'Diamond Ring', image: diamondRing, price: '₹270000' },
        { name: 'Diamond Earring', image: diamondEarring, price: '₹190000' },
        { name: 'Diamond Nose Ring', image: diamondNosering, price: '₹150000' },

    
    ];

    return (
        <>
        <Navbar />
        <Container>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
            {diamondProducts.map((product, index) => (
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

export default Diamond;
