// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown (data) {
  return `# ${data.title}

## Description
${data.Description}

## Table of Content 

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Instructions](#Instructions)
${renderLicenseLink(data.License)}
* [Contributing](#Contributing)

## Installation
${data.Installation}

${renderLicenseSection(data.License)}

${renderLicenseBadge(data.License)}

## Usage

This application is used for ${data.usage}

## Contributing

Contributors: ${data.Contribution}

## Email

${data.Email}

## Git Hub
[!GitHub](https://github.com/${data.UserName})`


}


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  }else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""
  } else {
    return `* [License](##license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ""
  } else {
    return `## License
    This project is licensed under the ${license}.`
  }
}

// TODO: Create a function to generate markdown for README


module.exports = generateMarkdown;
