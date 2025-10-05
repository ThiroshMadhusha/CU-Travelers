document.addEventListener('DOMContentLoaded', function() {
  const inquireBtn = document.querySelector('.inquire-btn');
  const formFields = document.querySelectorAll('.inquiry-form input, .inquiry-form textarea');

  inquireBtn.addEventListener('click', function() {
    const whatsappNumber = '+94711360684';
    const message = Array.from(formFields).map(field => `${field.placeholder}: ${field.value}`).join('\n');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});