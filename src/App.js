import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Container,
  ThemeProvider,
  createTheme,
  Avatar,
  Badge,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Modal,
  TextField,
  Button as MuiButton
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AttachMoney as MoneyIcon,
  ShoppingCart as CartIcon,
  Visibility as ViewsIcon,
  Star as StarIcon,
  Add as AddIcon
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import MyProjects from './components/MyProjects';
import Profile from './components/Profile';
import MyLeaves from './components/MyLeaves';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './tasks-table-responsive.css';

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
});

const drawerWidth = 240;

// Sample data for charts
const salesData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Dashboard page component
function DashboardPage() {
  return (
    <div className="dashboard-container">
      <section className="welcome-section">
        <h1 className="welcome-title">Welcome to the Dashboard</h1>
        <p className="welcome-subtitle">Here is an overview of your company's performance and recent activity.</p>
      </section>
      <div className="quick-actions">
        <a href="/projects" className="quick-action-btn">
          <AssessmentIcon className="quick-action-icon" />
          Projects
        </a>
        <a href="/tasks" className="quick-action-btn">
          <CartIcon className="quick-action-icon" />
          Tasks
        </a>
        <a href="/profile" className="quick-action-btn">
          <AccountCircleIcon className="quick-action-icon" />
          Profile
        </a>
        <a href="/leaves" className="quick-action-btn">
          <PeopleIcon className="quick-action-icon" />
          My Leaves
        </a>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><MoneyIcon /></div>
          <div className="stat-name">Total Sales</div>
          <div className="stat-value">$24,000</div>
          <div className="stat-change increase"><TrendingUpIcon />+15%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><CartIcon /></div>
          <div className="stat-name">Total Orders</div>
          <div className="stat-value">1,234</div>
          <div className="stat-change increase"><TrendingUpIcon />+8%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ViewsIcon /></div>
          <div className="stat-name">Page Views</div>
          <div className="stat-value">45,678</div>
          <div className="stat-change decrease"><TrendingDownIcon />-3%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><StarIcon /></div>
          <div className="stat-name">Rating</div>
          <div className="stat-value">4.8</div>
          <div className="stat-change neutral"><StarIcon />Excellent</div>
        </div>
      </div>
      <div className="activities-section">
        <div className="activities-header">
          <h2 className="activities-title">Recent Orders</h2>
        </div>
        <ul className="activities-list">
          {[{ id: '#1234', customer: 'John Doe', product: 'iPhone 13', amount: '$999', status: 'Completed', progress: 100 },
            { id: '#1235', customer: 'Jane Smith', product: 'MacBook Pro', amount: '$1,299', status: 'Processing', progress: 75 },
            { id: '#1236', customer: 'Bob Johnson', product: 'AirPods Pro', amount: '$249', status: 'Pending', progress: 25 },
            { id: '#1237', customer: 'Alice Brown', product: 'iPad Air', amount: '$599', status: 'Shipped', progress: 90 },
          ].map(row => (
            <li className="activity-item" key={row.id}>
              <div className="activity-content">
                <div className="activity-icon"><CartIcon /></div>
                <div className="activity-details">
                  <div className="activity-message">
                    <span className="activity-user">{row.customer}</span> ordered <b>{row.product}</b> for <b>{row.amount}</b>.
                  </div>
                  <div className="activity-meta">
                    <span className="activity-time">Status: {row.status}</span>
                    <span>Progress: {row.progress}%</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Other page components
function EmployeesPage() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Employees Management
      </Typography>
      <Card sx={{ backgroundColor: '#1a1a1a' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Employee List
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { name: 'John Doe', position: 'Software Engineer', department: 'Engineering', email: 'john@company.com', status: 'Active' },
                  { name: 'Jane Smith', position: 'Product Manager', department: 'Product', email: 'jane@company.com', status: 'Active' },
                  { name: 'Bob Johnson', position: 'Designer', department: 'Design', email: 'bob@company.com', status: 'Inactive' },
                ].map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={row.status === 'Active' ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

function ReportsPage() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reports & Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#1a1a1a' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Revenue
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#1a1a1a' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profit Analysis
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Area type="monotone" dataKey="profit" stroke="#dc004e" fill="#dc004e" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

function SettingsPage() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Card sx={{ backgroundColor: '#1a1a1a' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Application Settings
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Configure your dashboard settings, notifications, and preferences here.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

function TasksPage() {
  const [tasks, setTasks] = useState([
    { number: 'T-001', project: 'HR System', client: 'Acme Corp', date: '2025-06-01' },
    { number: 'T-002', project: 'Payroll App', client: 'Beta LLC', date: '2025-06-05' },
    { number: 'T-003', project: 'Recruitment Portal', client: 'Gamma Solutions', date: '2025-06-10' },
  ]);
  const [selected, setSelected] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [newTask, setNewTask] = useState({ number: '', project: '', client: '', date: '' });

  const handleCheckbox = (number) => {
    setSelected(selected =>
      selected.includes(number)
        ? selected.filter(n => n !== number)
        : [...selected, number]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(tasks.map(t => t.number));
    } else {
      setSelected([]);
    }
  };

  const handleEdit = (number) => {
    const task = tasks.find(t => t.number === number);
    setEditTask({ ...task });
    setEditOpen(true);
  };

  const handleEditChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setTasks(tasks => tasks.map(t => t.number === editTask.number ? editTask : t));
    setEditOpen(false);
    setEditTask(null);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setEditTask(null);
  };

  const handleDelete = (number) => {
    setTasks(tasks => tasks.filter(t => t.number !== number));
    setSelected(selected => selected.filter(n => n !== number));
  };

  // Search filter
  const filteredTasks = tasks.filter(row =>
    row.number.toLowerCase().includes(search.toLowerCase()) ||
    row.project.toLowerCase().includes(search.toLowerCase()) ||
    row.client.toLowerCase().includes(search.toLowerCase())
  );

  // Add Task
  const handleAddOpen = () => {
    setNewTask({ number: '', project: '', client: '', date: '' });
    setAddOpen(true);
  };
  const handleAddChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleAddSave = () => {
    if (!newTask.number || !newTask.project || !newTask.client || !newTask.date) return;
    setTasks(tasks => [...tasks, newTask]);
    setAddOpen(false);
  };
  const handleAddClose = () => {
    setAddOpen(false);
  };

  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 3, fontWeight: 700 }}>Tasks</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ background: '#232a36', borderRadius: 1, input: { color: '#fff' }, width: 260 }}
          InputProps={{ style: { color: '#fff' } }}
        />
        <IconButton onClick={handleAddOpen} sx={{ background: '#667eea', color: '#fff', '&:hover': { background: '#5a67d8' } }}>
          <AddIcon />
        </IconButton>
      </Box>
      <Paper sx={{ background: '#232a36', color: '#fff', p: 2, boxShadow: 2 }}>
        <Table className="responsive-tasks-table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <input type="checkbox" checked={selected.length === filteredTasks.length && filteredTasks.length > 0} onChange={handleSelectAll} />
              </TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Task Number</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Project</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Client</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Task Date</TableCell>
              <TableCell sx={{ color: '#b0b8c1' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((row) => (
              <TableRow key={row.number}>
                <TableCell padding="checkbox" data-label="Select">
                  <input type="checkbox" checked={selected.includes(row.number)} onChange={() => handleCheckbox(row.number)} />
                </TableCell>
                <TableCell sx={{ color: '#fff' }} data-label="Task Number">{row.number}</TableCell>
                <TableCell sx={{ color: '#fff' }} data-label="Project">{row.project}</TableCell>
                <TableCell sx={{ color: '#fff' }} data-label="Client">{row.client}</TableCell>
                <TableCell sx={{ color: '#fff' }} data-label="Task Date">{row.date}</TableCell>
                <TableCell sx={{ color: '#fff' }} data-label="Actions">
                  <button style={{background:'#667eea',color:'#fff',border:'none',borderRadius:4,padding:'4px 12px',marginRight:8,cursor:'pointer'}} onClick={() => handleEdit(row.number)}>Edit</button>
                  <button style={{background:'#ef4444',color:'#fff',border:'none',borderRadius:4,padding:'4px 12px',cursor:'pointer'}} onClick={() => handleDelete(row.number)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Modal open={editOpen} onClose={handleEditClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#232a36',
          color: '#fff',
          p: 4,
          borderRadius: 2,
          minWidth: 320,
          boxShadow: 24
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Edit Task</Typography>
          <TextField
            label="Task Number"
            name="number"
            value={editTask?.number || ''}
            onChange={handleEditChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
            disabled
          />
          <TextField
            label="Project"
            name="project"
            value={editTask?.project || ''}
            onChange={handleEditChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Client"
            name="client"
            value={editTask?.client || ''}
            onChange={handleEditChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Task Date"
            name="date"
            type="date"
            value={editTask?.date || ''}
            onChange={handleEditChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputPropsProps={{ shrink: true }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <MuiButton variant="contained" color="primary" onClick={handleEditSave}>Save</MuiButton>
            <MuiButton variant="outlined" color="secondary" onClick={handleEditClose}>Cancel</MuiButton>
          </Box>
        </Box>
      </Modal>
      <Modal open={addOpen} onClose={handleAddClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#232a36',
          color: '#fff',
          p: 4,
          borderRadius: 2,
          minWidth: 320,
          boxShadow: 24
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Add Task</Typography>
          <TextField
            label="Task Number"
            name="number"
            value={newTask.number}
            onChange={handleAddChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Project"
            name="project"
            value={newTask.project}
            onChange={handleAddChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Client"
            name="client"
            value={newTask.client}
            onChange={handleAddChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Task Date"
            name="date"
            type="date"
            value={newTask.date}
            onChange={handleAddChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputPropsProps={{ shrink: true }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <MuiButton variant="contained" color="primary" onClick={handleAddSave}>Add</MuiButton>
            <MuiButton variant="outlined" color="secondary" onClick={handleAddClose}>Cancel</MuiButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

// Main App component
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Box sx={{ display: 'flex', background: 'linear-gradient(180deg, #1e293b 0%, #334155 100%)', minHeight: '100vh' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/projects" element={<MyProjects />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/leaves" element={<MyLeaves />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
