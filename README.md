## Instructions

To get started `pnpm install` followed by `pnpm build`.
This will create dist/main.js, which is runnable via `node ./dist/main.js`.
You can also inspect the contents of `./dist/main.js` to see what wound up in the bundle

## Linking to a local copy of clipper2-ts

You can change the package.json to point at a `file:` URL to a local checkout of clipper2-ts.
Now when that clipper2-ts is built, a `pnpm i && pnpm build` in this directory will re-bundle and you can see how the size changed.