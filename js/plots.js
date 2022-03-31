// Enter the following line in the terminal to activate the server
// python -m http.server
// http://127.0.0.1:8000


// RECEIVING //
// All warehouses
function receivers() {
  d3.json('data/receivers.json').then ((data) => {
    if (Object.keys(data).length > 0) {

      // Working Hours
      first = Object.values(data)[0]
      var hours = Object.keys(first)

      // Employees (x)
      var labels = Object.keys(data)

      var dataSize = hours.length
      var chunks = []

      for (var i = 0; i < dataSize; i++) {
        // Picking Activity (y)
        var receives = []
        Object.values(data).forEach((line) => {
          receives.push(Object.values(line)[i])
        })
        var trace = {
          x: labels,
          y: receives,
          name: hours[i],
          type: 'bar'
        }
        chunks.push(trace)
      }
      var layout = {
        barmode: 'stack',
        title: {
          text: 'ALL WAREHOUSES - Receiving by Employee'
        },
        legend: {
          title: {
            text: '24 HOURS'
          }
        }
      }
      Plotly.newPlot('plot_r_1', chunks, layout)
    }
  })
}
receivers()


// CYCLE COUNT //
function cycle_count() {
  d3.json('data/cycle_count.json').then ((data) => {
    
    // Legend Values
    var first = Object.values(data)[0]
    var legend = Object.keys(first)
    var legend_size = Object.keys(first).length
    
    // X Values
    var labels = Object.keys(data)
    var labels_size = Object.keys(data).length
   
    // Colors
    var colors = ['#FECB52', '#EF553B', '#FFA15A']

    // Bar Layers
    var layers = []

    for (i = 0; i < legend_size; i++) {
      var warehouse = []
      for (j = 0; j < labels_size; j++) {
        warehouse.push(Object.values(data)[j][legend[i]])
      }
      
      layers.push({
        x: labels,
        y: warehouse,
        type: 'bar',
        name: legend[i],
        marker: {
          color: colors[i]
        }
      })
    }
    var layout = {
      barmode: 'stack',
      xaxis: {
        autotypenumbers: 'strict'
      }
    }
    Plotly.newPlot('plot_i_1_1', layers, layout)
  })
}
cycle_count()
