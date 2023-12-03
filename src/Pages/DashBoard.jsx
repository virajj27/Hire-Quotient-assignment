import {
  Box,
  styled,
  Stack,
  Pagination,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsers } from "../Components/Dashboard/getusers";
import { MemoizedButton } from "../Components/SDK/Button";

const CustomDashboard = styled(Box)(({ theme }) => ({
  padding: "2rem",

  ".btncontainer": {
    display: "flex",
  },
  ".btn": {
    display: "inline-block",
  },
  ".row":{
    "&.selected":{
      backgroundColor:"grey"
    }
  }
}));

const itemsPerPage = 10;

const DashBoard = () => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // edit row
  const [selectedRowForEdit, setSelectedRowForEdit] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: "",
    email: "",
    role: "",
  });
  // get all users function
  useEffect(() => {
    async function fetchData() {
      try {
        const users = await getUsers();
        setRows(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

   // Filter the rows based on the search query
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Filter the rows based on the search query
    const filteredRows = rows.filter(
      (row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the state with the filtered rows
    setRows(filteredRows);
  };
 // Update these calculations to use 'rows' instead of 'filteredRows'
 const totalItems = rows.length;
 const totalPages = Math.ceil(totalItems / itemsPerPage);

 const paginatedRows = rows.slice(
   (page - 1) * itemsPerPage,
   page * itemsPerPage
 );

  const handleCheckboxChange = (rowId) => {
    const isSelected = selectedRows.includes(rowId);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : rows.map((row) => row.id));
  };

  const handleDeleteSelected = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete the selected rows?"
    );

    if (isConfirmed) {
      // Filter out the selected rows and update the state
      const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
      setRows(updatedRows);
      setSelectedRows([]);
    }
  };
  const handleEdit = (row) => {
    setSelectedRowForEdit(row);
    setEditedValues({
      name: row.name || "",
      email: row.email || "",
      role: row.role || "",
    });
    setOpenModal(true);
  };
  const handleUpdate = () => {
    // Update the row with the new information
    updateUserInData(selectedRowForEdit.id, editedValues);

    // Close the modal and reset the state
    setOpenModal(false);
    setSelectedRowForEdit(null);
    setEditedValues({
      name: "",
      email: "",
      role: "",
    });
  };
  const updateUserInData = (userId, updatedData) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === userId ? { ...row, ...updatedData } : row
      )
    );
  };
  const handleDelete = (rowId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this row?"
    );

    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      // Implement the logic to delete the specific row
      const updatedRows = rows.filter((row) => row.id !== rowId);
      setRows(updatedRows);
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    }
  };
  return (
    <CustomDashboard>
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        {/* Search Input */}
        <TextField
          type="text"
          placeholder="Search by Name, Email, or Role"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Search Button */}
        <button type="submit" className="search-icon">
          Search
        </button>
      </form>

      {/* Table Header */}
      <Box style={{ display: "flex", marginBottom: "10px" }}>
        <Box style={{ width: "20px" }}>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </Box>
        <Box style={{ flex: 1 }}>Name</Box>
        <Box style={{ flex: 1 }}>Email</Box>
        <Box style={{ flex: 1 }}>Role</Box>
        <Box style={{ width: "100px" }}>Actions</Box>
      </Box>

      {/* Table Rows */}
      {paginatedRows.map((row) => (
        <Box key={row.id} className={!selectedRows?.includes(row?.id) ? "row":"row selected"} style={{ display: "flex", marginBottom: "5px" }}>
          <Box style={{ width: "20px" }}>
            <input
              type="checkbox"
              checked={selectedRows.includes(row.id)}
              onChange={() => handleCheckboxChange(row.id)}
            />
          </Box>
          <Box style={{ flex: 1 }}>{row.name}</Box>
          <Box style={{ flex: 1 }}>{row.email}</Box>
          <Box style={{ flex: 1 }}>{row.role}</Box>
          <Box className="btncontainer" style={{ width: "100px" }}>
            <EditIcon className="btn" onClick={() => handleEdit(row)} />
            <DeleteIcon className="btn" onClick={() => handleDelete(row?.id)} />
          </Box>
        </Box>
      ))}

      {/* Pagination Controls */}
      <Box>
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => {
              setPage(value);
            }}
          />
        </Stack>
      </Box>

      {/* Delete selected button */}
      <button onClick={handleDeleteSelected}>Delete Selected</button>
      {/* Edit Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            width: 300,
            padding: 2,
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6">Edit User</Typography>
          <TextField
            label="Name"
            value={editedValues.name}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            label="Email"
            value={editedValues.email}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            label="Role"
            value={editedValues.role}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev, role: e.target.value }))
            }
          />
          <MemoizedButton
            content={"Update"}
            variant="contained"
            onClick={handleUpdate}
          />
        </Box>
      </Modal>
    </CustomDashboard>
  );
};

export default DashBoard;
