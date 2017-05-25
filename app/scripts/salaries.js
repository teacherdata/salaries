$(() => {
  /**
  * Salaries module
  *
  * Retrieves and formats teacher salary data
  *
  * @class
  */
  const salaries = ((document, $) => {
    'use strict'

    /** @constant {string} */
    const endpoint = 'https://cdn.rawgit.com/chrisvogt/ed85273a674001e3c585/raw/d8db84d982d666dc9b5a18a5c60c6f8756818181/teacher-est-avg-salary.json'

    /** @constructs */
    function init () {
      applyUIBindings()
      get(stateFactory)
    }

    /**
    * Get component data.
    * @param cb A callback function the data is passed to.
    * @method
    */
    function get (cb) {
      return $.ajax({
        url: endpoint,
        dataType: 'json',
        success: (data) => cb(data)
      }).responseJSON
    }

    /**
    * Create states.
    * @param data The raw data containing states data.
    */
    function stateFactory (data) {
      const states = extractStates(data)

      buildStateOptions(states)

      setStates([
        states[randomNumber(states.length)],
        states[randomNumber(states.length)]
      ], data)
    }

    /**
    * Extracts an array of states from the states object.
    */
    function extractStates (data) {
      let states = []

      for (let state in data) {
        if (data.hasOwnProperty(state) && state !== 'United States') {
          states.push(state)
        }
      }

      return states
    }

    /**
    * Builds state options for form select inputs.
    */
    function buildStateOptions (states) {
      let el = $('.states')

      for (var state in states) {
        el.append('<option>' + states[state] + '</option>')
      }
    }

    /**
    * Loads state data into the chart series.
    */
    function setStates (states, data) {
      let chart = $('#container').highcharts()

      for (let i = 0, max = 2; i < max; i++) {
        chart.legend.allItems[i].update({
          name: states[i]
        })
      }

      chart.series[0].setData(getValues(data[states[0]]), false)
      chart.series[1].setData(getValues(data[states[1]]), false)
      chart.redraw()
    }

    /**
    * Extracts values from a state set.
    */
    function getValues (series) {
      let values = []

      for (var key in series) {
        if (series.hasOwnProperty(key)) {
          values.push(series[key])
        }
      }

      return values
    }

    /**
    * @method applyUIBindings Apply UI bindings.
    */
    function applyUIBindings () {
      // state dropdown change events
      $('.states').change(function () {
        if ($('#stateA').val() !== 'State A' && $('#stateB').val() !== 'State B') {
          return $.ajax({
            url: endpoint,
            dataType: 'json',
            success: function (r) {
              stateFactory(r)
              setStates([$('#stateA').val(), $('#stateB').val()], r)
            }
          }).responseJSON
        }
      })
    }

    /**
     * Returns a random number above 0 below a max length.
     * @method randomNumber
     */
    function randomNumber (max) {
      return Math.floor(Math.random() * max)
    }

    return {
      init: init
    }
  })(document, jQuery)

  salaries.init()
})
