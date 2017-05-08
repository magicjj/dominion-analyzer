var fs = require('fs');

//fs.unlinkSync('output.json');

var writeOutput = (str) => fs.appendFileSync('output.json', str);

fs.readdirSync(".", "utf8", (err, files) => {
  files.forEach(file => {
  
    fs.readFileSync(file.path, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }

		writeOutput(JSON.stringify(data) + ", ");
	  console.log(data);
	});
  });
})

