$(() => {
  'use strict'

  /**
   * Salaries module
   *
   * Retrieves and formats teacher salary data
   *
   * @class
   */
  const app = ((document, $) => {
    const docElem = document.documentElement

    /** @constructs */
    function init() {
      $(document).foundation()
      userAgentInit()
      applyUIBindings()
    }

    /**
    * @method userAgentInit Store the UA string.
    */
    function userAgentInit() {
      docElem.setAttribute('data-useragent', navigator.userAgent)
    }

    /**
    * @method applyUIBindings Apply UI bindings.
    */
    function applyUIBindings() {
      /** @tutorial http://foundation.zurb.com/docs/components/joyride.html */
      $(document).on('click', '#start-jr', () => {
        $(document).foundation('joyride', 'start')
      })
    }

    return {
      init: init
    }
  })(document, jQuery)

  app.init()
})
