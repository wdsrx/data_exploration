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

function cycle_count() {
  d3.json('data/cycle_count.json').then ((data) => {
    console.log(data)
    // console.log(Object.keys(data))
    // console.log(Object.values(data)[0])
    // console.log(Object.values(data))
    // console.log(Object.values(data)[0])
    // console.log(Object.values(data)[0]['Count'])
    // console.log(Object.values(data)[0]['Inventory Adjustment'])
    // console.log(Object.values(data)[0]['Recount'])
    console.log('------------------------------------')

    // Legend Values
    var first = Object.values(data)[0]
    var legend = Object.keys(first)
    var legend_size = Object.keys(first).length

    // USE THIS NAMES IN THE JUPYTER NOTEBOOK
    // Inventory Counts
    // Discrepancies
    // Inventory Adjustments


    // X Values
    var labels = Object.keys(data)
    var labels_size = Object.keys(data).length

    // Bar Layers
    var layers = []

    for (i = 0; i < legend_size; i++) {
      var warehouse = []
      for (j = 0; j < labels_size; j++) {
        warehouse.push(Object.values(data)[j][legend[i]])
      }
      //console.log(warehouse)
      layers.push(warehouse)
    }
    console.log(warehouse)

    values_count = []
    values_count.push(Object.values(data)[0]['Count'])
    values_count.push(Object.values(data)[1]['Count'])
    values_count.push(Object.values(data)[2]['Count'])
    values_count.push(Object.values(data)[3]['Count'])
    values_count.push(Object.values(data)[4]['Count'])
    values_count.push(Object.values(data)[5]['Count'])

    values_recount = []
    values_recount.push(Object.values(data)[0]['Recount'])
    values_recount.push(Object.values(data)[1]['Recount'])
    values_recount.push(Object.values(data)[2]['Recount'])
    values_recount.push(Object.values(data)[3]['Recount'])
    values_recount.push(Object.values(data)[4]['Recount'])
    values_recount.push(Object.values(data)[5]['Recount'])

    values_adjustment = []
    values_adjustment.push(Object.values(data)[0]['Inventory Adjustment'])
    values_adjustment.push(Object.values(data)[1]['Inventory Adjustment'])
    values_adjustment.push(Object.values(data)[2]['Inventory Adjustment'])
    values_adjustment.push(Object.values(data)[3]['Inventory Adjustment'])
    values_adjustment.push(Object.values(data)[4]['Inventory Adjustment'])
    values_adjustment.push(Object.values(data)[5]['Inventory Adjustment'])

    var data = [{
      x: labels,
      y: values_count,
      type: 'bar',
      name: 'Inventory Counts',
      marker: {
        color: '#FECB52'
      }
    },
    {
      x: labels,
      y: values_recount,
      type: 'bar',
      name: 'Discrepancies',
      marker: {
        color: '#FFA15A'
      }
    },
    {
      x: labels,
      y: values_adjustment,
      type: 'bar',
      name: 'Inventory Adjustments',
      marker: {
        color: '#EF553B'
      }
    }
  ]

    var layout = {
      barmode: 'stack',
      xaxis: {
        autotypenumbers: 'strict'
      }
    }


    Plotly.newPlot('plot_i_1_1', data, layout)

  })
}
cycle_count()

