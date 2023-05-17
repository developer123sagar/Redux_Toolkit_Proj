import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { HiMenu } from "react-icons/hi"
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartProducts = useSelector(state => state.cart)
  const cartProdLength = cartProducts.all_products?.length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HiMenu className="sm:hidden" />
          </IconButton>
          <Typography component="p" sx={{ flexGrow: 1 }}>
            <Link to="/">
              Swift<span className="text-xl text-red-400">buy</span>
            </Link>
          </Typography>
          <Link to="/cartproduct">
            <Button color="inherit">My Cart<Badge className="p-2" badgeContent={cartProdLength} color="error" /></Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
