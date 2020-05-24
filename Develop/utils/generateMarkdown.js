function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  This application is licensed under the ${data.license} license
  
  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the application you can open a ticket or contact ${data.name} directly at ${data.email}
  `;
}

module.exports = generateMarkdown;
