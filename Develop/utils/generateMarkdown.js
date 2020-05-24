function generateMarkdown(data) {
  return `# ${data.project}

  ## Description
  ${data.description}

  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg${data.username})

  [![GitHub Image](https://contributors-img.web.app/image?repo=brianlfarmerllc/Good_README_Generator)]${data.repo})

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Use the following to install the package: 
  ${data.install}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  This application is licensed under the ${data.license} license.
  
  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the application you can open a ticket or contact ${data.name} directly at ${data.email}

  ## Copyright:

  ${data.name}

  © 2020 All Rights Reserved
  `;
}

module.exports = generateMarkdown;
