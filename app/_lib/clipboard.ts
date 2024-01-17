import toast from 'react-hot-toast';

export async function copyToClipboard(
  text: string,
  translate: CallableFunction
): Promise<void> {
  if (!navigator.clipboard) {
    toast.error('!navigator.clipboard');
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    toast.success(translate('email.toast.copied'));
  } catch (error) {
    console.log(error);
    toast.error(`${translate('email.toast.error')}: ${error}`);
  }
}
