import ReactHighcharts from 'react-highcharts'
import highchartsMore from 'highcharts-more'
import highchartsExporting from 'highcharts-exporting'

let hasBeenInitialized = false

function initHighcharts () {
  if (!hasBeenInitialized) {
    highchartsMore(ReactHighcharts.Highcharts)
    highchartsExporting(ReactHighcharts.Highcharts)
    ReactHighcharts.Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    })
    hasBeenInitialized = true
  }
}

export default initHighcharts
