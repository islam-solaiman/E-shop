import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    setmyDate(newValue);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myDate);

  if (isLoading) {
    return <Typography variant="h6">LOADING..............</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error.message}</Typography>;
  }

  if (!data || !data.data) {
    return null; // Handle the case where data is not available
  }

  return <Container sx={{ py: 9 }}>{/* Rest of your code */}</Container>;
};

export default Main;
