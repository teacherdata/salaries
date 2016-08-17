/**
 * Salaries module
 *
 * Retrieves and formats teacher salary data
 *
 * @author Chris Vogt <mail@chrisvogt.me>
 */
var salaries = (function(document, $) {

  'use strict';

  /**
   * Data endpoint.
   *
   * @var {String}
   */
  var endpoint = 'https://cdn.rawgit.com/chrisvogt/ed85273a674001e3c585/raw/d8db84d982d666dc9b5a18a5c60c6f8756818181/teacher-est-avg-salary.json';

  /**
   * Init method.
   */
  function init() {
    applyUIBindings();
    getData();
  }

  /**
   * Get data and start the process.
   */
  function getData() {
    return $.ajax({
      url: endpoint,
      dataType: 'json',
      success: function(r) {
        stateFactory(r);
      }
    }).responseJSON;
  }

  /**
   * Create states.
   */
  function stateFactory(data) {
    var states = extractStates(data);

    buildStateOptions(states);
    setStates([states[Math.floor(Math.random() * states.length) + 1], states[Math.floor(Math.random() * states.length) + 1]], data);
  }

  /**
   * Extracts an array of states from the states object.
   */
  function extractStates(data) {
    var states = [];

    for (var state in data) {
      if (data.hasOwnProperty(state) && state !== 'United States') {
        states.push(state);
      }
    }

    return states;
  }

  /**
   * Builds state options for form select inputs.
   */
  function buildStateOptions(states) {
    var el = $('.states');

    for (var state in states) {
      el.append('<option>' + states[state] + '</option>');
    }
  }

  /**
   * Loads state data into the chart series.
   */
  function setStates(states, data) {
    var chart = $('#container').highcharts();

    for (var i = 0; i < 2; i++) {
      chart.legend.allItems[i].update({
        name: states[i]
      });
    }
    chart.series[0].setData(getValues(data[states[0]]), false);
    chart.series[1].setData(getValues(data[states[1]]), false);
    chart.redraw();
  }

  /**
   * Extracts values from a state set.
   */
  function getValues(series) {
    var values = [];

    for (var key in series) {
      if (series.hasOwnProperty(key)) {
        values.push(series[key]);
      }
    }

    return values;
  }

  /**
   * Apply UI bindings.
   */
  function applyUIBindings() {
    /* Select box events */
    $('.states').change(function() {
      if ($('#stateA').val() !== 'State A' && $('#stateB').val() !== 'State B') {
        return $.ajax({
          url: endpoint,
          dataType: 'json',
          success: function(r) {
            stateFactory(r);
            setStates([$('#stateA').val(), $('#stateB').val()], r);
          }
        }).responseJSON;
      }
    });
  }

  return {
    init: init
  };

})(document, jQuery);
