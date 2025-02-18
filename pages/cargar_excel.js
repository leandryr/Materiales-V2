import React, { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';
import Sidebar from '../components/Sidebar';

export default function CargarExcel() {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        setFileName(event.target.files[0]?.name || "");
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <Container style={{ marginTop: 20 }}>
                <h2>Cargar Excel</h2>
                <p>Seleccione un archivo Excel para subir a la base de datos.</p>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        value={fileName}
                        placeholder="Nombre del archivo"
                        disabled
                    />
                    <Button variant="contained" component="label">
                        Buscar Archivo
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    <Button variant="contained" color="success">Cargar Excel</Button>
                </div>
            </Container>
        </div>
    );
}
