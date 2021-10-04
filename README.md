# Alkemy Challenge NodeJS: Disney World API

Este es el repositorio de mi solución para el challenge de ingreso de Alkemy (backend NodeJs): API Mundo de Disney.

## Deployed version
La aplicación se encuentra desplegada en el servicio *Heroku* => [Alkemy - Disney World API](https://alkemy-disney-world-api.herokuapp.com/)

(link: https://alkemy-disney-world-api.herokuapp.com/)

En dicho link hay una landing page con 3 vínculos
1. Documentación con Swagger UI
2. Link a este repositorio
3. Link de descarga de la consigna brindada para la realización del challenge.

Por otra parte, la base de datos se encuentra desplegada en el servicio *remotemysql.com*.
Si bien no es un método diseñado para un verdadero despliegue en producción, me pareció un buen recurso para demostrar de forma rápida y sencilla el funcionamiento pleno de esta API Rest.

A continuación, se indican los pasos para instalación y uso de forma local.

## Installation

Instalar mediante NPM:

```bash
npm install
```


Para ejecutar una versión local, se requiere disponer en funcionamiento una base de datos mysql, ya sea de forma local o remota.
Además, es necesario configurar una cuenta de sendGrid para el envío de Email de registro.

Una vez cumplidos dichos requisitos, se deberá crear un archivo .env, el cual contenrá las siguientes variables de entorno:

```bash
# CUSTOM PORT
CUSTOM_PORT=****

# SENDGRID API KEY
SENDGRID_API_KEY=*************

# JWT SECRET
JWT_SECRET=*******

# DATABASE PARAMS
DB_USERNAME=****
DB_PASSWORD=****
DB_DATABASE=****
DB_HOST=remotemysql.com
DB_PORT=3306
DB_DIALECT=mysql 
```

La librería *dotenv* configura automáticamente dichas variables a partir de este archivo.

Iniciar el servidor con el comando:
```bash
npm start
```
De manera opcional, se puede iniciar el servidor con *nodemon* con el siguiente comando:

```bash
npm run dev

```

## Usage / Docs
La documentación se realizó utilizando la herramienta *SwaggerUI*, siguiendo los lineamientos de la OpenAPI Specification Version 3.0.3.
Se puede acceder a ésta mediante el path "/api-docs/", por lo cual, como se mencionó más arriba, se encuentra disponible online en el siguiente link: [API Docs](https://alkemy-disney-world-api.herokuapp.com/api-docs)

link => (https://alkemy-disney-world-api.herokuapp.com/api-docs)
