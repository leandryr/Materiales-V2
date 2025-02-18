import { useRouter } from 'next/router';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Sidebar() {
  const router = useRouter();

  return (
    <Box sx={{ width: 280, bgcolor: '#1E2A38', color: 'white', minHeight: '100vh', p: 2 }}>
      
      {/* ✅ Contenedor del Logo */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <img src="/logo_ramirez.94c806b8.svg" alt="Logo" width={240} />
      </Box>

      {/* Usuario */}
      <Box sx={{ mb: 2, p: 2, bgcolor: '#1976D2', borderRadius: 1 }}>
        <Typography variant="body1" fontWeight="bold">Jonathan Molina</Typography>
        <Typography variant="body2">Administrador General</Typography>
      </Box>

      {/* Menú */}
      <List>
        {/* ✅ Botón de "Inicio" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon><HomeIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>

        {/* ✅ Botón de "Historial de búsqueda" (lleva a /nuevo_registro) */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon><SearchIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Historial de búsqueda" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: 'gray', my: 1 }} />

        {/* ✅ Botón de "Nuevo registro" (también lleva a /nuevo_registro) */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/nuevo_registro')}>
            <ListItemIcon><AddIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Nuevo registro" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton onClick={() => router.push('/usuarios')}>
            <ListItemIcon><PeopleIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/reportes')}>
            <ListItemIcon><BarChartIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton onClick={() => router.push('/nuevo_reclamo')}>
            <ListItemIcon><NoteAddIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Nuevo Reclamo" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: 'gray', my: 1 }} />

        {/* Cerrar Sesión */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><ExitToAppIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
