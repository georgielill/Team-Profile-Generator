# Team Profile Generator

This is a command-line application built with Node.js that allows users to generate a webpage displaying summaries for each member of a software engineering team. The application gathers information about the team members using prompts, then generates an HTML file based on the provided data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To install and run the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running the command `npm install`.

## Usage

Once the installation is complete, you can run the application by executing the command `node index.js` in your terminal. Follow the prompts to enter information about the team members, starting with the team manager. You will be prompted to add additional members, such as engineers and interns, until you finish building the team.

Here's a breakdown of the prompts:
- Enter the manager's name, ID, email, and office number.
- Choose to add an engineer, an intern, or finish building the team.
- For engineers, enter their name, ID, email, and GitHub username.
- For interns, enter their name, ID, email, and school.

After entering all the team members' information, the application will generate an HTML file (`team.html`) in the `output` directory. This HTML file will display summaries for each team member, including their name, ID, email, and additional details specific to their role (office number for managers, GitHub username for engineers, and school for interns).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
