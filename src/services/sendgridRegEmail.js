const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY); //TODO: resolver error process.env
sgMail.setApiKey('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');


const sendEmail = async (email, user_id, password) => {
    try {
        const msg = {
            to: email,
            from: 'agustin.avila.dev@gmail.com',
            subject: 'Registro exitoso!',
            text: `Gracias por registrarte en DisneyWorldAPI. Tu ID de usuario es ${user_id} y la contraseña registrada es ${password}. Por favor guarda estos datos en un lugar seguro...`,
            //TODO: hacer mas bonito el html email
            html: `
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
                        <p>Tu ID de usuario es ${user_id} y la contraseña registrada es ${password}. Por favor guarda estos datos en un lugar seguro</p>
                    </main>
                    <footer>
                        <small>Agustín Avila Humerez - 2021</small>
                        <br>
                        <small>Alkemy Challenge NodeJS</small>
                    </footer>
                </body>
                </html>
            `
        };

        await sgMail.send(msg);

    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail;