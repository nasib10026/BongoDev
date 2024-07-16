import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../../api/hooks";
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from "@mui/icons-material";

export const DashBoardPage = () => {
  const { error, isLoading, products, handleDelete, handleUpdate, handleAdd } = useProducts();
  const [editProduct, setEditProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', categories: '' });

  const handleEditClick = (product) => {
    setEditProduct(product);
    setOpen(true);
    setIsAddMode(false);
  };

  const handleAddClick = () => {
    setNewProduct({ name: '', price: '', categories: '' });
    setOpen(true);
    setIsAddMode(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditProduct(null);
    setIsAddMode(false);
  };

  const handleSave = async () => {
    if (isAddMode) {
      await handleAdd(newProduct);
    } else if (editProduct) {
      await handleUpdate(editProduct.id, editProduct);
    }
    handleClose();
  };

  const getFormattedRows = () => {
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      categories: product.categories ? product.categories.join(', ') : '', // Ensure categories is defined and an array
    }));
  };

  return (
    <Container>
      <Box sx={{ minHeight: 400, width: "100%", py: 4 }}>
        {error && <Alert severity="error">{error}</Alert>}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddClick}>
            Add Product
          </Button>
        </Box>
        <DataGrid
          columns={[
            { field: "id", headerName: "ID", width: 90 },
            { field: "name", headerName: "Product Name", flex: 1, minWidth: 150 },
            {
              field: "price",
              headerAlign: "center",
              headerName: "Price($)",
              align: "right",
              minWidth: 120,
              renderCell: ({ row }) => (
                <Box>
                  <Typography>${row.price}</Typography>
                </Box>
              ),
            },
            {
              field: "categories",
              headerName: "Categories",
              minWidth: 250,
              headerAlign: "center",
              renderCell: ({ row }) => (
                <Box>
                  <Typography>{row.categories}</Typography>
                </Box>
              ),
            },
            {
              field: "actions",
              headerName: "Actions",
              minWidth: 150,
              renderCell: ({ row }) => (
                <Box>
                  <IconButton onClick={() => handleEditClick(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ),
            },
          ]}
          loading={isLoading}
          rows={getFormattedRows()}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Box>

      {/* Edit/Add Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isAddMode ? 'Add Product' : 'Edit Product'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={isAddMode ? newProduct.name : editProduct?.name}
            onChange={(e) => {
              const value = e.target.value;
              if (isAddMode) {
                setNewProduct({ ...newProduct, name: value });
              } else {
                setEditProduct({ ...editProduct, name: value });
              }
            }}
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            type="number"
            value={isAddMode ? newProduct.price : editProduct?.price}
            onChange={(e) => {
              const value = e.target.value;
              if (isAddMode) {
                setNewProduct({ ...newProduct, price: value });
              } else {
                setEditProduct({ ...editProduct, price: value });
              }
            }}
          />
          <TextField
            label="Categories"
            fullWidth
            margin="normal"
            value={isAddMode ? newProduct.categories : editProduct?.categories}
            onChange={(e) => {
              const value = e.target.value;
              if (isAddMode) {
                setNewProduct({ ...newProduct, categories: value });
              } else {
                setEditProduct({ ...editProduct, categories: value });
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
