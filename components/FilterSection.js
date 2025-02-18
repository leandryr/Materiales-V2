import { useState } from 'react';
import { Box, Paper, Typography, Grid, TextField, MenuItem, IconButton, Divider, InputAdornment } from '@mui/material';
import { ExpandLess, ExpandMore, CalendarToday } from '@mui/icons-material';

export default function FilterSection() {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight="bold">
          Filtros de búsqueda
        </Typography>
        <IconButton onClick={() => setOpenFilters(!openFilters)}>
          {openFilters ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      {openFilters && (
        <Grid container spacing={2}>
          {/* Primera Fila */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Localidad" variant="outlined">
              <MenuItem value="CDMX">CDMX</MenuItem>
              <MenuItem value="Guadalajara">Guadalajara</MenuItem>
              <MenuItem value="Monterrey">Monterrey</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Planta" variant="outlined">
              <MenuItem value="Planta 1">Planta 1</MenuItem>
              <MenuItem value="Planta 2">Planta 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Tipo de evento" variant="outlined">
              <MenuItem value="Accidente">Accidente</MenuItem>
              <MenuItem value="Retraso">Retraso</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Descripción del evento" variant="outlined" />
          </Grid>

          {/* Segunda Fila */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField 
              fullWidth 
              label="Fecha de evento" 
              type="date" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField 
              fullWidth 
              label="Fecha de emisión" 
              type="date" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField 
              fullWidth 
              label="Fecha de respuesta" 
              type="date" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField 
              fullWidth 
              label="Fecha de pago" 
              type="date" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Tercera Fila */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Transportista" variant="outlined">
              <MenuItem value="DHL">DHL</MenuItem>
              <MenuItem value="FedEx">FedEx</MenuItem>
              <MenuItem value="UPS">UPS</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Estatus" variant="outlined">
              <MenuItem value="Pendiente">Pendiente</MenuItem>
              <MenuItem value="Aprobado">Aprobado</MenuItem>
              <MenuItem value="Rechazado">Rechazado</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Escalado" variant="outlined">
              <MenuItem value="Sí">Sí</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select label="Ruta" variant="outlined">
              <MenuItem value="Ruta 1">Ruta 1</MenuItem>
              <MenuItem value="Ruta 2">Ruta 2</MenuItem>
            </TextField>
          </Grid>

          {/* Cuarta Fila */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Año de evento" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Año de Asignación" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Año de Documentación" variant="outlined" />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}
