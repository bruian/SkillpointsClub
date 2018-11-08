const datas = [
  { id: 50, parent: null, level: 1, path: '50' },
  { id: 51, parent: 50, level: 2, path: '50->51' },
  { id: 52, parent: 50, level: 2, path: '50->52' },
  { id: 53, parent: 52, level: 3, path: '50->52->53' },
  { id: 54, parent: 50, level: 2, path: '50->54' },
  { id: 55, parent: 54, level: 3, path: '50->54->55' },
  { id: 56, parent: 54, level: 3, path: '50->54->56' },
  { id: 57, parent: 52, level: 3, path: '50->52->57' },
  { id: 58, parent: 51, level: 3, path: '50->51->58' },
  { id: 59, parent: 55, level: 4, path: '50->54->55->59' },
  { id: 60, parent: 50, level: 2, path: '50->60' }
]

function constructHierarchy (rows, parentId) {
  let hRows = []

  for (let i = 0; i < rows.length; i++) {
    let record = Object.assign({}, rows[i])
    if (parentId === null && record.parent === null) {
      record.children = constructHierarchy(rows, record.id)

      hRows.push(record)
    } else if (record.parent === parentId) {
      record.children = constructHierarchy(rows, record.id)

      hRows.push(record)
    }
  }

  return hRows
}

function test() {
  let hierarchicalRows = []

  for (let j = 0; j < 20000; j++) {
    hierarchicalRows = constructHierarchy(datas, null)
  }
  
  hierarchicalRows = []
  console.log('ready')
}
