# Tracer Core

Project Link: [tracer-core-new](https://tracer-core-new.web.cern.ch/)

## Welcome

Welcome to this project! This is a guide to help you get started and make the most out of it.

Before you continue please make sure to install these projects as well to test your
models and xml files against localhost.

[tracer-xml-provider](https://gitlab.cern.ch/tracer/tracer-xml-provider)
[tracer-models-provider](https://gitlab.cern.ch/tracer/tracer-models-provider)

## ATTENTION!

To ensure that you can use this project without any issues, please make sure that you have Node.js installed on your machine. The minimum required version is v16.16.0.

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

- git clone https://gitlab.cern.ch/tracer/tracer-core-new.git

2. Go to the cloned repository, open terminal and install dependencies

- npm i

This will install all the necessary packages listed in the package.json file.

## Available scripts

1. npm run dev
2. npm run preview
3. npm run start
4. npm run test
5. npm run coverage
6. npm run show-test-results

## Development

To run this project in development mode, use the following command

- npm run dev

This will start the development server on PORT : 5173 most of the time, if it doesn't then check it in terminal and see which port is used for development by VITE and open the project in your default web browser.

## Production

When you're ready to run this project in production mode, use the following command:

- npm run build

This will build your project.

- npm run start

This will start the production server, making your project accessible to the world.

## Running Tests

To run tests, execute the following command:

- npm run test

You can also see detailed information about coverage.

### For more detailed information about test coverage, follow these steps:

1. Run the test coverage command:

- npm run coverage

2. After the coverage is generated, display the test results in your browser by running:

- npm run show-test-results

This will provide you with an in-depth overview of the test coverage in a user-friendly format.

## Conclusion

That's it! Now you know how to get started with this project, and how to run it both in development and production modes. We hope you find this guide helpful, and if you have any questions or issues, please don't hesitate to contact us. Happy coding!
