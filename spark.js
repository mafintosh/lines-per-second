#!/usr/bin/env node

const split = require('split2')
const speedometer = require('speedometer')
const { EOL } = require('os')

const speed = speedometer()

process.stdin
  .pipe(split(map))
  .pipe(process.stdout)

let max = 0

function map (line) {
  const s = speed(1)
  if (s > max) max = s
  const percentage = s / max
  const proportion = (percentage * 10).toFixed(0)
  const bar = (new Array(10)).map((segment, i) => i <= proportion ? '█' : '░')

  return bar + ' - ' + line + EOL
}
