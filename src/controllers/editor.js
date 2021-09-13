const setupEditors = () => {

	htmlClass = jsonData.setup.htmlClass;
	let elems = document.getElementsByClassName(htmlClass);

	for (i = 0; i < elems.length; i++) {
		let htmlElement = elems[i];
		if (htmlElement.dataset.edit == undefined) { continue; }

		if (htmlElement.dataset.dataId == undefined) {
			addDataId(htmlElement);
		}
		makeEditor(htmlElement);
	}
}

const makeEditor = (htmlElement) => {

	let dataId = htmlElement.dataset.dataId;
  
	let dataIndex = jsonIndexFromNameValue(jsonData.data, 'id', dataId);
	if (dataIndex == undefined) { return; }
  
  let editorIndex = jsonIndexFromNameValue(jsonData.dataEdit, 'dataId', dataId);
  let editorType = jsonData.dataEdit[editorIndex].type;
  //console.log('editor type: ' + editorType);
  
  let valueLocation = jsonData.data[dataIndex].value;
  
  if (editorType == 'Selection') {
    makeInputSelection(htmlElement, valueLocation, editorIndex);
  }
  else {
    makeInputTextBox(htmlElement, valueLocation);
  }
}

const makeInputSelection = (htmlElement, valueLocation, editorIndex) => {
  htmlElement.innerHTML = `<select>
                            ${makeInputSelectionOptions(valueLocation, editorIndex)}
                           </select>`;
}

const makeInputSelectionOptions = (valueLocation, editorIndex) => {
  
  let html = `<option value="" style="background-color: #ffeeba;">${eval(valueLocation)}</option>`;
  
  return html;
}

const makeInputTextBox = (htmlElement, valueLocation) => {
  htmlElement.innerHTML = `<input style="" class="" type="text" value="${eval(valueLocation)}" onkeydown="" onchange="${valueLocation}=this.value; reloadVariable('${valueLocation}')">`;
}

