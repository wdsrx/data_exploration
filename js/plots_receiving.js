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