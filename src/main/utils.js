export default {
  loadJSON: (path, done) => {
    const xobj = new XMLHttpRequest()

    xobj.overrideMimeType('application/json')
    xobj.open('GET', path, true)
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        done(xobj.responseText)
      }
    }
    xobj.send(null)
  }
}
