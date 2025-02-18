import React, { useState } from 'react';
import './FormNuevoReporte.scss';
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button
} from '@material-ui/core';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { newReport } from '../../api/api.js';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function FormNuevoReporte({ credentials, localidades, plantas, onNewReport }) {
  const [localidad, setLocalidad] = useState(null);
  const [claim, setClaim] = useState("");
  const [codigo, setCodigo] = useState("");
  const [planta, setPlanta] = useState(null);
  const [numero, setNumero] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [perdidaConFlete, setPerdidaConFlete] = useState("");
  const [perdidaSinFlete, setPerdidaSinFlete] = useState("");
  const [fechaNotificacion, setFechaNotificacion] = useState(null);
  const [documentacionFaltante, setDocumentacionFaltante] = useState("");
  const [area, setArea] = useState("");
  const [estatus, setEstatus] = useState(null);
  const [state, setState] = useState(true);

  const handleNewReporte = () => {
    const data = {
      localidad, claim, codigo, planta, numero, cantidad,
      fechaNotificacion, perdidaSinFlete, perdidaConFlete,
      documentacionFaltante, area, estatus
    };

    newReport(credentials, data)
      .then(() => {
        onNewReport();
        toggle();
        resetFields();
      })
      .catch((e) => console.error("Error al guardar el reporte:", e));
  };

  const toggle = () => setState(!state);

  const resetFields = () => {
    setLocalidad(null); setClaim(""); setCodigo("");
    setPlanta(null); setNumero(""); setCantidad("");
    setFechaNotificacion(null); setPerdidaSinFlete("");
    setPerdidaConFlete(""); setDocumentacionFaltante("");
    setArea(""); setEstatus(null);
  };

  return (
    <div className="formReporte">
      <div className="row">
        <div className="title" onClick={toggle}>
          Formulario {state ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <form noValidate autoComplete="off" style={{ display: state ? 'block' : 'none' }}>
        <div className="row">
          <TextField label="Referencia Claim" variant="outlined" size="small"
            value={claim} onChange={(e) => setClaim(e.target.value)} className="textField" />

          <FormControl variant="outlined" size="small" className="textField">
            <InputLabel>Localidad</InputLabel>
            <Select value={localidad} onChange={(e) => setLocalidad(e.target.value)}>
              {localidades.map((loc) => <MenuItem key={loc.localidad} value={loc.localidad}>{loc.localidad}</MenuItem>)}
            </Select>
          </FormControl>

          <TextField label="Código de daño" variant="outlined" size="small"
            value={codigo} onChange={(e) => setCodigo(e.target.value)} className="textField" />

          <FormControl variant="outlined" size="small" className="textField">
            <InputLabel>Planta</InputLabel>
            <Select value={planta} onChange={(e) => setPlanta(e.target.value)}>
              {plantas.map((plant) => <MenuItem key={plant.planta} value={plant.planta}>{plant.planta}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        <div className="row">
          <TextField label="Número de parte" variant="outlined" size="small"
            value={numero} onChange={(e) => setNumero(e.target.value)} className="textField" />

          <TextField label="Cantidad de piezas" variant="outlined" size="small"
            value={cantidad} onChange={(e) => setCantidad(e.target.value)} className="textField" />

          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <KeyboardDatePicker label="Fecha de notificación RV" format="dd/MM/yyyy"
              inputVariant="outlined" size="small" value={fechaNotificacion}
              onChange={setFechaNotificacion} className="textField" />
          </MuiPickersUtilsProvider>

          <TextField label="Valor de perdida sin flete" variant="outlined" size="small"
            value={perdidaSinFlete} onChange={(e) => setPerdidaSinFlete(e.target.value)}
            InputProps={{ inputComponent: NumberFormatCustom }} className="textField" />
        </div>

        <div className="row">
          <TextField label="Valor de perdida con flete" variant="outlined" size="small"
            value={perdidaConFlete} onChange={(e) => setPerdidaConFlete(e.target.value)}
            InputProps={{ inputComponent: NumberFormatCustom }} className="textField" />

          <TextField label="Área y Responsables" variant="outlined" size="small"
            value={area} onChange={(e) => setArea(e.target.value)} className="textField" />

          <FormControl variant="outlined" size="small" className="textField">
            <InputLabel>Estatus</InputLabel>
            <Select value={estatus} onChange={(e) => setEstatus(e.target.value)}>
              <MenuItem value={'En Proceso'}>En Proceso</MenuItem>
              <MenuItem value={'Aceptado'}>Aceptado</MenuItem>
              <MenuItem value={'Rechazado'}>Rechazado</MenuItem>
              <MenuItem value={'Pagado'}>Pagado</MenuItem>
              <MenuItem value={'Cancelado'}>Cancelado</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Documentación faltante" variant="outlined" size="small"
            value={documentacionFaltante} onChange={(e) => setDocumentacionFaltante(e.target.value)}
            className="textField" multiline rows={1} />
        </div>

        <div className="row">
          <Button variant="contained" color="secondary" className="button" onClick={handleNewReporte}>
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormNuevoReporte;
