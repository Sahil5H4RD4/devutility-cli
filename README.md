# DevUtility CLI 🚀

A developer helper CLI tool that provides useful information from APIs. Built with Node.js, TypeScript, Commander, and Axios using Object-Oriented Programming principles.

## Features

- **greet**: Greet the user with a customized message.
- **weather**: Get the current weather for any city (Powered by OpenWeatherMap API).
- **github**: Fetch GitHub user profile statistics (Powered by GitHub API).
- **quote**: Get a random programming or motivational quote (Powered by Quotable API).
- **joke**: Get a random programming joke (Powered by Official Joke API).
- **fileinfo**: Display detailed file size and creation date.
- **uuid**: Generate a random UUID.
- **time**: Display the current time.
- **random**: Generate a random number.
- **currency**: Convert currency (Powered by ExchangeRate-API).

## Installation

```bash
# Clone the repository
git clone https://github.com/sahil/devutility-cli.git
cd devutility-cli

# Install dependencies
npm install

# Build the TypeScript code
npm run build

# Link the package globally
npm link
```

## Usage

Once installed and linked, you can use the `devutil` command globally.

```bash
devutil greet Sahil
devutil weather Pune
devutil github sahil
devutil quote
devutil joke
devutil fileinfo package.json
devutil uuid
devutil time
devutil random
devutil currency USD INR
```

You can explore all available commands using the help flag:
```bash
devutil --help
```

## Check Version
```bash
devutil --version
```

## Author
Sahil

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT License](https://choosealicense.com/licenses/mit/)
