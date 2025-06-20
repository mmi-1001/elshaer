import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { Add, Folder } from '@mui/icons-material';

const initialRows = [
  {
    name: 'HR System',
    manager: 'Acme Corp',
    startDate: '2025-05-01',
    endDate: '2025-06-30',
    deadline: '2025-07-01',
    members: 8
  },
  {
    name: 'Payroll App',
    manager: 'Beta LLC',
    startDate: '2025-03-10',
    endDate: '2025-06-01',
    deadline: '2025-06-10',
    members: 5
  },
  {
    name: 'Recruitment Portal',
    manager: 'Gamma Solutions',
    startDate: '2025-06-01',
    endDate: '2025-08-10',
    deadline: '2025-08-15',
    members: 6
  },
  {
    name: 'Inventory Tracker',
    manager: 'Delta Inc.',
    startDate: '2025-04-15',
    endDate: '2025-07-20',
    deadline: '2025-07-25',
    members: 4
  },
  {
    name: 'CRM Suite',
    manager: 'Omega Group',
    startDate: '2025-01-20',
    endDate: '2025-05-15',
    deadline: '2025-05-20',
    members: 10
  }
];

export default function MyProjects() {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(initialRows);

  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', background: '#181c24', p: 0 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ color: '#fff', mb: 3, fontWeight: 700 }}>My Projects</Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="flex-end">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by project name"
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ background: '#232a36', borderRadius: 1, input: { color: '#fff' }, mr: 2, width: 220 }}
              InputProps={{ style: { color: '#fff' } }}
            />
          </Grid>
        </Grid>
        <Paper sx={{ background: '#232a36', color: '#fff', p: 2, boxShadow: 2 }}>
          <Table className="responsive-projects-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#b0b8c1' }}>Project Title</TableCell>
                <TableCell sx={{ color: '#b0b8c1' }}>Client Name</TableCell>
                <TableCell sx={{ color: '#b0b8c1' }}>Start Date</TableCell>
                <TableCell sx={{ color: '#b0b8c1' }}>End Date</TableCell>
                <TableCell sx={{ color: '#b0b8c1' }}>Deadline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ color: '#fff' }} data-label="Project Title">{row.name}</TableCell>
                  <TableCell sx={{ color: '#fff' }} data-label="Client Name">{row.manager || '-'}</TableCell>
                  <TableCell sx={{ color: '#fff' }} data-label="Start Date">{row.startDate || '-'}</TableCell>
                  <TableCell sx={{ color: '#fff' }} data-label="End Date">{row.endDate || '-'}</TableCell>
                  <TableCell sx={{ color: '#fff' }} data-label="Deadline">{row.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
} 