function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License
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
