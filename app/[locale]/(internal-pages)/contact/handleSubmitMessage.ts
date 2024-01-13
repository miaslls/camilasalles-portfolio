type EmailData = {
  textMessage: string;
  htmlMessage: string;
};

async function sendEmail(data: EmailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error(error);

    return { success: false };
  }
}

export async function handleSubmitMessage(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  const textMessageParts = [];
  if (name) textMessageParts.push(`name: ${name};`);
  if (email) textMessageParts.push(`email: ${email};`);
  if (phone) textMessageParts.push(`phone: ${phone};`);
  if (message) textMessageParts.push(`message: ${message};`);
  const textMessage = textMessageParts.join(' ');

  const htmlMessageParts = [];
  if (name) htmlMessageParts.push(`<p><b>name:</b> ${name}</p>`);
  if (email) htmlMessageParts.push(`<p><b>email:</b> ${email}</p>`);
  if (phone) htmlMessageParts.push(`<p><b>phone:</b> ${phone}</p>`);
  if (message) htmlMessageParts.push(`<p><b>message:</b> ${message}</p>`);
  const htmlMessage = htmlMessageParts.join('');

  const { success } = await sendEmail({
    textMessage,
    htmlMessage,
  });

  if (!success) {
    window.alert('Message not sent!'); // 🐞
  }

  // TODO: toast success & error
}
