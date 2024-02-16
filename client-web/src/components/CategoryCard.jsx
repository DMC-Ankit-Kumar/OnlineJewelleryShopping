// src/CategoryCard.js
import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';

const CategoryCard = ({ category, image, onClick }) => {
  return (
    <Card 
      sx={{ 
        width: 200,
        backgroundImage: `url(${image})`, // Set background image based on category
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#832729', // Adjust text color for better readability
      }}>
      <CardContent>
        <Typography variant="h5" sx={{fontWeight: "bold"}} >{category}</Typography>
        <Button onClick={onClick} variant="text" color="primary" sx={{ marginTop: 2, color: "#832729", fontWeight: "bold" }}>
          Explore
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
