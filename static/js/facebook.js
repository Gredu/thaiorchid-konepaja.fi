/**
 * Get HTML asynchronously
 * @param  {String}   url      The URL to get HTML from
 * @param  {Function} callback A callback funtion. Pass in "response" variable to use returned HTML.
 */

let url = 'https://www.facebook.com/pg/THAI-Orchid-Konepaja-395884650821419/posts/?ref=page_internal'

let getHTML = function(url, callback) {

	// Feature detection
	if (!window.XMLHttpRequest) return;

	// Create new request
	let xhr = new XMLHttpRequest();

	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof(callback) === 'function' ) {
			callback(this.responseXML);
		}
	}

	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();

};

getHTML(url, function(response) {
  console.log(response);
});
