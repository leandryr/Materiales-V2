import { Box, Container, Typography, TextField, Button, Grid, Paper, Divider, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import Sidebar from '../components/Sidebar';
import FilterSection from '../components/FilterSection'; // Importamos los filtros

export default function Home() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <Container maxWidth="xl" sx={{ flexGrow: 1, p: 4 }}>
        
        {/* Búsqueda (En la parte superior) */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" sx={{ px: 4, height: '56px' }}>
            BUSCAR
          </Button>
        </Paper>

        {/* Sección de Filtros (Apartada) */}
        <FilterSection />

        {/* Resultados de búsqueda y botón Descargar Excel */}
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            Resultados de búsqueda
          </Typography>
          <Typography variant="body2" color="textSecondary">
            1 - 0 de 0 RESULTADOS
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Tabla vacía con encabezados */}
          <Grid container spacing={1} sx={{ mb: 2 }}>
            {['REF. CLAIM', 'LOCALIDAD', 'TRANSPORTISTA', 'TIPO DE DAÑO', 'FECHA DE EVENTO', 'ESTATUS'].map((header, index) => (
              <Grid item xs={2} key={index}>
                <Typography variant="body2" fontWeight="bold">{header}</Typography>
              </Grid>
            ))}
          </Grid>

          {/* Botón Descargar Excel */}
          <Button 
            variant="contained" 
            color="success" 
            startIcon={<DownloadIcon />}
            sx={{ mt: 2, py: 1.5, fontSize: '1rem', fontWeight: 'bold', textTransform: 'none' }}
          >
            DESCARGAR EXCEL
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
