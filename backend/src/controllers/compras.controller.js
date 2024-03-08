const pool = require("../db"); // Conexión con la base de datos

/* 
    Funciones de gestión de la tabla "compras"
*/
const getAllCompras = async (req, res) => {
  try {
    const listaCompras = await pool.query("SELECT * FROM compras"); // Consulta SQL

    res.json(listaCompras.rows); // La respuesta contiene en forma de objeto todas las tuplas de la tabla
  } catch (error) {
    console.log(error.message);
  }
};

const postCompra = async (req, res) => {
  try {
    const { titulo, tipo, descripcion, total, cantidad, calificacion, fecha } =
      req.body; // Parametros de entrada

    const result = await pool.query(
      "INSERT INTO public.compras(titulo, tipo, descripcion, calificacion, cantidad, total, fecha) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [titulo, tipo, descripcion, calificacion, cantidad, total, fecha]
    ); // Consulta SQL. "RETURNING *" agrega a rows un arreglo con los datos de la tupla insertada

    /* 
        Respuesta de la consulta en formato .json,
        result.rows[0] contiene el objeto agregado
    */
    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message }); // Retorna como .json el error
  }
};

const deleteCompra = async (req, res) => {
  try {
    const { id } = req.params; // Se guarda el parámetro id ingresado en la URL

    const compraEliminada = await pool.query(
      "DELETE FROM compras WHERE compras.id = $1",
      [id]
    );

    if (compraEliminada.rows.length === 0)
      return res.status(404).json({
        mensaje: "Compra no encotrada",
      });

    res.sendStatus(204); // Se indica que la compra se eliminó con éxito. 204 indica que no existe contenido por devolver
  } catch (error) {
    console.log(error.message);
  }
};

// Exportación de funciones
module.exports = {
  getAllCompras,
  postCompra,
  deleteCompra,
  getCompra,
};
