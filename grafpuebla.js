var votototalERPcapital = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [388977, 379531, 377674, 378230, 353389, 360665, , ],
    mode: 'lines',
    name: "Voto total de ERP en Puebla Capital",
    line:{
      dash: 'dashdot',
      width: 4
    },
    marker: {
      color: 'rgba(1, 5, 226, 0.8)'
    }
  };
  
  var votototalERPestado = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [ , , , , , , 909339, 9285651],
    mode: 'lines',
    name: "Voto total de ERP en Puebla Estado",
    line:{
      dash: 'dashdot',
      width: 4
    },
    marker: {
      color: 'rgba(0, 167, 255, 0.8)'
    }
  };
  
  var votototalERPcapital = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [202028, 205405, 200977, 198172, 194786, , ],
    mode: 'lines',
    name: "Voto Duro de ERP en Puebla Capital",
    line:{
      dash: 'solid',
      width: 4
    },
    marker: {
      color: 'rgba(1, 5, 226, 0.8)'
    }
  };
  
  var votoduroERPestado = {
    x: ['DIC20', 'FEB21', 'MAR21', 'ABR21', 'MAY21', 'JUN21','SEP21','ENE22'],
    y: [ , , , , , , 398433, 476191],
    mode: 'lines',
    name: "Voto Duro de ERP en Puebla Estado",
    line:{
      dash: 'solid',
      width: 4
    },
    marker: {
      color: 'rgba(0, 167, 255, 0.8)'
    }
  };
  
  var radarespuebla = [votototalERPcapital, votototalERPestado, votototalERPcapital, votoduroERPestado];
  
  var grafradares = {
    title:'Estimación de votos', yaxis:{title:"miles de votos"}
  };
  
  Plotly.newPlot('Radar Puebla', radarespuebla, grafradares)
