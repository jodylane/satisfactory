# Component & Section Generator

This plugin generates and renames all of the necessary files for a new component. It supports:

- components (alias: c)
- sections (alias: s)

## Usage

Use the `generate` script to call the `index.js` file in this folder. You can use yarn to run the
following commands:

    yarn generate component <Name>
    yarn generate c <Name>
    yarn generate section <Name>
    yarn generate s <Name>

Use PascalCase for new component and section names.

It pulls the starter files from `utils/generate-component/.ComponentStarter` and inserts them
into the base project in the specified directory, replacing Component with the new Name in both the
file names and content.

The content of `*.stories.jsx` is commented out to avoid creating unnecessary stories.
