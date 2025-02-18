import Navbar from './Navbar';
import { Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
}
