import React, { useState } from 'react';
import {
  TextField, Select, MenuItem, FormControl, InputLabel,
  Button, Typography, Box, Tabs, Tab, Paper
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Sidebar from '../components/Sidebar';

export default function NuevoRegistro() {
  const [tabValue, setTabValue] = useState(0);
  const [file, setFile] = useState(null);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Archivo ${file.name} cargado correctamente.`);
    } else {
      alert('Selecciona un archivo para cargar.');
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        
        {/* Barra de navegación con pestañas */}
        <Tabs value={tabValue} onChange={handleChangeTab} sx={{ backgroundColor: 'white', borderRadius: 1, mb: 3 }}>
          <Tab label="Nuevo Registro" />
          <Tab label="Cargar Excel" />
        </Tabs>

        {/* Pestaña: Nuevo Registro */}
        {tabValue === 0 && (
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Nuevo Registro
            </Typography>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              
              {/* Campos de Formulario */}
              <FormControl fullWidth>
                <InputLabel>Localidad</InputLabel>
                <Select>
                  <MenuItem value="Localidad 1">Localidad 1</MenuItem>
                  <MenuItem value="Localidad 2">Localidad 2</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Planta</InputLabel>
                <Select>
                  <MenuItem value="Planta 1">Planta 1</MenuItem>
                  <MenuItem value="Planta 2">Planta 2</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Referencia" fullWidth />
              <TextField label="Monto reclamado USD" fullWidth />
              <TextField label="Monto reclamado MXN" fullWidth />
              <TextField label="Monto aceptado" fullWidth />
              <TextField label="Monto recuperado" fullWidth />

              <FormControl fullWidth>
                <InputLabel>Estatus</InputLabel>
                <Select>
                  <MenuItem value="En Proceso">En Proceso</MenuItem>
                  <MenuItem value="Aceptado">Aceptado</MenuItem>
                  <MenuItem value="Rechazado">Rechazado</MenuItem>
                  <MenuItem value="Pagado">Pagado</MenuItem>
                  <MenuItem value="Cancelado">Cancelado</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Comentarios" multiline rows={3} fullWidth />
              <TextField label="Observaciones" multiline rows={3} fullWidth />
            </Box>

            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Guardar
            </Button>
          </Paper>
        )}

        {/* Pestaña: Cargar Excel */}
        {tabValue === 1 && (
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Cargar Excel
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
              <label htmlFor="file-upload">
                <Button component="span" variant="contained" startIcon={<CloudUploadIcon />}>
                  Buscar Archivo
                </Button>
              </label>
              <Button variant="contained" color="success" onClick={handleUpload}>
                Cargar Excel
              </Button>
            </Box>
            {file && <Typography sx={{ mt: 2 }}>Archivo seleccionado: {file.name}</Typography>}
          </Paper>
        )}
      </Box>
    </Box>
  );
}
