const sgMail = require('@sendgrid/mail');
const htmlEmail = require('./regEmailHtml');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendEmail = async (email, user_id, password) => {
    try {
        const html = htmlEmail(user_id, password);

        const msg = {
            to: email,
            from: 'agustin.avila.dev@gmail.com',
            subject: 'Registro exitoso!',
            text: `Gracias por registrarte en DisneyWorldAPI. Tu ID de usuario es ${user_id} y la contraseña registrada es ${password}. Por favor guarda estos datos en un lugar seguro.`,
            html: html
        };

        await sgMail.send(msg);

    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail;