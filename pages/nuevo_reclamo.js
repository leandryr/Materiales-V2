import React, { useState } from 'react';
import {
  TextField, Button, Typography, Box, Paper
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Sidebar from '../components/Sidebar';

export default function NuevoReclamo() {
  const [email, setEmail] = useState('');
  const [ccEmail, setCcEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSend = () => {
    if (email && asunto && mensaje) {
      alert(`Reclamo enviado correctamente a ${email}`);
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        
        {/* Contenedor Principal */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Enviar Nuevo Reclamo
          </Typography>
          
          {/* Campos de Entrada */}
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', mb: 2 }}>
            <TextField 
              label="Correo Electrónico" 
              fullWidth 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
              label="CC Correo Electrónico" 
              fullWidth 
              value={ccEmail} 
              onChange={(e) => setCcEmail(e.target.value)} 
            />
            <TextField 
              label="Asunto" 
              fullWidth 
              value={asunto} 
              onChange={(e) => setAsunto(e.target.value)} 
            />
          </Box>

          {/* Mensaje */}
          <TextField
            label="Mensaje para el receptor"
            multiline
            rows={4}
            fullWidth
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Carga de Archivo */}
          <Typography variant="body1" sx={{ mb: 1 }}>
            Selecciona un archivo para adjuntar:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload">
              <Button component="span" variant="contained" startIcon={<CloudUploadIcon />}>
                Buscar Archivo
              </Button>
            </label>
          </Box>
          {file && <Typography sx={{ mt: 2 }}>Archivo seleccionado: {file.name}</Typography>}

          {/* Botón de Enviar */}
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }} 
            fullWidth
            onClick={handleSend}
          >
            Enviar
          </Button>

        </Paper>
      </Box>
    </Box>
  );
}
