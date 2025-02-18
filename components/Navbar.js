import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Proyecto Next.js
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Inicio</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">Sobre Nosotros</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
