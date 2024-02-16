import { AppBar, Toolbar, IconButton, Badge, Container, Typography } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Favorite from '@mui/icons-material/Favorite';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Logo from '../images/logo.png'; // Replace with the path to your logo
// import Autoplay2 from './Autoplay2';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#660000 ' }}>
                <Container>
                    <Toolbar>
                        {/* Logo on the left */}
                        <IconButton edge="start" color="inherit" aria-label="menu" component={Link} to="/home">
                            <img src={Logo} alt="Logo" style={{ width: 40, height: 40 }} />
                        </IconButton>

                        {/* Search button at the center */}
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
                                {/* <SearchIcon /> */}
                                {/* <InputBase
                                    placeholder="Search..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ marginLeft: 8 }}
                                /> */}
                                <Typography>
                                    Jewellery Store
                                </Typography>
                            </div>
                        </div>

                        {/* Icons on the right */}
                        <IconButton color="inherit" component={Link} to="/wishlist" >
                            <Badge badgeContent={0} color="error">
                                <Favorite />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/cart" >
                            <Badge badgeContent={0} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/profile">
                            <AccountCircle />
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/login">
                            <ExitToApp />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <Autoplay2 /> */}
        </>
    );
}

export default Navbar;