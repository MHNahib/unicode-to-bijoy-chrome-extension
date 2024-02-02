document.addEventListener('DOMContentLoaded', function () {
  const convertBtn = document.getElementById('convertBtn');
  const inputField = document.getElementById('input');

  convertBtn.addEventListener('click', function () {
    const inputText = inputField.value;
    const convertedText = ConvertToASCII("bijoy", inputText);
    copyToClipboard(convertedText);
  });

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        alert('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard:', error);
        alert('Unable to copy text to clipboard');
      });
  }
});
