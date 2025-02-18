import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import HistoryIcon from '@mui/icons-material/History';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DescriptionIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: '#1e3a56',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        minHeight: '100vh',
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Image src="/logo_ramirez.94c806b8.svg" alt="Logo" width={220} height={80} priority />
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          RAMIREZ VALLE
        </Typography>
        <Typography variant="body2">Administrador General</Typography>
      </Box>

      {/* Menú */}
      <List>
        {[
          { text: 'Historial de búsqueda', icon: <HistoryIcon /> },
          { text: 'Nuevo registro', icon: <AddBoxIcon /> },
          { text: 'Usuarios', icon: <PeopleIcon /> },
          { text: 'Reportes', icon: <AssessmentIcon /> },
          { text: 'Nuevo Reclamo', icon: <DescriptionIcon /> },
          { text: 'Cerrar Sesión', icon: <ExitToAppIcon /> },
        ].map((item, index) => (
          <ListItem button key={index} sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
