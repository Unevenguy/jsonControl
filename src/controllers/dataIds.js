const setupDataIds = () => {

	htmlClass = jsonData.setup.htmlClass;
	let elems = document.getElementsByClassName(htmlClass);

	for (i = 0; i < elems.length; i++) {
		let htmlElement = elems[i];
		if (htmlElement.dataset.dataId == undefined) {
			addDataId(htmlElement);
		}
	}
}

const addDataId = (htmlElement) => {
  if (htmlElement.dataset.view != undefined) { addDataIdView(htmlElement); }
  if (htmlElement.dataset.edit != undefined) { addDataIdEdit(htmlElement); }
}

const addDataIdView = (htmlElement) => {
  
  let dataViewId = htmlElement.dataset.view;

	let viewIndex = jsonIndexFromNameValue(jsonData.dataView, 'id', dataViewId);
	if (viewIndex == undefined) { return; }
	let dataId = jsonData.dataView[viewIndex].dataId;

	htmlElement.dataset.dataId = dataId;
}

const addDataIdEdit = (htmlElement) => {
  
  let dataEditId = htmlElement.dataset.edit;

	let viewIndex = jsonIndexFromNameValue(jsonData.dataEdit, 'id', dataEditId);
	if (viewIndex == undefined) { return; }
	let dataId = jsonData.dataView[viewIndex].dataId;

	htmlElement.dataset.dataId = dataId;
}

const addDataLabel = (htmlElement) => {
  
	let dataView = htmlElement.dataset.view;

	let viewIndex = jsonIndexFromNameValue(jsonData.dataView, 'id', dataView);
	if (viewIndex == undefined) { return; }
	let dataId = jsonData.dataView[viewIndex].dataId;

	htmlElement.dataset.dataId = dataId;
}
