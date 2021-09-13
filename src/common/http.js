const postRequest = (url) => {
	var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("POST", url, true); 
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
				let response = xmlHttp.responseText;
				return response;
            }
        }
    }
}

const getRequest = (url) => {
	var xhr = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 300) {
                    reject("Error, status code = " + xhr.status)
                } else {
                    //var tempJSON = JSON.parse(this.responseText);
                    resolve(this.responseText);
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send();
    });

}


