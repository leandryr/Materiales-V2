import { useState } from 'react';
import { Box, Container, Paper, Typography, Grid, TextField, MenuItem, Button, IconButton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Sidebar from '../components/Sidebar';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Jonathan Molina', email: 'jon.ifs.mx@gmail.com', password: 'jon1415', tipo: 'Administrador', permisos: true },
    { id: 2, nombre: 'Miguel Guzman', email: 'mguzman@ramirezvalle.com.mx', password: 'Ramirez2021.', tipo: 'Administrador', permisos: true },
    { id: 3, nombre: 'Fernando Ramírez', email: 'luisfernando.ramirezcoreceda@gm.com', password: 'Toluca2023', tipo: 'Administrador', permisos: true },
    { id: 4, nombre: 'Leandry', email: 'leandryrp@gmail.com', password: '123456', tipo: 'Administrador', permisos: true },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', password: '', tipo: 'Administrador' });

  // Agregar usuario
  const handleAddUser = () => {
    if (nuevoUsuario.nombre && nuevoUsuario.email && nuevoUsuario.password) {
      setUsuarios([...usuarios, { ...nuevoUsuario, id: Date.now(), permisos: true }]);
      setNuevoUsuario({ nombre: '', email: '', password: '', tipo: 'Administrador' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  // Eliminar usuario
  const handleDeleteUser = (id) => {
    setUsuarios(usuarios.filter(user => user.id !== id));
  };

  // Editar usuario (futura implementación)
  const handleEditUser = (id) => {
    alert('Funcionalidad de edición aún no implementada.');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <Container maxWidth="xl" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Agregar usuarios
        </Typography>

        {/* Formulario de Nuevo Usuario */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Nombre de usuario"
                variant="outlined"
                value={nuevoUsuario.nombre}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Correo electrónico"
                type="email"
                variant="outlined"
                value={nuevoUsuario.email}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                variant="outlined"
                value={nuevoUsuario.password}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                select
                label="Tipo de admin"
                variant="outlined"
                value={nuevoUsuario.tipo}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, tipo: e.target.value })}
              >
                <MenuItem value="Administrador">Administrador</MenuItem>
                <MenuItem value="Usuario">Usuario</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Button fullWidth variant="contained" color="primary" onClick={handleAddUser}>
                GUARDAR
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Tabla de Usuarios */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Usuarios Ramirez Valle
        </Typography>
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>USUARIO</b></TableCell>
                  <TableCell><b>CORREO ELECTRÓNICO</b></TableCell>
                  <TableCell><b>CONTRASEÑA</b></TableCell>
                  <TableCell><b>TIPO DE ADMIN</b></TableCell>
                  <TableCell align="center"><b>EDITAR</b></TableCell>
                  <TableCell align="center"><b>ELIMINAR</b></TableCell>
                  <TableCell align="center"><b>PERMISOS</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usuarios.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.nombre}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    <TableCell>{user.tipo}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" onClick={() => handleEditUser(user.id)}>
                        <Edit />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton color="error" onClick={() => handleDeleteUser(user.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <Switch checked={user.permisos} onChange={() => {
                        setUsuarios(usuarios.map(u => u.id === user.id ? { ...u, permisos: !u.permisos } : u));
                      }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
}
