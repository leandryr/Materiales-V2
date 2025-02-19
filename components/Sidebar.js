import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'; // Importamos jsonwebtoken para decodificar el token
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState(null); // Creamos un estado para almacenar los datos del usuario

  // useEffect para obtener y decodificar el token
  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtenemos el token desde localStorage
    
    if (token) {
      const decodedToken = jwt.decode(token); // Decodificamos el token JWT
      setUser(decodedToken); // Almacenamos los datos del usuario en el estado
    }
  }, []); // Este useEffect se ejecuta solo una vez al cargar el componente

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminamos el token de localStorage
    router.push("/login"); // Redirigimos al login
  };

  return (
    <Box sx={{ width: 280, bgcolor: '#1E2A38', color: 'white', minHeight: '100vh', p: 2 }}>
      {/* Contenedor del Logo */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <img src="/logo_ramirez.94c806b8.svg" alt="Logo" width={240} />
      </Box>

      {/* Información del Usuario */}
      <Box sx={{ mb: 3, p: 2, bgcolor: '#1976D2', borderRadius: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Avatar del usuario con la inicial */}
        <Avatar sx={{ bgcolor: '#ffffff', color: '#1976D2' }}>
          {user && user.name ? user.name.charAt(0) : 'U'} {/* Mostramos la inicial del nombre, o 'U' si no está disponible */}
        </Avatar>

        {/* Nombre y Correo del Usuario */}
        <Box>
          <Typography variant="body1" fontWeight="bold">{user ? user.name : 'Cargando...'}</Typography>
          <Typography variant="body2">{user ? user.email : 'Cargando...'}</Typography>
        </Box>
      </Box>

      {/* Menú */}
      <List>
        {/* Botón de "Inicio" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon><HomeIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>

        {/* Botón de "Historial de búsqueda" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon><SearchIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Historial de búsqueda" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: 'gray', my: 1 }} />

        {/* Botón de "Nuevo registro" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/nuevo_registro')}>
            <ListItemIcon><AddIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Nuevo registro" />
          </ListItemButton>
        </ListItem>

        {/* Botón de "Usuarios" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/usuarios')}>
            <ListItemIcon><PeopleIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItemButton>
        </ListItem>

        {/* Botón de "Reportes" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/reportes')}>
            <ListItemIcon><BarChartIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </ListItem>

        {/* Botón de "Nuevo Reclamo" */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/nuevo_reclamo')}>
            <ListItemIcon><NoteAddIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Nuevo Reclamo" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: 'gray', my: 1 }} />

        {/* Cerrar Sesión */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
