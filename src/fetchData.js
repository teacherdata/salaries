/*

// Example: wb.Sheets['Digest 2013 Table 211.60'].A2.v

Row A = Title Row

Current: Rows B – H
Constant: I-O

A5 = US
A6 = Alabama
A66 = Wyoming

* DC takes up two rows

*/

const XLSX = require('../node_modules/xlsx/')
const states = require('./data/states.js')
const fs = require('fs')
const datasource = 'https://nces.ed.gov/programs/digest/d13/tables/xls/tabn211.60.xls'
const file = './src/data/tabn211.60.xls'
const sheet = 'Digest 2013 Table 211.60'
const ranges = {
  current: 'BCDEFGH'.split(''),
  constant: 'IJKLMNO'.split('')
}
const opts = {
	cellFormula: false,
	bookVBA: false,
	cellNF: false,
	cellHTML: false,
	cellStyles: false,
	sheetStubs: false,
	cellDates: false
}

/** State constructor */
function State(slug, name, code, current, constant) {
  this.slug = slug
  this.name = name
  this.code = code
  this.salaries = {
    current: current,
    constant: constant
  }
}

/**
 * Parses a series (row) of state salary data.
 *
 * @param {*} sheet
 * @param {*} stateNum
 * @param {*} type
 * @return
 */
const parseRow = (sheet, stateNum, type) => {
  let series = [];

  ranges[type].forEach(k => {
    series.push(Math.round(sheet[`${k}${stateNum}`].v))
  });

  return series;
}

const parseSheet = sheet => {
  let parsed = []

  states.forEach(state => {
    parsed.push(new State(
      state.slug,
      state.name,
      state.code,
      parseRow(sheet, state.row, 'current'),
      parseRow(sheet, state.row, 'constant')
    ))
  })

  return parsed
}

const saveFile = data => {
  const path = 'src/data/stateData.json'
  fs.writeFile(path, JSON.stringify(data), err => {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log('SUCCESS')
    }
  })
}

try {
  const wb = XLSX.readFile(file, opts)
  const parsed = parseSheet(wb.Sheets[sheet])

  saveFile(parsed)
} catch(e) {
	const msg = ": error parsing " + file + ": " + e
	console.error(msg)
	process.exit(3)
}

