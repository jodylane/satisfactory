# Generator

This plugin generates and renames all of the necessary files for a new component. It supports:

- atom (alias: a)
- template (alias: t)
- organism (alias: o)
- molecule (alias: m)
- screen (alias: s)

## Usage

Use the `generate` script to call the `index.js` file in this folder. You can use yarn to run the
following commands:

```bash
yarn generate atom <Name>
```

```bash
yarn generate a <Name>
```

```bash
yarn generate template <Name>
```

```bash
yarn generate t <Name>
```

```bash
yarn generate organism <Name>
```

```bash
yarn generate o <Name>
```

```bash
yarn generate molecule <Name>
```

```bash
yarn generate m <Name>
```

```bash
yarn generate screen <Name>
```

```bash
yarn generate s <Name>
```

Use PascalCase for new component and section names.

It pulls the starter files from `utils/generate-component/.ComponentStarter` and inserts them
into the base project in the specified directory, replacing Component with the new Name in both the
file names and content.

The content of `*.stories.js` is commented out to avoid creating unnecessary stories.
