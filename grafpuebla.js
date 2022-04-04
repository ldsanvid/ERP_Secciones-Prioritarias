var votototalERP = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [388977, 379531, 377674, 378230, 353389, 360665, 909339, 928561],
    mode: 'lines',
    name: "Voto Total de ERP",
    line:{
      dash: 'dashdot',
      width: 4
    },
    marker: {
      color: 'rgba(0, 167, 255, 0.8)'
    }
  };
  

  var votoduroERP = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [202028, 205405, 200977, 198172, 190883, 194786, 398433, 476191],
    mode: 'lines',
    name: "Voto Duro de ERP",
    line:{
      dash: 'solid',
      width: 4
    },
    marker: {
      color: 'rgba(1, 5, 226, 0.8)'
    }
  };
  

  
  var radarespuebla = [votototalERP, votoduroERP];
  
  var grafradares = {
    title:'Estimación de votos',
    yaxis: {range:[10000, 1000000],
        title: "Miles de votos"
    }
  };
  
  Plotly.newPlot('Radar Puebla', radarespuebla, grafradares)
