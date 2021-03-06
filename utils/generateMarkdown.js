function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)<br />
  


  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  <br />
  ${data.license}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Questions
  Contact me:
  Github:[${data.username}](https://github.com/rbozal1)
  Email:[${data.email}](https://github.com/rbozal1)
  `;}

module.exports = generateMarkdown;
