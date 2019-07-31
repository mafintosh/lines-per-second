#!/usr/bin/env node

const split = require('split2')
const speedometer = require('speedometer')
const { EOL } = require('os')

const speed = speedometer()

process.stdin
  .pipe(split(map))
  .pipe(process.stdout)

function map (line) {
  const s = speed(1)
  return s.toFixed(1) + ' lines/s - ' + line + EOL
}
