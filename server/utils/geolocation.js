const XMLHttpRequest = require('xhr2');

const endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode,region,city,lat,lon';

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let response = JSON.parse(this.responseText);
		if (response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
	}
};
xhr.open('GET', endpoint, true);
xhr.send();

module.exports = xhr;