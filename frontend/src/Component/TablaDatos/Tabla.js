import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

function Tabla() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "titulo", headerName: "TÍTULO", width: 200 },
    { field: "tipo", headerName: "TIPO", width: 150 },
    { field: "descripcion", headerName: "DESCRIPCIÓN", width: 300 },
    { field: "calificacion", headerName: "CALIFICACIÓN", width: 120 },
    { field: "cantidad", headerName: "CANTIDAD", width: 120 },
    { field: "total", headerName: "TOTAL", width: 120 },
    { field: "fecha", headerName: "FECHA", width: 180 },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary" // Cambia el color a verde estableciendo "primary"
            onClick={() => handleDelete(params.row.id)}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend cuando el componente se monta
    fetch("http://localhost:5000/compras")
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado de las filas con los datos recibidos del backend
        setRows(data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error("Error al obtener datos del backend:", error);
      });
  }, []); // El segundo parámetro [] asegura que este efecto se ejecute solo una vez, cuando se monta el componente

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/compras/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      // Eliminar la fila del estado si la solicitud es exitosa
      setRows(rows.filter((row) => row.id !== id));
    } else {
      console.error("Error al eliminar el elemento");
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText} // Establece el idioma español
      />
    </div>
  );
}

export default Tabla;
