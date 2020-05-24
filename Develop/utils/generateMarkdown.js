function generateMarkdown(data) {
  return `# ${data.project.trim()}

  \n
  ![GitHub](https://img.shields.io/github/license/${data.username.trim()}/${data.repo.trim()})\n

  ## Description
  ${data.description.trim()}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Use the following to install the package: 
  \`\`\`
  ${data.install.trim()}
  \`\`\`
  
  ## Usage
  ${data.usage.trim()}

  ## Contributing
  ${data.contributing.trim()}

  ## License
  This application is licensed under the ${data.license.trim()} license.
  
  ## Tests
  \`\`\`
  ${data.tests.trim()}
  \`\`\`

  ## Questions
  If you have any questions about the application you can open a ticket or contact ${data.name.trim()} directly at ${data.email.trim()}

  \n
  <img src="https://avatars.githubusercontent.com/${data.username.trim()}" style="width: 40px; hight:40px; border-radius:100%">\n

  ## Copyright:

  ${data.name} (${data.username.trim()})

  © 2020 All Rights Reserved
  `;
}

module.exports = generateMarkdown;
