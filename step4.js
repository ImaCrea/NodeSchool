var fs = require('fs')
var count = undefined

function lineBreakCounter (callback) {
	fs.readFile(process.argv[2],'utf8', function giveResult (err,string){
		if (err) throw err
		count=string.split("\n").length-1
		callback()
	})
}

function displayCount () {
	console.log(count)
}

lineBreakCounter(displayCount)