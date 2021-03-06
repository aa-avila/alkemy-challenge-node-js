const htmlEmail = (user_id, password) => { 
    return (`
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <header>
                <h1>¡Registro Exitoso!</h1>
            </header>
            <main>
                <h3>¡Gracias por sumarte a la aventura de DisneyWorld!</h3>
                <p>Tu ID de usuario es ${user_id} y la contraseña registrada es ${password}. Por favor guarda estos datos en un
                    lugar seguro.</p>
            </main>
            <footer>
                <small>Agustín Avila Humerez - 2021</small>
                <br>
                <small>Alkemy Challenge NodeJS</small>
            </footer>
        </body>

        </html>
    `);
}


module.exports = htmlEmail;

