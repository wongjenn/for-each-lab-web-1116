function consoleIndexElement(element, index, array){
  console.log(`${index}: ${element}`)
}

function iterativeLog(array){
  array.forEach(consoleIndexElement)
}

function iterate(callback){
  var animals = ['tigers', 'lions', 'bears']
  animals.forEach(callback)
  return animals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
