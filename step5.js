var fs = require('fs')
var path = require('path')
var files = undefined
var filter =undefined

fs.readdir(process.argv[2],finishedOpenDir)

filter="."+process.argv[3]

function finishedOpenDir(err,files){
	if (err) throw err
	files.forEach(function(file){
		if (path.extname(file)===filter) console.log(file)
	})
}


