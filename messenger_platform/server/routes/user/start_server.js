const { exec } = require('child_process')

module.exports = function(req,res){
	console.log(__dirname)
	var webServer = exec('python "../../../../manage.py" runserver', {cwd: __dirname},(error, stdout,stderr) => {
		if(error){
			throw error;
		}

		console.log(stdout)
		console.log(stderr)
		
	})	
}
