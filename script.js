window.onload = function() {
    let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let accion = ['comió', 'hizo pis', 'aplastó', 'rompió'];
    let que = ['mi tarea', 'mi teléfono', 'el coche'];
    let cuando = ['antes de la clase', 'cuando estaba durmiendo', 'mientras estaba haciendo ejercicio', 'durante mi almuerzo', 'mientras oraba'];
  
    let randomquien=Math.floor(Math.random()*quien.length)
    let randomaccion=Math.floor(Math.random()*accion.length)
    let randomque=Math.floor(Math.random()*que.length)
    let randomcuando=Math.floor(Math.random()*cuando.length)
  
    document.querySelector(".excusa").innerHTML=quien[randomquien]+" "+accion[randomaccion]+" "+que[randomque]+" "+cuando[randomcuando]
  }