function loadingAnimator() {

    function link(scope, element, attrs) {
      //setup required variables
      initializing = true;
      buttonText = null;
      timedOut = false;
      isLoading = false;
      timer = null;
      //TODO make configurable
      timeout = 1000;

      /**
      * Start the timeout check.
      * The timeout is based on the configuration value.
      * If the timeout is reached, the element will be reset.
      */
      function startTimeoutCheck() {
        timer = window.setTimeout(function() {
            timedOut = true;
            resetLoading(element);

            console.error('Loading animation has timed out after %d seconds.', timeout);
            //TODO broadcast to further handle the timeout
        }, timeout)
      }

      /**
      * Reset the loading style from the given element.
      * Whenever this is called, the isLoading state will be reset.
      */
      function resetLoading() {
        element.html(buttonText);
        element.removeClass('disabled');
        isLoading = false;
      }

      /**
      * Apply the loading style to the given element
      */
      function applyLoading() {
        element.html('Loading...');
        element.addClass('disabled');
      }

      /**
      * Set element into loading state.
      */
      element.click(function() {
        if (!isLoading) {
          isLoading = true;
          console.log('Click');
          //backup original text
          buttonText = element.html();
          applyLoading();

          startTimeoutCheck(element);
        }
      });

      /**
      * Monitor the given variable for any changes.
      * Once the variable changes, the loading is considered to be finished.
      * The element will then return into its original state.
      */
      scope.$watch(function() {
        return scope.observe; //workaround as the string 'scope.observe' does not trigger properly
      }, function(newValue, oldValue) {
        //check for initializing to prevent premature execution
        if(initializing) {
          initializing = false;
        } else {
          if (newValue && !timedOut) {
            window.clearTimeout(timer);
            resetLoading();
          }
        }
      });
    }

    return {
        restrict: 'A',
        scope: {
            observe: '=' //variable to be observed for changes
        },
        link: link
    };

}

angular.module('app').directive('loadingAnimator', loadingAnimator);
