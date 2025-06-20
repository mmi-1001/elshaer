import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Paper, Grid, Checkbox, IconButton, Modal, MenuItem } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const initialRows = [
  { id: 1, applicationDate: '2025-06-01', from: '2025-06-10', to: '2025-06-15', reason: 'Vacation', status: 'Approved' },
  { id: 2, applicationDate: '2025-06-05', from: '2025-06-12', to: '2025-06-13', reason: 'Medical', status: 'Pending' },
  { id: 3, applicationDate: '2025-06-07', from: '2025-06-14', to: '2025-06-14', reason: 'Personal', status: 'Rejected' },
];

const statusOptions = ['Pending', 'Approved', 'Rejected'];

export default function MyLeaves() {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    applicationDate: '',
    from: '',
    to: '',
    reason: '',
    status: 'Pending',
  });
  const [editId, setEditId] = useState(null);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(rows.map(row => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]);
  };

  const filteredRows = rows.filter(row =>
    row.reason.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenModal = () => {
    setForm({
      applicationDate: '',
      from: '',
      to: '',
      reason: '',
      status: 'Pending',
    });
    setEditId(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditId(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      setRows(prevRows => prevRows.map(row => row.id === editId ? { ...row, ...form } : row));
    } else {
      setRows(prevRows => {
        const newId = prevRows.length ? Math.max(...prevRows.map(r => r.id)) + 1 : 1;
        return [
          ...prevRows,
          {
            id: newId,
            ...form,
          },
        ];
      });
    }
    setOpenModal(false);
    setEditId(null);
  };

  const handleDelete = (id) => {
    setRows(prevRows => prevRows.filter(row => row.id !== id));
    setSelected(prev => prev.filter(sid => sid !== id));
  };

  const handleEdit = (row) => {
    setForm({
      applicationDate: row.applicationDate,
      from: row.from,
      to: row.to,
      reason: row.reason,
      status: row.status,
    });
    setEditId(row.id);
    setOpenModal(true);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', background: '#181c24', p: 3 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 3, fontWeight: 700 }}>My Leaves</Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6} />
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="flex-end">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search by reason"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ background: '#232a36', borderRadius: 1, input: { color: '#fff' }, mr: 2, width: 220 }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleOpenModal}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Paper sx={{ background: '#232a36', color: '#fff', p: 2, boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAll}
                  inputProps={{ 'aria-label': 'select all leaves' }}
                />
              </TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Application Date</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>From Date</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>To Date</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Reason</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selected.includes(row.id)}
                    onChange={() => handleSelect(row.id)}
                  />
                </TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.applicationDate}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.from}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.to}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.reason}</TableCell>
                <TableCell>
                  <IconButton color="primary" size="small" onClick={() => handleEdit(row)}><Edit /></IconButton>
                  <IconButton color="error" size="small" onClick={() => handleDelete(row.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          bgcolor: '#232a36',
          color: '#fff',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Add Leave</Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Application Date"
              type="date"
              name="applicationDate"
              value={form.applicationDate}
              onChange={handleFormChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="From Date"
              type="date"
              name="from"
              value={form.from}
              onChange={handleFormChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="To Date"
              type="date"
              name="to"
              value={form.to}
              onChange={handleFormChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Reason"
              name="reason"
              value={form.reason}
              onChange={handleFormChange}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <TextField
              select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleFormChange}
              fullWidth
              sx={{ mb: 2 }}
            >
              {statusOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button onClick={handleCloseModal} color="inherit" variant="outlined">Cancel</Button>
              <Button type="submit" color="primary" variant="contained">Add</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
} 