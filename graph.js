var ctx = document.getElementById("myChart").getContext('2d');

var gradientFill = ctx.createLinearGradient(100, 480, 100, 500);
gradientFill.addColorStop(0, "#9cd9ff");
gradientFill.addColorStop(1, "#f8fbff");
Chart.defaults.global.responsive = true;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05'],
        datasets: [{
            data: [3.20, 1, 1.5, .83, 3.7],
            backgroundColor: 'transparent',
            borderColor: [
                '#2692f8'
            ],
            borderWidth: 2,
            pointRadius: 0
            
        }]
    },
    options: {
        scaleOverride : true,
        scaleSteps : 10,
        scaleStepWidth : 50,
        scaleStartValue : 0 ,
        legend: {display: false},
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false

                }
            }],

            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                    // max: 5,
                    // min: 0,
                    // stepSize: .5
                }
            }]
        }
    }
});