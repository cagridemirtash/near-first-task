# Near-First-Task

- If run this project, follow these steps;

```git
  git clone https://github.com/cagridemirtash/near-first-task.git
  yarn
  yarn build:release
  near dev-deploy ./build/release/simple.wasm -> Create ./neardev -> Change value of CONTRACT_NAME from dev.... to your dev account
  Run again -> near dev-deploy ./build/release/simple.wasm
  export $CONTRACT <function in CONTRACT> <input JSON>
```
## Task List
- [x] Change helloWorld function to return the string hello + name
- [x] Change this function take a string parameter called name, And return the string hello + name
- [x] Change this function take a Array(string) parameter called names, And return the string hello names[0] hello names[1] ... hello names[n]

## Task Screenshot

- ![Task-Function-1](/path/to/image.png "Text to show on mouseover")
- ![Task-Console-1](/path/to/image.png "Text to show on mouseover")
- ![Task-Function-2](/path/to/image.png "Text to show on mouseover")
- ![Task-Console-2](/path/to/image.png "Text to show on mouseover")
- ![Task-Function-3](/path/to/image.png "Text to show on mouseover")
- ![Task-Console-3](/path/to/image.png "Text to show on mouseover")
