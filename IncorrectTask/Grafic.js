
fetch("http://localhost:3000/massiv1")
    .then(response => response.json())
    .then(massiv1 => {
        fetch("http://localhost:3000/massiv2")
            .then(response => response.json())
            .then(massiv2 => {
                //console.log(massiv1);
                //console.log(massiv2);
                var chart = new Chartist.Line('.ct-chart', {
                  //labels: ['0', '1', '2', '03', '0.2', '0.25', '0.3', '0.35', '0.4', '0.45', '0.5'],
                  // Naming the series with the series object array notation
                  series: [{
                    name: 'series-1',
                    data: massiv1
                  }, {
                    name: 'series-2',
                    data: massiv2
                  }]
                }, {
                  fullWidth: true,
                  // С каждой серией можно указать имя серии, которое будет определять набор данных
                  series: {
                    'series-1': {
                     showPoint: false
                    },
                    'series-2': {
                      showPoint: false
                    }
                  }
                }, [
                  // Вы можете использовать адаптивную конфигурацию, перекрывая конфигурации ещё больше
                  ['screen and (max-width: 320px)', {
                    series: {
                      'series-1': {
                        lineSmooth: Chartist.Interpolation.none(),
                        showPoint: true
                      },
                      'series-2': {
                        lineSmooth: Chartist.Interpolation.none(),
                        showPoint: true
                      }
                    }
                  }]
                ]);
            })
    });
