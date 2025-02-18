import { useState } from 'react';
import { 
  Box, Typography, Button, TextField, Select, MenuItem, 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, FormControl, InputLabel, Collapse, IconButton, Tabs, Tab
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Sidebar from '../components/Sidebar';

export default function Reporte() {
  const [reportes, setReportes] = useState([]);
  const [formulario, setFormulario] = useState({
    referenciaClaim: '',
    localidad: '',
    codigoDano: '',
    planta: '',
    numeroParte: '',
    cantidadPiezas: '',
    fechaNotificacion: '',
    valorPerdidaSinFlete: '',
    valorPerdidaConFlete: '',
    areaResponsables: '',
    estatus: '',
    documentacionFaltante: ''
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tabSeleccionada, setTabSeleccionada] = useState(0);

  const handleChange = (event) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        {/* ✅ ENCABEZADO */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: 1, borderColor: 'grey.300' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo_ramirez.94c806b8.svg" alt="Logo" width={150} />
          </Box>

          {/* ✅ TABS PARA NAVEGACIÓN */}
          <Tabs 
            value={tabSeleccionada} 
            onChange={(e, newValue) => setTabSeleccionada(newValue)}
            textColor="primary"
            indicatorColor="primary"
            sx={{ minHeight: 40 }}
          >
            <Tab label="EN DOCUMENTACIÓN" onClick={() => window.location.href = '/reportes'} />
            <Tab label="REPORTE SEMANAL" onClick={() => window.location.href = '/reporte_semanal'} />
          </Tabs>
        </Box>

        <Box sx={{ p: 3 }}>
          {/* ✅ Encabezado del Formulario con botón desplegable */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" fontWeight="bold">
              Formulario
            </Typography>
            <IconButton onClick={() => setMostrarFormulario(!mostrarFormulario)}>
              {mostrarFormulario ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>

          {/* ✅ Formulario desplegable */}
          <Collapse in={mostrarFormulario} timeout="auto" unmountOnExit>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(3, 1fr)', mt: 2 }}>
              <TextField name="referenciaClaim" label="Referencía Claim" value={formulario.referenciaClaim} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="localidad" label="Localidad" value={formulario.localidad} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="codigoDano" label="Código de daño" value={formulario.codigoDano} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="planta" label="Planta" value={formulario.planta} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="numeroParte" label="Número de parte" value={formulario.numeroParte} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="cantidadPiezas" label="Cantidad de piezas" value={formulario.cantidadPiezas} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="fechaNotificacion" label="Fecha de notificación RV" type="date" InputLabelProps={{ shrink: true }} value={formulario.fechaNotificacion} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="valorPerdidaSinFlete" label="Valor de pérdida sin flete" value={formulario.valorPerdidaSinFlete} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="valorPerdidaConFlete" label="Valor de pérdida con flete" value={formulario.valorPerdidaConFlete} onChange={handleChange} variant="outlined" size="small" />
              <TextField name="areaResponsables" label="Área y Responsables" value={formulario.areaResponsables} onChange={handleChange} variant="outlined" size="small" />
              
              {/* Select de Estatus */}
              <FormControl variant="outlined" size="small">
                <InputLabel>Estatus</InputLabel>
                <Select name="estatus" value={formulario.estatus} onChange={handleChange} label="Estatus">
                  <MenuItem value="En Proceso">En Proceso</MenuItem>
                  <MenuItem value="Aceptado">Aceptado</MenuItem>
                  <MenuItem value="Rechazado">Rechazado</MenuItem>
                </Select>
              </FormControl>

              <TextField name="documentacionFaltante" label="Documentación faltante" value={formulario.documentacionFaltante} onChange={handleChange} variant="outlined" size="small" />
            </Box>

            {/* ✅ Botón de Guardar */}
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">Guardar</Button>
            </Box>
          </Collapse>

          {/* ✅ Sección "En Documentación" */}
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            En documentación
          </Typography>
          <Typography color="error">0 en Documentación</Typography>

          {/* ✅ Tabla de datos */}
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Ref. Claim</strong></TableCell>
                  <TableCell><strong>Localidad</strong></TableCell>
                  <TableCell><strong>Código de Daño</strong></TableCell>
                  <TableCell><strong>Fecha de Notificación RV</strong></TableCell>
                  <TableCell><strong>Documentación Faltante</strong></TableCell>
                  <TableCell><strong>Estatus</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No hay registros</TableCell>
                  </TableRow>
                ) : (
                  reportes.map((reporte, index) => (
                    <TableRow key={index}>
                      <TableCell>{reporte.claim}</TableCell>
                      <TableCell>{reporte.localidad}</TableCell>
                      <TableCell>{reporte.codigoDano}</TableCell>
                      <TableCell>{reporte.fechaNotificacion}</TableCell>
                      <TableCell>{reporte.documentacionFaltante}</TableCell>
                      <TableCell>{reporte.estatus}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ✅ Botón de descarga */}
          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Button variant="contained" color="success">Descargar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
