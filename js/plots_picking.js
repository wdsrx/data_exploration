// PICKING //
// All warehouses
function pickers() {
  d3.json('data/pickers.json').then((data) => {
    //console.log(data);

    // Hours
    first = Object.values(data)[0]
    var hours = Object.keys(first)
    //console.log(hours)
    // console.log(Object.values(a))

    // Employees (x)
    var labels = Object.keys(data)
    //console.log(labels)

    var dataSize = hours.length
    var chunks = []
    
    for (var i = 0; i < dataSize; i++) {
      // Picking Activity (y)
      var picks = []
      Object.values(data).forEach((line) => {
        //console.log(Object.keys(line)[i])
        //console.log(Object.values(line)[i])
        picks.push(Object.values(line)[i])
      })
      var trace = {
        x: labels,
        y: picks,
        name: hours[i],
        type: 'bar'
      }
      chunks.push(trace)
    }
    var layout = {
      barmode: 'stack',
      title: {
        text: 'ALL WAREHOUSES - Picking by Employee'
      },
      legend: {
        title: {
          text: '24 HOURS'
        }
      },
      xaxis: {
        tickangle: 45,
        tickfont: {
          size: 10
        }
      }
    }
    Plotly.newPlot('plot_p_1', chunks, layout)
  })
}
pickers()

function pickers_w(warehouse, place) {
  d3.json(warehouse).then((data) => {
    //console.log(data);

    if (Object.keys(data).length > 0) {
      // Hours
      first = Object.values(data)[0]
      var hours = Object.keys(first)
      //console.log(hours)
      // console.log(Object.values(a))

      // Employees (x)
      var labels = Object.keys(data)
      //console.log(labels)

      var dataSize = hours.length
      var chunks = []
      
      for (var i = 0; i < dataSize; i++) {
        // Picking Activity (y)
        var picks = []
        Object.values(data).forEach((line) => {
          //console.log(Object.keys(line)[i])
          //console.log(Object.values(line)[i])
          picks.push(Object.values(line)[i])
        })
        var trace = {
          x: labels,
          y: picks,
          name: hours[i],
          type: 'bar'
        }
        chunks.push(trace)
      }
      var layout = {
        barmode: 'stack',
        title: {
          text: 'WAREHOUSE ' + warehouse.substr(14,2) + ' - Picking by Employee'
        },
        legend: {
          title: {
            text: '24 HOURS'
          }
        }
      }
      Plotly.newPlot(place, chunks, layout)
    }
  })
}
pickers_w('data/pickers_w10.json', 'plot_p_2_1')
pickers_w('data/pickers_w20.json', 'plot_p_2_2')

// pickers_w('data/pickers_w15.json', 'plot_p_3_1')
// pickers_w('data/pickers_w16.json', 'plot_p_3_2')

// pickers_w('data/pickers_w18.json', 'plot_p_4_1')
// pickers_w('data/pickers_w19.json', 'plot_p_4_2')

// pickers_w('data/pickers_w20.json', 'plot_p_5_1')
// pickers_w('data/pickers_w21.json', 'plot_p_5_2')

// pickers_w('data/pickers_w22.json', 'plot_p_6_1')