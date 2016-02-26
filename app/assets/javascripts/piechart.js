$(window).ready(function(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(loadPieChart);
})

function loadPieChart(){

  var PieChartPrototype = Object.create(HTMLElement.prototype);
  PieChartPrototype.attachedCallback = function() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      width: 500,
      height: 500
    };

    var chart = new google.visualization.PieChart(this);

    chart.draw(data, options);

  };

  document.registerElement('chartie-piechart', { prototype: PieChartPrototype } );

}
