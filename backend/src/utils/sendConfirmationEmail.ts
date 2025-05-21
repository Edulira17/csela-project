import nodemailer from 'nodemailer';
export async function sendConfirmationEmail(to: string, studentName: string){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  const mailOptions = {
    from: '"Secretaria Centro Social do Lago do Aleixo" csela1010@gmail.com',
    to,
    subject: "Confirmação de Pré-Matrícula",
    html: `
      <h2>Olá, ${studentName}!</h2>
      <p>Recebemos a sua pré-matrícula com sucesso.</p>
      <p>Entraremos em contato em breve com mais infomações.</p>
      <p>Atenciosamente, <br/>Secretaria CSELA.</p>
    `
  };

  await transporter.sendMail(mailOptions);
}