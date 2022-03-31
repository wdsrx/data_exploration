// Enter the following line in the terminal to activate the server
// python -m http.server
// http://127.0.0.1:8000


// WAREHOUSES //
// ACTIVITY BY WAREHOUSE
function warehouse() {
  d3.json('data/warehouse.json').then((data) => {
    // console.log(data);
    // console.log(data.operationCode)
    // console.log(Object.values(data.operationCode))
    // console.log(Object.keys(data.operationCode))

    var labels = Object.keys(data.operationCode)
    var values = Object.values(data.operationCode)

    // Warehouse Bar Chart
    var data = [{
      x: labels,
      y: values,
      type: 'bar',
      marker: {
        color: values
      }
    }]
    var layout = {
      xaxis: {
        autotypenumbers: 'strict', 
        title: 'WAREHOUSE'
      },
      title: {
        text: "Activity by Warehouse"
      }
    }
    Plotly.newPlot("plot_w_1_1", data, layout);
  })
}
warehouse()

// ACTIVITY BY HOUR
function hours() {
  d3.json('data/hours.json').then((data) => {
    //console.log(data);

    var labels = Object.keys(data.Operations)
    var values = Object.values(data.Operations)

    var data = [{
      x: labels,
      y: values,
      type: "bar",
      marker: {
        color: values
      }
    }]
    layout = {
      title: {
        text: 'Activity by Hour'
      },
      xaxis: {
        title: 'HOUR',
        autotick: false
      }
    }
    Plotly.newPlot("plot_w_1_2", data, layout);
  })
}
hours()

// ACTIVITY BY OPERATION TYPE
function operations() {
  d3.json('data/operations_type.json').then((data) => {
    //console.log(data);

    var labels = Object.keys(data.Tasks)
    var values = Object.values(data.Tasks)

    var data = [{
      x: labels,
      y: values,
      type: "bar",
      marker: {
        color: values
      }
    }]
    layout = {
      title: {
        text: 'Activity by Operation Type'
      },
      xaxis: {
        tickangle : 45,
        tickfont: {
          size: 8
        }
      }
    }
    Plotly.newPlot("plot_w_2_1", data, layout);
  })
}
operations()

// ACTIVITY BY OPERATION TYPE EXCLUDING PICKING AND RECEIVING
function operations_excluded() {
  d3.json('data/operations_type_excluded.json').then((data) => {
    //console.log(data);

    var labels = Object.keys(data.Tasks)
    var values = Object.values(data.Tasks)

    var data = [{
      x: labels,
      y: values,
      type: "bar",
      marker: {
        color: values
      }
    }]
    layout = {
      title: {
        text: 'Activity by Operation Type Excluding Picking and Receiving'
      },
      xaxis: {
        tickangle : 45,
        tickfont: {
          size: 8
        }
      }
    }
    Plotly.newPlot("plot_w_2_2", data, layout);
  })
}
operations_excluded()

// OPEN OUTBOUND ORDERS
function openOutbounds() {
  d3.json('data/open_outbounds.json').then((data) => {
    //console.log(data);

    var labels = Object.keys(data.orders)
    //console.log(labels)
    var values = Object.values(data.orders)
    //console.log(values)

    var data = [{
      x: labels,
      y: values,
      type: "bar",
      marker: {
        color: values
      }
    }]
    layout = {
      title: {
        text: 'Open Outbound Orders'
      },
      xaxis: {
        autotick: false
      }
    }
    Plotly.newPlot("plot_w_3_1", data, layout);
  })
}
openOutbounds()

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
pickers_w('data/pickers_w12.json', 'plot_p_2_2')

pickers_w('data/pickers_w15.json', 'plot_p_3_1')
pickers_w('data/pickers_w16.json', 'plot_p_3_2')

pickers_w('data/pickers_w18.json', 'plot_p_4_1')
pickers_w('data/pickers_w19.json', 'plot_p_4_2')

pickers_w('data/pickers_w20.json', 'plot_p_5_1')
pickers_w('data/pickers_w21.json', 'plot_p_5_2')

pickers_w('data/pickers_w22.json', 'plot_p_6_1')

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
    // console.log(Object.values(data))
    // console.log(Object.values(data)[0])
    // console.log(Object.values(data)[0]['Count'])
    // console.log(Object.values(data)[0]['Inventory Adjustment'])
    // console.log(Object.values(data)[0]['Recount'])
    console.log('------------------------------------')


    labels = Object.keys(data)
    console.log(labels)

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


    // values_count.push(Object.values(data)[0]['Inventory Adjustment'])
    // values_count.push(Object.values(data)[0]['Recount'])
    console.log(values_count)

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

