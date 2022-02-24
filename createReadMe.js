const inquirer = require('inquirer');
inquirer.prompt([
	{
		name: 'Description',
		type: 'input',
		message: 'Enter description'
	},
	{
		name: 'tableOfContents',
		type: 'input',
		message: 'Enter contents'
	},
	{
		name: 'installationInstructions',
		type: 'input',
		message: 'Enter instructions',
	},
	{
		name: 'usage',
		type: 'input',
		message: 'Enter usage',
	}
]).then(answers => {
	console.log(answers);
});
