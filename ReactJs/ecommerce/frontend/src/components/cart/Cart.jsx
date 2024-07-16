import React, { useContext, useState } from "react";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import { ShoppingCartIcon } from "../../common/icons";
import { CartContext } from "../../contexts";
import { CartItemList } from "./CartItemList";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [openCart,setOpenCart] = useState(false);
  return (
    <>
      <IconButton size="large" color="inherit" onClick={()=> setOpenCart(true)}>
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right" //kon side theke ber hobe ta dekhate
        open={openCart}
        onClose={() => setOpenCart(false)}
        sx = {{mt:64}}
        
      >
        <Box sx ={ {display:'flex',mt:'10px',width:400}}><CartItemList/></Box>
      </Drawer>
    </>
  );
};

//badgecount kotogula add ase ta jante
