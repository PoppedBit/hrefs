(function () {
    // Function to open multiple URLs
    function openMultipleLinks(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the URLs from the hrefs attribute and split them into an array
      const urls = event.currentTarget.getAttribute('hrefs').split(',');
  
      // Open each URL in a new tab
      urls.forEach((url) => {
        const trimmedUrl = url.trim();
        if (trimmedUrl) {
          window.open(trimmedUrl, '_blank');
        }
      });
    }
  
    function initialize() {
        // Attach the event listener to the document
        document.addEventListener('click', function (event) {
          // Only handle clicks on <a> elements with the hrefs attribute
          if (event.target.tagName === 'a' && event.target.hasAttribute('hrefs')) {
            openMultipleLinks(event);
          }
        });
      }
  
    // Expose the initialize function globally
    window.hrefs = {
      init: initialize,
    };
  })();

    // Initialize the library after the DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        MultiLink.init();
    });