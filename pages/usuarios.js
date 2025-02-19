import { useState, useEffect } from "react";
import { Box, Container, Paper, Typography, Grid, TextField, MenuItem, Button, IconButton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Sidebar from "../components/Sidebar";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: "", email: "", password: "", tipo: "Administrador" });

  const fetchUsuarios = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirige al login si no está autenticado
    }

    try {
      const res = await fetch("/api/auth/get-users", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      setUsuarios(data.users); // Actualiza el estado con los usuarios de la base de datos
    } catch (error) {
      alert("Error al cargar los usuarios.");
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleCreateUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirige al login si no está autenticado
    }

    if (!nuevoUsuario.nombre || !nuevoUsuario.email || !nuevoUsuario.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ name: nuevoUsuario.nombre, email: nuevoUsuario.email, password: nuevoUsuario.password, tipo: nuevoUsuario.tipo })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Usuario creado con éxito.");
        fetchUsuarios(); // Vuelve a cargar la lista de usuarios
        setNuevoUsuario({ nombre: "", email: "", password: "", tipo: "Administrador" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error en el servidor.");
    }
  };

  const handleDeleteUser = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirige al login si no está autenticado
    }

    try {
      const res = await fetch(`/api/auth/delete-user/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${token}` } });
      const data = await res.json();
      if (res.ok) {
        alert("Usuario eliminado con éxito.");
        fetchUsuarios(); // Vuelve a cargar la lista de usuarios
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error al eliminar usuario.");
    }
  };

  const handleTogglePermissions = async (id, permisos, permiso) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirige al login si no está autenticado
    }

    const updatedPermisos = { ...permisos, [permiso]: !permisos[permiso] };

    try {
      const res = await fetch(`/api/auth/toggle-permissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ permisos: updatedPermisos }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`${permiso} actualizado con éxito.`);
        fetchUsuarios(); // Vuelve a cargar la lista de usuarios
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al cambiar permisos:", error);
      alert("Error al cambiar permisos.");
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Container maxWidth="xl" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Agregar usuarios</Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Nombre de usuario" variant="outlined" value={nuevoUsuario.nombre} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Correo electrónico" type="email" variant="outlined" value={nuevoUsuario.email} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Contraseña" type="password" variant="outlined" value={nuevoUsuario.password} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, password: e.target.value })} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField fullWidth select label="Tipo de admin" variant="outlined" value={nuevoUsuario.tipo} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, tipo: e.target.value })}>
                <MenuItem value="Administrador">Administrador</MenuItem>
                <MenuItem value="Programador">Programador</MenuItem>
                <MenuItem value="Capturador">Capturador</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={13} sm={1}>
              <Button fullWidth variant="contained" color="primary" onClick={handleCreateUser}>AGREGAR USUARIO</Button>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Usuarios Registrados</Typography>
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>USUARIO</b></TableCell>
                  <TableCell><b>CORREO ELECTRÓNICO</b></TableCell>
                  <TableCell><b>TIPO DE ADMIN</b></TableCell>
                  <TableCell align="center"><b>ACTIVAR/DESACTIVAR</b></TableCell>
                  <TableCell align="center"><b>ELIMINAR</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usuarios.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.tipo}</TableCell>
                    <TableCell align="center">
                      <Switch checked={user.permisos?.verUsuarios || false} onChange={() => handleTogglePermissions(user._id, user.permisos || {}, 'verUsuarios')} />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton color="error" onClick={() => handleDeleteUser(user._id)}>
                        <Delete />
                      </IconButton>
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

export default Usuarios;
