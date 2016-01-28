exports.viewProject = function(req, res) {
	var name = req.params.name;
	console.log("prokect name is:"+name);
   res.render('project',{
   	'projectName':name
   });
};