import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

export default function ReporteFilters({ filtro, setFiltro }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Estatus</InputLabel>
        <Select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <MenuItem value="Sin Filtro">Sin Filtro</MenuItem>
          <MenuItem value="En Proceso">En Proceso</MenuItem>
          <MenuItem value="Aceptado">Aceptado</MenuItem>
          <MenuItem value="Rechazado">Rechazado</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary">Buscar</Button>
    </Box>
  );
}
