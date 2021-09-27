const app = require('./app');
const sequelize = require('./database/db');


// Obtener puerto
const PORT = app.get('port');

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);

  try {
    // Conexion con BD
    await sequelize.authenticate();
    console.log('Conexion exitosa a la base de datos!');

    // Sincronizar modelos con tablas:
    await sequelize.sync({ force: true }); // {alter: true} => modifica las tablas para emparejar con los campos
    //console.log("Todos los modelos fueron sincronizados correctamente.");
    //
    // NOTA: si la tabla no existe la crea, si existe pero faltan campos los crea, si sobran campos los destruye => NO se recomineda usar en Produccion!
    // para no hacer nada => { force: false }
    

  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }
});