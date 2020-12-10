const testObj = {
  testName: 'Some name',
  testFunc: () => {
    return {
      inputEl: document.querySelector('input'),
      txtNode: document.TEXT_NODE
    }
  }
}

console.log(testObj.testFunc)
console.log(testObj.testName)
