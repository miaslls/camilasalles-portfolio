import toast from 'react-hot-toast';

export async function copyToClipboard(
  text: string,
  translate: CallableFunction
): Promise<void> {
  // 🐞 FIXME: https://g.co/bard/share/881d13684921

  if (!navigator.clipboard) {
    toast.error('!navigator.clipboard');
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    toast.success(translate('copied'));
  } catch (error) {
    console.log(error);
    toast.error(`${translate('error')}: ${error}`);
  }
}
