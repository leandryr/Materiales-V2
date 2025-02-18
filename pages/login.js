import { TextField, Button, Typography, Box, Paper, Divider } from '@mui/material';
import Image from 'next/image';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', // Bloquea scroll horizontal
        overflowY: 'auto', // Permite scroll si es necesario
        position: 'relative',
      }}
    >
      {/* Imagen de fondo correctamente ajustada */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: "url('/1880013.dffd2f63.png')", // Asegúrate de que la imagen esté en /public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          filter: 'brightness(0.75)', // Oscurece ligeramente para mejorar contraste con el formulario
        }}
      />

      {/* Contenedor del formulario */}
      <Paper
        elevation={10}
        sx={{
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          backdropFilter: 'blur(10px)', // Efecto de desenfoque para destacar el formulario
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparencia leve para mejor contraste
          borderRadius: 4,
          width: '90%',
          maxWidth: 420,
          boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
        }}
      >
        {/* Logo alineado correctamente */}
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
          <Image src="/logo_rv.038a0a70.svg" alt="Logo" width={140} height={90} priority />
        </Box>

        {/* Título */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Materiales
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Formulario */}
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField 
            label="Correo electrónico" 
            variant="outlined" 
            fullWidth 
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} 
          />
          <TextField 
            label="Contraseña" 
            type="password" 
            variant="outlined" 
            fullWidth 
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} 
          />
          
          {/* Mensaje de sesión */}
          <Typography variant="body2" color="textSecondary">
            Sesión Terminada
          </Typography>

          {/* Botón estilizado */}
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ 
              mt: 2, 
              py: 1.5, 
              fontSize: '1rem', 
              fontWeight: 'bold', 
              textTransform: 'none',
              borderRadius: 2,
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' } 
            }}
          >
            INICIAR SESIÓN
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
