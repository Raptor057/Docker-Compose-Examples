// send-mail.js
const nodemailer = require("nodemailer");

async function enviarCorreo() {
  // Configura el transporte SMTP apuntando a Mailpit
  let transporter = nodemailer.createTransport({
    //host: "localhost",
    host: "192.168.0.110",
    port: 1025,
    secure: false, // Mailpit no usa TLS
  });

  // Email HTML de prueba
  let info = await transporter.sendMail({
    from: '"Tú 👨‍💻" <tu@ejemplo.com>',
    to: "destinatario@local.test",
    subject: "Correo de prueba con HTML",
    html: `
      <h2>¡Hola!</h2>
      <p>Este es un <strong>correo de prueba</strong> con contenido HTML.</p>
      <p style="color: gray;">Enviado usando <code>nodemailer</code> → <code>Mailpit</code></p>
    `,
    text: "¡Hola! Este es un correo de prueba con HTML (versión texto).",
  });

  console.log("✅ Correo enviado: %s", info.messageId);
}

enviarCorreo().catch(console.error);
