import { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Divider } from "@mui/material";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    
    if (res.ok) {
      alert("Login exitoso");
      localStorage.setItem("token", data.token); // Guardamos el token
      window.location.href = "/"; // Redirigimos al listado de usuarios
    } else {
      setError(data.message);
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={10} sx={{ p: 4, textAlign: "center", width: 400 }}>
        <Box sx={{ mb: 2 }}>
          <Image src="/logo_rv.038a0a70.svg" alt="Logo" width={140} height={90} priority />
        </Box>
        <Typography variant="h5" gutterBottom>Materiales</Typography>
        <Divider sx={{ my: 2 }} />
        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Correo electrónico" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Contraseña" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth>INICIAR SESIÓN</Button>
        </Box>
      </Paper>
    </Box>
  );
}
