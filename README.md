# babylon-jest
Unit test with Jest and babylon.js

**jest.config.ts**

```ts
preset: "ts-jest/presets/default-esm"
```

**package.json**

```json
"test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
```
