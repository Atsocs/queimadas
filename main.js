let endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode';

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText);
		if(response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
        // Only accept from BR
		if(response.countryCode !== "BR") {
			console.log('sorry, only queries from Brazil are allowed.')
            return
		}
        
	}
};
xhr.open('GET', endpoint, true);
xhr.send();