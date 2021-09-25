const XMLHttpRequest = require('xhr2');

const ip = '' // '177.23.184.166' // Usando esse ip para teste
const endpoint = `http://ip-api.com/json/${ip}?fields=status,message,countryCode,region,city,lat,lon`;

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