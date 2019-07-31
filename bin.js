#!/usr/bin/env node

const split = require('split2')
const speedometer = require('speedometer')
const { EOL } = require('os')

const speed = speedometer()

let max = 0
const barLength = 15

process.stdin
  .pipe(split(map))
  .pipe(process.stdout)

function map (line) {
  const s = speed(1)
  return getBar(s) + ' - ' + s.toFixed(1) + ' lines/s - ' + line + EOL
}

function getBar (s) {
  if (s > max) max = s
  const percentage = s / max
  const proportion = (percentage * barLength).toFixed(0)
  const bar = []
  for (let index = 0; index < barLength; index++) {
    bar[index] = index <= proportion ? '█' : '░';

  }
  return bar.join('')
}
