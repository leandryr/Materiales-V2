import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const columns = [
  { field: 'ref', headerName: 'REF. CLAIM', flex: 1 },
  { field: 'localidad', headerName: 'LOCALIDAD', flex: 1 },
  { field: 'transportista', headerName: 'TRANSPORTISTA', flex: 1 },
  { field: 'tipoDano', headerName: 'TIPO DE DAÑO', flex: 1 },
  { field: 'fechaEvento', headerName: 'FECHA DE EVENTO', flex: 1 },
  { field: 'estatus', headerName: 'ESTATUS', flex: 1 },
];

const rows = [
  { id: 1, ref: '12412324', localidad: 'Ramos', transportista: '113070.8157', tipoDano: '2E-2019-023', fechaEvento: '16-02-2025', estatus: 'En Proceso' },
  { id: 2, ref: '2E-2023-024', localidad: 'Toluca', transportista: 'DSV', tipoDano: 'Discrepancia', fechaEvento: '16-06-2023', estatus: 'En Proceso' },
  { id: 3, ref: '2R-2023-066', localidad: 'Silao', transportista: 'Penske LLP', tipoDano: 'Daños', fechaEvento: '07-06-2023', estatus: 'En Proceso' },
  { id: 4, ref: '2R-2023-67', localidad: 'Silao', transportista: 'APL', tipoDano: 'Discrepancia', fechaEvento: '07-06-2023', estatus: 'En Proceso' },
  { id: 5, ref: '2L-2023-061', localidad: 'Ramos', transportista: 'Penske LLP', tipoDano: 'Daños', fechaEvento: '31-05-2023', estatus: 'En Proceso' },
];

export default function ResultsTable() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold">
        Resultados de búsqueda
      </Typography>
      <Typography variant="body2" color="textSecondary">
        1 - 25 de 1529 RESULTADOS
      </Typography>

      <Box sx={{ height: 400, my: 2 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </Box>

      <Button variant="contained" color="success" startIcon={<DownloadIcon />} sx={{ mt: 2 }}>
        DESCARGAR EXCEL
      </Button>
    </Paper>
  );
}
