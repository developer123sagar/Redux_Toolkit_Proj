import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { HiMenu } from "react-icons/hi";
import { Badge, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import {
  sortProductsAscending,
  sortProductsDescending,
} from "../store/productSlice";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cartProducts = useSelector((state) => state.cart);
  const cartProdLength = cartProducts.all_products?.length;
  const { data: product } = useSelector((state) => state.products);
  const prod = product[0];
  const filterProductDesc = prod
    ? Object.values({ ...prod })?.sort((a, b) => (a.price > b.price ? -1 : 1))
    : [];
  const filterProductAsc = prod
    ? Object.values({ ...prod })?.sort((a, b) => (a.price < b.price ? -1 : 1))
    : [];

  const handleProdDesc = (products) =>
    dispatch(sortProductsDescending(products));
  const handleProdAsc = (products) => dispatch(sortProductsAscending(products));


  return (
    <div className="fixed top-0 z-10 w-full">
      <AppBar>
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

          <div className=" text-white mr-20">
            <button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Filter Products
            </button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={() => {
                  handleProdDesc(filterProductDesc);
                  handleClose();
                }}
              >
                Sort by high price
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleProdAsc(filterProductAsc);
                  handleClose();
                }}
              >
                Sort by low price
              </MenuItem>
            </Menu>
          </div>

          <Link to="/cartproduct">
            <Button color="inherit">
              Cart
              <Badge
                className="p-2"
                badgeContent={cartProdLength}
                color="error"
              />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
