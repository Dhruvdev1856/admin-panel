// order chart

var options = {
  series: [{
    name: "sales",
    data: [28, 40, 36, 52, 38, 60, 38, 52, 36,38]
}],
  chart: {
  height:210,
  type: 'area',
  toolbar: {
    show: false,
  },
  
  zoom: {
    enabled: false
  }
},
colors:['#00a04f'],
yaxis: {
  labels: {
    show: false,
  }
},
xaxis: {
  labels: {
    show: false,
  }
},
fill: {
  type: "gradient",
  colors:['#00a04f'],
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.1,
    opacityTo: 0.5,
    stops: [0, 90, 100]
  }
},
stroke: {
  curve: 'smooth',
  width:2
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0,
  },
},
dataLabels: {
  enabled: false,
},
grid: {
  show: false,      // you can either change hear to disable all grids
  xaxis: {
    lines: {
      show: true  //or just here to disable only x axis grids
     }
   },  
  yaxis: {
    lines: { 
      show: false  //or just here to disable only y axis
     }
   },   
},
};


var chart = new ApexCharts(document.querySelector("#orderchart"), options);
chart.render();

// daily sales

var options = {
  series: [{
  name: 'This week',
  data: [44, 55, 41, 67, 22, 43,21]
}, {
  name: 'lastweek',
  data: [13, 23, 20, 8, 13, 27,33]
}],
  chart: {
  type: 'bar',
  height: 200,
  stacked: true,
  toolbar: {
    show: false,
  },
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false,
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
grid: {
  show: false,      // you can either change hear to disable all grids
  xaxis: {
    lines: {
      show: true  //or just here to disable only x axis grids
     }
   },  
  yaxis: {
    lines: { 
      show: false  //or just here to disable only y axis
     }
   },   
},
colors:['#e2a03f', '#e0e6ed'],
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '40%',
    dataLabels: {
      total: {
        enabled: false,
        style: {
          fontSize: '10px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  type: 'day',
  categories: ['sun', 'mon', 'tue', 'wen',
    'thu', 'fri','sat'
  ],
},
yaxis: {
  labels: {
    show: false,
  }
},
xaxis: {
  labels: {
    show: false,
  }
},
fill: {
  opacity: 1,
  color:['#e2a03f','#e0e6ed'],
}
};

var chart = new ApexCharts(document.querySelector("#daily-sales-chart"), options);
chart.render();

// sales chart

var options = {
  series: [985, 737, 270],
  chart: {
  width: 320,
  type: 'donut',

},

dataLabels: {
  enabled: false,
},

responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200,
      
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  display:false,
}
};

var chart = new ApexCharts(document.querySelector("#saleschart"), options);
chart.render();



// income expense chart

var options = {
    series: [{
    name: 'income',
    data: [16.4,16.8,15.5,17.8,15.5,17.8,19,16,15,17,14,17],
  }, {
    name: 'expenses',
    data: [16.5,17.5,16.2,17.3,16,19.5,16,17,16,19,18,19],
 
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    }
  },
  grid: {
    show: false,      // you can either change hear to disable all grids
    xaxis: {
      lines: {
        show: true  //or just here to disable only x axis grids
       }
     },  
    yaxis: {
      lines: { 
        show: false  //or just here to disable only y axis
       }
     },   
  },
  dataLabels: {
    enabled: false
  },

  colors:['#1B55E2', '#E7515A'],

  fill: {
    type: "gradient",
    colors:['#1B55E2', '#E7515A'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.1,
      opacityTo: 0.5,
      stops: [0, 90, 100]
    }
  },
  stroke: {
    curve: 'smooth',
    width:2
  },
  xaxis: {
    type: 'month',
    categories: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
    labels: {
      show: false,
      style: {
        colors: ['white'],
    }
    }
  },
  tooltip: {
    x: {
      format: 'month'
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: ['var(--first)'],
    }
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#incomechart"), options);
  chart.render();
