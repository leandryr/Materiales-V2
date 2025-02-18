import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const dataReportes = [
  { ref: '2R-2023-067', localidad: 'Silao', transportista: 'APL', tipo: 'Discrepancia', fecha: '2023-07-30', estatus: 'En Proceso' },
  { ref: '2R-2023-054', localidad: 'Silao', transportista: 'Penske LLP', tipo: 'Daños', fecha: '2023-06-30', estatus: 'Aceptado' },
  { ref: '2R-2023-066', localidad: 'Silao', transportista: 'Penske LLP', tipo: 'Daños', fecha: '2023-06-30', estatus: 'En Proceso' },
];

export default function ReporteTable({ filtro }) {
  const reportesFiltrados = filtro === 'Sin Filtro' ? dataReportes : dataReportes.filter(r => r.estatus === filtro);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
          <TableRow>
            <TableCell>REF. CLAIM</TableCell>
            <TableCell>LOCALIDAD</TableCell>
            <TableCell>TRANSPORTISTA</TableCell>
            <TableCell>TIPO DE DAÑO</TableCell>
            <TableCell>FECHA DE EMISIÓN</TableCell>
            <TableCell>ESTATUS</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportesFiltrados.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.ref}</TableCell>
              <TableCell>{row.localidad}</TableCell>
              <TableCell>{row.transportista}</TableCell>
              <TableCell>{row.tipo}</TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.estatus}</TableCell>
              <TableCell>
                <IconButton><ChevronRightIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
