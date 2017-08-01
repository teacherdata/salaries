const XLSX = require('../node_modules/xlsx/')
const datasource = 'https://nces.ed.gov/programs/digest/d13/tables/xls/tabn211.60.xls'
const file = './src/data/tabn211.60.xls'
const opts = {
	cellFormula: true,
	bookVBA: true,
	cellNF: true,
	cellHTML: true,
	cellStyles: true,
	sheetStubs: true,
	cellDates: true
}

try {
  let wb = XLSX.readFile(file, opts)
  console.log(wb.Sheets['Digest 2013 Table 211.60']);
} catch(e) {
	let msg = ": error parsing " + file + ": " + e
	console.error(msg)
	process.exit(3)
}
