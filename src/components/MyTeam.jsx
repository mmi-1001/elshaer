import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Paper, Grid, Avatar } from '@mui/material';
import { Add, People } from '@mui/icons-material';

const initialRows = [
  { name: 'Ahmed Mohamed', role: 'HR', email: 'ahmed@company.com', status: 'Active' },
  { name: 'Sara Ali', role: 'Manager', email: 'sara@company.com', status: 'Active' },
  { name: 'John Doe', role: 'Developer', email: 'john@company.com', status: 'Inactive' },
];

export default function MyTeam() {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(initialRows);

  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', background: '#181c24', p: 3 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 3, fontWeight: 700 }}>My Team</Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: '#232a36', color: '#fff', boxShadow: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <People color="primary" />
                <Box>
                  <Typography variant="h6">Team Members</Typography>
                  <Typography variant="body2" color="#b0b8c1">Total: 12 | Active: 10 | Inactive: 2</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="flex-end">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search by name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ background: '#232a36', borderRadius: 1, input: { color: '#fff' }, mr: 2, width: 220 }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <Button variant="contained" color="primary" startIcon={<Add />}>Add</Button>
        </Grid>
      </Grid>
      <Paper sx={{ background: '#232a36', color: '#fff', p: 2, boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#b0b8c1' }}>Avatar</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Name</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Role</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Email</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell><Avatar>{row.name[0]}</Avatar></TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.role}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.email}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
} 