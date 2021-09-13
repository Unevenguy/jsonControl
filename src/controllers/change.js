const reloadVariable = (jsonLocation) => {
	
  let dataIds = jsonSearchNameEqualsValueToArray(jsonData.data, 'value', jsonLocation)
  console.log(dataIds);
  
  changeViewsByDataIds(dataIds);
  
}

const changeViewsByDataIds = (dataIds) => {
  
  for (var i in dataIds) {
    //console.log('data = ' + dataIds[i]);
    
    let viewIds = jsonSearchNameEqualsValueToArray(jsonData.dataView, 'dataId', dataIds[i])
    //console.log('views = ' + viewIds)
    changeViewsByViewIds(viewIds);
  }
  
}

const changeViewsByViewIds = (viewIds) => {
  let htmlClass = jsonData.setup.htmlClass;
	let elems = document.getElementsByClassName(htmlClass);

  for (var i in viewIds) {
    let viewId = viewIds[i];

    for (i = 0; i < elems.length; i++) {
      let htmlElement = elems[i];
      if (htmlElement.dataset.view != viewId) { continue; }
      
      //console.log(htmlElement.dataset.view + ' = ' + viewId);

      makeView(htmlElement);
      makeLabel(htmlElement);
    }
    
  }

}

