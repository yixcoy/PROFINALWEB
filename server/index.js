const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
//CONFIGURACION SERVIDOR

//CONFIGURAR EL PUERTO, set es una variable que va ser accedida a cualquier parte de nuestra aplicacion
app.set('port', process.env.PORT || 3000)

//FUNCIONES PARA PROCESAR DATOS (MIDDLEWARES)
app.use(morgan('dev'));
app.use(express.json());

//RUTAS DEL SERVIDOR
app.use('/api/cliente',require('./rutas/cliente.ruta'));

//INICIALIZAR SERVIDOR


app.listen(app.get('port'), ()=>{ 

    console.log('Server on port', app.get('port'));

})
