  function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }

  // Cargar tema guardado
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark');
  })();

  function startVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES';

    recognition.start();

    recognition.onresult = function(event) {
      const command = event.results[0][0].transcript.toLowerCase();

      if (command.includes('inicio')) location.href = '#inicio';
      if (command.includes('proyectos')) location.href = '#proyectos';
      if (command.includes('redes')) location.href = '#redes';
      if (command.includes('contacto')) location.href = '#contacto';
    }
  }