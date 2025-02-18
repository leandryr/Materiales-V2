import { useState } from 'react';
import { 
  Box, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Select, MenuItem, 
  FormControl, InputLabel, Tabs, Tab, TextField
} from '@mui/material';
import Sidebar from '../components/Sidebar';

export default function ReporteSemanal() {
  const [tabSeleccionada, setTabSeleccionada] = useState(1);
  const [estatus, setEstatus] = useState('Sin Filtro');
  const [reporteTipo, setReporteTipo] = useState('Sin Filtro');
  
  // Datos de ejemplo (reemplazar con datos de API)
  const reportes = [
    { claim: '2R-2023-67', localidad: 'Silao', transportista: 'APL', tipoDano: 'Discrepancia', fechaEmision: '2023-07-30', estatus: 'En Proceso' },
    { claim: '2R-2023-054', localidad: 'Silao', transportista: 'Penske LLP', tipoDano: 'Daños', fechaEmision: '2023-06-30', estatus: 'Aceptado' },
    { claim: '2R-2023-066', localidad: 'Silao', transportista: 'Penske LLP', tipoDano: 'Daños', fechaEmision: '2023-06-30', estatus: 'En Proceso' },
    { claim: '2E-2023-024', localidad: 'Toluca', transportista: 'DSV', tipoDano: 'Discrepancia', fechaEmision: '2023-06-29', estatus: 'En Proceso' }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        {/* ✅ ENCABEZADO CON TABS */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: 1, borderColor: 'grey.300' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo_ramirez.94c806b8.svg" alt="Logo" width={150} />
          </Box>

          <Tabs 
            value={tabSeleccionada} 
            onChange={(e, newValue) => setTabSeleccionada(newValue)}
            textColor="primary"
            indicatorColor="primary"
            sx={{ minHeight: 40 }}
          >
            <Tab label="EN DOCUMENTACIÓN" onClick={() => window.location.href = '/reportes'} />
            <Tab label="REPORTE SEMANAL" />
          </Tabs>
        </Box>

        {/* ✅ FILTROS */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
          {/* Filtro de Estatus */}
          <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Estatus</InputLabel>
            <Select value={estatus} onChange={(e) => setEstatus(e.target.value)} label="Estatus">
              <MenuItem value="Sin Filtro">Sin Filtro</MenuItem>
              <MenuItem value="En Proceso">En Proceso</MenuItem>
              <MenuItem value="Aceptado">Aceptado</MenuItem>
              <MenuItem value="Rechazado">Rechazado</MenuItem>
            </Select>
          </FormControl>

          {/* Filtro de Tipo de Reporte */}
          <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Reporte</InputLabel>
            <Select value={reporteTipo} onChange={(e) => setReporteTipo(e.target.value)} label="Reporte">
              <MenuItem value="Sin Filtro">Sin Filtro</MenuItem>
              <MenuItem value="Mayores a 45 días">Mayores a 45 días</MenuItem>
              <MenuItem value="Menores a 45 días">Menores a 45 días</MenuItem>
            </Select>
          </FormControl>

          {/* Botón de búsqueda */}
          <Button variant="contained" color="primary">Buscar</Button>
        </Box>

        {/* ✅ ENCABEZADO DEL REPORTE */}
        <Box sx={{ px: 3 }}>
          <Typography variant="h5" fontWeight="bold">Febrero 14 - Febrero 20</Typography>
          <Typography color="error" sx={{ mb: 2 }}>2025</Typography>
          <Typography color="error" sx={{ mb: 1 }}>Mayores a 45 días</Typography>
        </Box>

        {/* ✅ TABLA DE REPORTE SEMANAL */}
        <TableContainer component={Paper} sx={{ mt: 2, mx: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.100' }}>
                <TableCell><strong>Ref. Claim</strong></TableCell>
                <TableCell><strong>Localidad</strong></TableCell>
                <TableCell><strong>Transportista</strong></TableCell>
                <TableCell><strong>Tipo de Daño</strong></TableCell>
                <TableCell><strong>Fecha de Emisión</strong></TableCell>
                <TableCell><strong>Estatus</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportes.map((reporte, index) => (
                <TableRow key={index} hover>
                  <TableCell>{reporte.claim}</TableCell>
                  <TableCell>{reporte.localidad}</TableCell>
                  <TableCell>{reporte.transportista}</TableCell>
                  <TableCell>{reporte.tipoDano}</TableCell>
                  <TableCell>{reporte.fechaEmision}</TableCell>
                  <TableCell>{reporte.estatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ✅ BOTÓN DE DESCARGA */}
        <Box sx={{ textAlign: 'right', mt: 2, mr: 3 }}>
          <Button variant="contained" color="success">Descargar Excel</Button>
        </Box>
      </Box>
    </Box>
  );
}
