// Enter the following line in the terminal to activate the server
// python -m http.server
// http://127.0.0.1:8000


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
    Plotly.newPlot("plot_1_1", data, layout);
  })
}
warehouse()

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
      }
    }
    Plotly.newPlot("plot_1_2", data, layout);
  })
}
operations()

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
    Plotly.newPlot("plot_2_1", data, layout);
  })
}
hours()


////////////////////////////////////////////////////////
//////////////////////// PICKING ///////////////////////
////////////////////////////////////////////////////////

function pickers() {
  d3.json('data/pickers.json').then((data) => {
    console.log(data);

    // Hours
    first = Object.values(data)[0]
    var hours = Object.keys(first)
    console.log(hours)
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
        console.log(Object.keys(line)[i])
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
      }
    }
    Plotly.newPlot('plot_3', chunks, layout)
  })
}
pickers()

function pickers_w10() {
  d3.json('data/pickers_w10.json').then((data) => {
    console.log(data);

    // Hours
    first = Object.values(data)[0]
    var hours = Object.keys(first)
    console.log(hours)
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
        console.log(Object.keys(line)[i])
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
        text: 'WAREHOUSE 10 - Picking by Employee'
      }
    }
    Plotly.newPlot('plot_4_1', chunks, layout)
  })
}
pickers_w10()

function pickers_w20() {
  d3.json('data/pickers_w20.json').then((data) => {
    console.log(data);

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
        text: 'WAREHOUSE 20 -  Picking by Employee'
      }
    }
    Plotly.newPlot('plot_4_2', chunks, layout)
  })
}
pickers_w20()


