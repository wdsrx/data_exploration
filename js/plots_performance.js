function performance() {
    d3.json('data/performance.json').then ((data) => {
        console.log(data)
        console.log(Object.keys(data).length)
        console.log(Object.values(data).length)
        
    })
}
performance()