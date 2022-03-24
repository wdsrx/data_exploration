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
        autotypenumbers: 'strict'
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
        title: 'HOURS',
        autotick: false
      }
    }
    Plotly.newPlot("plot_2_1", data, layout);
  })
}
hours()

function pickers_w10() {
  d3.json('data/pickers_w10.json').then((data) => {
    console.log(data);
    // console.log(Object.keys(data));
    // console.log(Object.keys(data)[0]);
    // console.log(Object.values(data)[0]);

    // a = Object.values(data)[0]
    // console.log(Object.keys(a))
    // console.log(Object.values(a))



    // Employees (x)
    var labels = Object.keys(data)
    console.log(labels)

    
    // Pickings (y)
    //var values = Object.values(data)
    //console.log(values[0]['8'])
    
    // console.log(Object.values(data))
    // console.log(Object.values(data)[0])
    // console.log(Object.values(data)[1])
    // console.log(Object.values(data)[2])
    // console.log(Object.values(data)[3])
    
    
    
    // Object.values(data).forEach((line) => {
    //   for (var i = 0; i < dataSize; i++) {
    //     console.log(Object.values(line)[i])
        

    //   }
    //   //console.log(Object.values(line)[0])
    // })
    var dataSize = labels.length
    var chunks = []
    for (var i = 0; i < dataSize; i++) {
      Object.values(data).forEach((line) => {
        //console.log(Object.keys(line)[i])
        console.log(Object.values(line)[i])


      })
      var trace = {
        x: labels,
        y: [20, 14, 23, 20, 14, 23, 20, 14, 23, 20, 14, 23, 11],
        name: labels[i],
        type: 'bar'
      }
      chunks.push(trace)

    }

    var layout = {barmode: 'stack'}

    Plotly.newPlot('plot_3_1', chunks, layout)
    
    
    


  })

}
pickers_w10()




// var trace = {
//   x: ['giraffes', 'orangutans', 'monkeys'],
//   y: [20, 14, 23],
//   name: 'SF Zoo',
//   type: 'bar'
// }