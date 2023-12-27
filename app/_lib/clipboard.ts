export async function copyToClipboard(text: string): Promise<void> {
  // 🐞 FIXME: https://g.co/bard/share/881d13684921

  if (!navigator.clipboard) {
    alert('!navigator.clipboard');
    return;
  }

  try {
    await navigator.clipboard.writeText(text);

    alert(`'${text}' copied to clipboard`);
  } catch (error) {
    alert(`error: ${error}`);
    console.log(error);
  }
}
