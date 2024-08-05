// Load the CSV data
d3.csv('..website/datad3.csv').then(function(data) {
    // Create the SVG container
    const svg = d3.select('#chart-container').append('svg')
      .attr('width', 600)
      .attr('height', 600);
  
    // Draw the squares
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', function(d, i) {
        return (i % 36) * 16;
      })
      .attr('y', function(d, i) {
        return Math.floor(i / 36) * 16;
      })
      .attr('fill', 'steelblue'); // Set the color of the squares
  });
  