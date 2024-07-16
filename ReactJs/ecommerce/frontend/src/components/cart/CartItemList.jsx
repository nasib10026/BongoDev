import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";

import React, { useContext } from "react";
import { DeleteIcon } from "../../common/icons";
import { CartContext } from "../../contexts";
//eta holo item ke dekhanor jonno drawer e
export const CartItemList = () => {
  const { cart,removeFromCart } = useContext(CartContext);
  return (
    <Box>
      <List>
        {cart.map((cartItem) => (
          <ListItem
            key={cartItem.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={()=> removeFromCart(cartItem.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${cartItem.name} - $${cartItem.price} x 1`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
