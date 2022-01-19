# Alkemy Challenge NodeJS: Disney World API

Este es el repositorio de mi solución para el challenge de ingreso de Alkemy (backend NodeJs): API Mundo de Disney.

## Deployed version

La aplicación se encuentra desplegada en el servicio _Heroku_ => [Alkemy - Disney World API](https://alkemy-disney-world-api.herokuapp.com/)

(link: https://alkemy-disney-world-api.herokuapp.com/)

En dicho link hay una landing page con 3 vínculos

1. Documentación con Swagger UI
2. Link a este repositorio
3. Link de descarga de la consigna brindada para la realización del challenge.

Por otra parte, la base de datos se encuentra desplegada en *www.cleardb.com* aprovechando el addon brindado por Heroku. Esta base de datos en su version gratuita es un recurso más que suficiente para demostrar el funcionamiento pleno de esta API REST.

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

La librería _dotenv_ configura automáticamente dichas variables a partir de este archivo.

Iniciar el servidor con el comando:

```bash
npm start
```

De manera opcional, se puede iniciar el servidor con _nodemon_ con el siguiente comando:

```bash
npm run dev

```

## Usage / Docs

La documentación se realizó utilizando la herramienta _SwaggerUI_, siguiendo los lineamientos de la OpenAPI Specification Version 3.0.3.
Se puede acceder a ésta mediante el path "/api-docs/", por lo cual, como se mencionó más arriba, se encuentra disponible online en el siguiente link: [API Docs](https://alkemy-disney-world-api.herokuapp.com/api-docs)

link => (https://alkemy-disney-world-api.herokuapp.com/api-docs)
