import { Box, Paper, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#4CAF50', '#3F51B5', '#FFC107', '#9E9E9E', '#9C27B0', '#F44336'];

const data = [
  { name: 'Monto aceptado', value: 44005688, color: COLORS[0] },
  { name: 'Monto reclamado', value: 829133858, color: COLORS[1] },
  { name: 'Monto en proceso', value: 26825122, color: COLORS[2] },
  { name: 'Monto cancelado', value: 117620632, color: COLORS[3] },
  { name: 'Monto recuperado', value: 273180932, color: COLORS[4] },
  { name: 'Monto rechazado', value: 369949226, color: COLORS[5] },
];

export default function Metrics() {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PieChart width={80} height={80}>
                <Pie data={[item]} dataKey="value" cx="50%" cy="50%" outerRadius={35} fill={item.color}>
                  <Cell key={`cell-${index}`} fill={item.color} />
                </Pie>
              </PieChart>
              <Typography variant="subtitle2" fontWeight="bold">{item.name}</Typography>
              <Typography variant="h6">${item.value.toLocaleString()}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
