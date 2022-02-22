var options = {
          series: [
          {
            name: 'Elco',


            data: [
                {
                x: 'v1.1',
                y: [
                  new Date('2022-2-22').getTime(),
                  new Date().getTime()
                ]
              },
              {
                x: 'v1.0',
                y: [
                  new Date('2021-6-01').getTime(),
                  new Date('2022-2-22').getTime()
                ]
              },
              {
                x: 'v0.5-v1.0 Development',
                y: [
                  new Date('2021-1-04').getTime(),
                  new Date('2021-6-01').getTime()
                ]
              },
              {
                x: 'Github Pre-build',
                y: [
                  new Date('2020-12-20').getTime(),
                    new Date('2021-1-11').getTime()
                ]
              },
              {
                x: 'Pre-build (Bio-functions)',
                y: [
                  new Date('2020-8-01').getTime(),
                  new Date('2020-12-26').getTime()
                ]
              }
            ]
          },

        ],
          chart: {
          height: 450,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        stroke: {
          width: 1
        },
        fill: {
          type: 'solid',
          opacity: 0.6
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();