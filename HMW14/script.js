


    var canvas = document.getElementById('secondCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      setTimeout(() => {  
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(200, 10, 50, 50);
         }, 1000);

      setTimeout(()=> {
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(250, 60, 50, 50);
        }, 3000);
    
      setTimeout (() => {
        ctx.fillStyle = 'rgba(47, 129, 76, 0.7)';
        ctx.fillRect(290, 100, 70, 70);
      },4000);
    };
      
      
    var canvas = document.getElementById('firstCanvas');
    var test = canvas.getContext('2d');
    
  
    var gradient = test.createConicGradient(0, 100, 100,);
    
  
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.25, "orange");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(0.75, "green");
    gradient.addColorStop(0.95, "blue");
   
    ctx.fillStyle = gradient;
    ctx.fillRect(30, 40, 200, 200);   



