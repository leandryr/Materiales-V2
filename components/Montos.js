import { Box, Grid, Paper, Typography } from '@mui/material';

const montos = [
  { title: "Monto aceptado", value: 0 },
  { title: "Monto reclamado", value: 0 },
  { title: "Monto en proceso", value: 0 },
  { title: "Monto cancelado", value: 0 },
  { title: "Monto recuperado", value: 0 },
  { title: "Monto rechazado", value: 0 },
];

export default function Montos() {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Grid container spacing={2}>
        {montos.map((item, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="h6">${item.value.toFixed(2)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
