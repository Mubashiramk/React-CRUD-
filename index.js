Script started on Sun Oct 16 01:33:31 2022
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/sript/index.js

node:internal/modules/cjs/loader:988
  throw err;
  ^

Error: Cannot find module '/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/sript/index.js'
[90m    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:833:27)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m {
  code: [32m'MODULE_NOT_FOUND'[39m,
  requireStack: []
}
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

[33m3[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

(node:46457) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:1
import { faker } from "@faker-js/faker";
^^^^^^

SyntaxError: Cannot use import statement outside a module
[90m    at Object.compileFunction (node:vm:360:18)[39m
[90m    at wrapSafe (node:internal/modules/cjs/loader:1084:15)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1119:27)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

(node:46502) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:4
export let USERS = [
^^^^^^

SyntaxError: Unexpected token 'export'
[90m    at Object.compileFunction (node:vm:360:18)[39m
[90m    at wrapSafe (node:internal/modules/cjs/loader:1084:15)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1119:27)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:15
    email: faker.internet.email(),
                          ^

TypeError: Cannot read properties of undefined (reading 'email')
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:15:27[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:21:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:16
    firstName: faker.internet.userName(),
                              ^

TypeError: Cannot read properties of undefined (reading 'userName')
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:16:31[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:21:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:15
    email: faker.internet.email(),
                          ^

TypeError: Cannot read properties of undefined (reading 'email')
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:15:27[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:21:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

[33m3[39m
success
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:16
    email: faker.internet.email(),
                          ^

TypeError: Cannot read properties of undefined (reading 'email')
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:16:27[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:23:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

node:internal/modules/cjs/loader:988
  throw err;
  ^

Error: Cannot find module 'faker-js/faker'
Require stack:
- /Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js
[90m    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:833:27)[39m
[90m    at Module.require (node:internal/modules/cjs/loader:1057:19)[39m
[90m    at require (node:internal/modules/cjs/helpers:103:18)[39m
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:2:15[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m {
  code: [32m'MODULE_NOT_FOUND'[39m,
  requireStack: [
    [32m'/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js'[39m
  ]
}
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:15
    email: faker.internet.email(),
                          ^

TypeError: Cannot read properties of undefined (reading 'email')
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:15:27[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:21:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

[33m3[39m
success
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

/Users/mubashiramk/Documents/Job/creed&bear/frontend/src/script/index.js:15
    id: faker.internet.id(),
                       ^

TypeError: faker.internet.id is not a function
    at createRandomUser [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:15:24[90m)[39m
    at [90m/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:23:14
    at Array.forEach (<anonymous>)
    at Object.<anonymous> [90m(/Users/mubashiramk/Documents/Job/creed&bear/frontend/[39msrc/script/index.js:22:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1155:14)[39m
[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1033:32)[39m
[90m    at Function.Module._load (node:internal/modules/cjs/loader:868:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
[90m    at node:internal/main/run_main_module:22:47[39m
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004hnpm run script1[?2004l

> frontend@0.1.0 script1
> node ./src/script/index.js

[33m3[39m
success
[1m[7m%[27m[1m[0m                                                                                                                                          [0m[27m[24m[Jmubashiramk@Mubashiras-MacBook-Air frontend % [K[?2004h