import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const AdminHomePage = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({ pname: '', price: '', image: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:7000/admin');
      console.log(response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveProduct = async () => {
    try {
      await axios.post('http://127.0.0.1:7000/admin', newProduct);
      fetchProducts(); // Refresh the product list after adding
      setNewProduct({ pname: '', price: '', image: '' });
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('An error occurred while saving the product.');
    }
  };

  const handleUpdateProduct = (id) => {
    // Implement update functionality
  };

  const handleDeleteProduct = (id) => {
    // Implement delete functionality
  };

  return (
    <Container style={{marginBottom: "50px"}}>
      <div>
        <h1 style={{ textAlign: "center", color: "#832729" }}>Admin Homepage</h1>
        <Button
          style={{
            marginBottom: '10px',
            backgroundColor: "#832729",
            color: "white"
          }}
          variant="contained" onClick={handleAddProduct} startIcon={<AddCircleOutlineIcon />}>
          Add Product
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#832729" }}>
                <TableCell style={{ color: "white" }}>Image</TableCell>
                <TableCell style={{ color: "white" }}>Name</TableCell>
                <TableCell style={{ color: "white" }}>Price</TableCell>
                <TableCell style={{ color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img src={product.image} alt={product.pname} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{product.pname}</TableCell>
                  <TableCell>Rs.{product.price}</TableCell>
                  <TableCell>
                    <IconButton style={{ color: "#832729" }} aria-label="edit" onClick={() => handleUpdateProduct(product.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton style={{ color: "#832729" }} aria-label="delete" onClick={() => handleDeleteProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="pname"
            label="Name"
            fullWidth
            value={newProduct.pname}
            onChange={(e) => setNewProduct({ ...newProduct, pname: e.target.value })}
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            fullWidth
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            fullWidth
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
        </DialogContent>
        <Button onClick={handleSaveProduct} color="primary">
          Save
        </Button>
      </Dialog>
    </Container>
  );
};

export default AdminHomePage;
