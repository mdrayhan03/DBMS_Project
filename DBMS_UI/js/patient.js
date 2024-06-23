// Patient prescription chart
var prescription_value = {
  series: [{
  name: 'Childhood [3-8]',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Adolescence [9-18]',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Early Adulthood [19-45]',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Middle Adulthood [46–65]',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: ' Later Adulthood [65+]',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},
title: {
  text: 'Prescription Chart'
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#prescription-chart"), prescription_value);
chart.render();


// Patient diagnosis report chart
var dreport_value = {
  series: [{
  name: 'Childhood [3-8]',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Adolescence [9-18]',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Early Adulthood [19-45]',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Middle Adulthood [46–65]',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: ' Later Adulthood [65+]',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},
title: {
  text: 'Diagnosis Report Chart'
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#dreport-chart"), dreport_value);
chart.render();





