import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function DescargarExcel() {
  return (
    <Button variant="contained" color="success" sx={{ mt: 2 }}>
      <CloudDownloadIcon sx={{ mr: 1 }} />
      Descargar Excel
    </Button>
  );
}
