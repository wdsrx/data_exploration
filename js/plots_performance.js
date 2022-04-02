function performance() {
    d3.json('data/performance.json').then ((data) => {
        console.log(data)
        // console.log(Object.keys(data).length)
        // console.log(Object.values(data).length)
        //console.log(data['schema'])

        // console.log(data['data'])
        // console.log(data['data'].length)


        // console.log(data['data'][0]['Shipment'])
        // console.log(data['data'][0]['Time'])
        // console.log(data['data'][1]['Shipment'])
        // console.log(data['data'][1]['Time'])
        // console.log(data['data'][2]['Shipment'])
        // console.log(data['data'][2]['Time'])
        // console.log(data['data'][3]['Shipment'])
        // console.log(data['data'][3]['Time'])
        // console.log(data['data'][4]['Shipment'])
        // console.log(data['data'][4]['Time'])

        // console.log(data['data'][5]['Shipment'])
        // console.log(data['data'][5]['Time'])



        var bars = []
        var x = []
        var y = []
        var layout = {
            yaxis: { type: 'category' },
            showlegend: false,
            automargin: true,
            autosize: false,
            width: 1000,
            height: 5000,
            font: {
                size: 8
            }
        }

        //for (var i = 0; i < data['data'].length; i ++) {

        for (var i = 0; i < 100; i ++) {
            //console.log(i)
            if (data['data'][i]['Time'] == 0) {
                console.log(x)
                console.log(y)

                bars.push({
                    type: 'bar',
                    x: x,
                    y: y,
                    orientation: 'h',
                    width: 0.5
                })
                x = [0]
                y = [data['data'][i]['Shipment']]

                // console.log(data['data'][i]['Time'])
                // console.log(data['data'][i]['Shipment'])
            }
            else {
                x.push(data['data'][i]['Time'])
                y.push(data['data'][i]['Shipment'])
            }
        }
        console.log(bars)




        
        // bars.push({
        //     type: 'bar',
        //     x: [0, 0.2166666667, 0.05, 0.0833333333, 0.5],
        //     y: ['111', '111', '111', '111', '111'],
        //     orientation: 'h'
        // })

        // bars.push({
        //     type: 'bar',
        //     x: [0, 2.1333333333, 0.25, 0.2333333333, 0.8666666667, 0.2166666667, 4.25, 2.25],
        //     y: ['ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A', 'ADV80001375-FL-A'],
        //     orientation: 'h'
        // })

        // bars.push({
        //     type: 'bar',
        //     x: [0, 0.8333333333, 1.5666666667],
        //     y: ['AG-AS3005', 'AG-AS3005', 'AG-AS3005'],
        //     orientation: 'h'
        // })

        // bars.push({
        //     type: 'bar',
        //     x: [0, 1.83, 3.566],
        //     y: ['AG005', 'AG005', 'AG005'],
        //     orientation: 'h'
        // })



        Plotly.newPlot('plot_performance_1', bars, layout)
        

        
    })
}
performance()