# Node.js Example for json2vars-setter

An experimental Node.js project to test out various tools.

## Requirements

- Node.js >= 16.0.0

## Project Structure

```bash
.
├── config.js          # Configuration settings
├── package.json       # Node.js project definition
├── sample.js          # Main implementation
└── test.js            # Test implementation
```

## Setup

```bash
# Install dependencies
npm ci
```

## Usage

Run the application

```bash
# Using npm script
npm start

# Or directly with Node.js
node sample.js
```

Run tests

```bash
npm test
```

## Package Scripts

- `npm start`: Run the JSON parser
- `npm test`: Run the test suite

## Implementation Details

### config.js

Provides configuration settings, specifically the path to the JSON configuration file.

### sample.js

Contains the main JSON parsing functionality

- `parseConfigJson(filePath, silent)`: Parse JSON configuration file
- `filePath`: Path to JSON file (optional, defaults to matrix configuration)
- `silent`: Boolean to suppress error messages (optional, defaults to false)

### test.js

Contains test cases using Jest framework.

## JSON Configuration Format

Plaese create `.github/workflows/nodejs_project_matrix.json`

```json
{
    "os": [
        "ubuntu-latest",
        "windows-latest",
        "macos-latest"
    ],
    "versions": {
        "nodejs": [
            "16",
            "18",
            "20",
            "22"
        ]
    },
    "ghpages_branch": "ghgapes"
}
```

## Development

This project uses

- Jest for testing
- Node.js native `fs` module for file operations
- Node.js native `path` module for path resolution

To add new features or modify existing ones

1. Make your changes
2. Add/update tests as needed
3. Run tests to ensure everything works
4. Update documentation if necessary

Note: The project is configured to override the `glob` package version to ^9.0.0 to avoid memory leaks.
