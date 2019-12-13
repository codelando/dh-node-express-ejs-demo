# dh-node-express-ejs-demo
Demo de Node + Express + EJS para la cursada de Node de Digital House

# Pasos

1. Iniciar aplicación de Node --> `npm init`
2. Instalar los paquetes a utilizar --> `npm i express ejs`
3. Requerir Express --> `const express = require('express');`
4. Ejecutar express y asignarlo a la variable `app` --> `const app = express();`
5. Setear el motor de vistas --> `app.set('view engine', 'ejs');`
6. Crear directorios de vistas `views` y parciales `views/partials`
7. Setear el directorio de archivos estáticos (css, imágenes, js) --> `app.use(express.static('public'));`
8. Crear directorio público `public`
9. Crear un servidor de express --> `app.listen(3000);`
10. Crear las rutas necesarias --> `app.get('/', (req, res) => { ... })`

