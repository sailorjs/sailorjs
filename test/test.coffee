# sailor = require '../'
assert = require 'assert'
should = require 'should'

fs     = require('fs')
path   = require('path')
util   = require('util')
yaml   = require('js-yaml')

describe 'Parse YAML file', ->
  it 'should be ok', ->

    filename = path.join(__dirname, "../sailor.yml")
    contents = fs.readFileSync(filename, "utf8")
    data = yaml.load(contents)
    console.log data
    # console.log util.inspect(data, false, 10, true)
