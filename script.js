function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
  
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
  }
  
  // Atualiza o tempo a cada segundo
  setInterval(updateTime, 1000);
  
  // Chama updateTime imediatamente para exibir o tempo inicial
  updateTime();
  