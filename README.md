# ResourceFlow

**ResourceFlow** is a CLI tool for copying and managing resource files in your projects. It simplifies the process of moving assets, images, or other resources from one directory to another.

---

## Features

- Copy resources from one directory to another effortlessly.
- Configurable through a simple JavaScript configuration file.
- Provides clear logs for success, warnings, and errors.
- Lightweight and easy to use.

---

## Installation

To install ResourceFlow, use the following command:

```bash
npm install -g resourceflow
```

---

## Usage

ResourceFlow works through two main commands:

### 1. Initialize Configuration File

To create a default configuration file in your project directory, run:

```bash
npx resourceflow init
```

This will generate a file named `resourceflow.config.js` in your project directory with the following content:

```javascript
export default {
    resourceFlow: [
        {
            source: 'resources/assets',
            destination: 'public/assets'
        },
        {
            source: 'resources/images',
            destination: 'public/images'
        }
    ]
};
```

You can modify this file to suit your specific needs.

---

### 2. Run Copy Command

After setting up the configuration file, run the following command to copy the resources:

```bash
npx resourceflow
```

ResourceFlow will read the `resourceflow.config.js` file and copy files as specified in the configuration.

---

## Configuration File Structure

The configuration file (`resourceflow.config.js`) should export an object with a `resourceFlow` property. This property should be an array of objects, each specifying:

- **`source`**: The directory of the files to copy.
- **`destination`**: The target directory where the files will be copied.

Example:

```javascript
export default {
    resourceFlow: [
        {
            source: 'resources/assets',
            destination: 'public/assets'
        },
        {
            source: 'resources/images',
            destination: 'public/images'
        }
    ]
};
```

---

## Example Workflow

1. Install ResourceFlow globally:
   ```bash
   npm install -g resourceflow
   ```

2. Initialize the configuration file:
   ```bash
   npx resourceflow init
   ```

3. Modify `resourceflow.config.js` if needed.

4. Run the copy command:
   ```bash
   npx resourceflow
   ```

---

## Logs and Messages

ResourceFlow provides color-coded messages for better clarity:

- **Success (Green)**: Indicates successful copy operations.
- **Warnings (Yellow)**: Alerts you if the configuration file already exists during initialization.
- **Errors (Red)**: Displays issues, such as missing directories or invalid configurations.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Created By

This project was developed by Kenan Gündoğan. Contributions and feedback are welcome!

---

## Contribution

Contributions are welcome! If you have ideas or find bugs, feel free to open an issue or create a pull request on the GitHub repository.

---

## Links

- GitHub Repository: [ResourceFlow on GitHub](https://github.com/kenangundogan/resourceflow)
- npm Package: [ResourceFlow on npm](https://www.npmjs.com/package/resourceflow)
