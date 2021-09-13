const setupViews = () => {

	htmlClass = jsonData.setup.htmlClass;
	let elems = document.getElementsByClassName(htmlClass);

	for (i = 0; i < elems.length; i++) {
		let htmlElement = elems[i];
		if (htmlElement.dataset.view == undefined) { continue; }
    //if (htmlElement.dataset.edit != undefined) { continue; }

		makeView(htmlElement);
		makeLabel(htmlElement);
	}
}

const makeView = (htmlElement) => {
  
	let dataId = htmlElement.dataset.dataId;
  
	let dataIndex = jsonIndexFromNameValue(jsonData.data, 'id', dataId);
	if (dataIndex == undefined) { return; }
	let valueLocation = jsonData.data[dataIndex].value;

	htmlElement.innerHTML = eval(valueLocation);
}

const makeLabel = (htmlElement) => {

	if (htmlElement.dataset.label == 'labelColon') { labelWithColon(htmlElement); }
}

const labelWithColon = (htmlElement) => {

	let dataId = htmlElement.dataset.dataId;

	let dataIndex = jsonIndexFromNameValue(jsonData.data, 'id', dataId);
	if (dataIndex == undefined) { return; }

	htmlElement.innerHTML = `${jsonData.data[dataIndex].label}: ${htmlElement.innerHTML}`;

}
