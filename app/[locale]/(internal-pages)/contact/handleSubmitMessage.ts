import toast from 'react-hot-toast';
import { FormEvent } from 'react';
import { FormState } from './useMessageForm';
import { EmailData } from '@api/send-email/types';

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

export async function handleSubmitMessage(
  e: FormEvent<HTMLFormElement>,
  { name, email, phone, message }: FormState,
  clearForm: CallableFunction,
  translate: CallableFunction
) {
  e.preventDefault();

  if (!message) {
    toast.error(translate('message_required'));
    return;
  }

  const textMessageParts = [];
  if (name) {
    textMessageParts.push(`name: ${name};`);
  }

  if (email) {
    textMessageParts.push(`email: ${email};`);
  }

  if (phone) {
    textMessageParts.push(`phone: ${phone};`);
  }

  textMessageParts.push(`message: ${message};`);
  const textMessage = textMessageParts.join(' ');

  const htmlMessageParts = [];
  if (name) {
    htmlMessageParts.push(`<p><b>name:</b> ${name}</p>`);
  }

  if (email) {
    htmlMessageParts.push(`<p><b>email:</b> ${email}</p>`);
  }

  if (phone) {
    htmlMessageParts.push(`<p><b>phone:</b> ${phone}</p>`);
  }

  htmlMessageParts.push(`<p><b>message:</b> ${message}</p>`);
  const htmlMessage = htmlMessageParts.join('');

  const toastId = toast.loading('loading');

  const { success } = await sendEmail({
    textMessage,
    htmlMessage,
  });

  if (!success) {
    toast.error(translate('submit_state.error'), { id: toastId });
  }

  clearForm();
  toast.success(translate('submit_state.success'), { id: toastId });
}
