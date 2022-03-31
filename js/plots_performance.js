function performance() {
    d3.json('data/performance.json').then ((data) => {
        console.log(data)
    })
}
performance()