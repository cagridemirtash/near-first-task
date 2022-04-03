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

### Task 1
![Task-Function-1](./task-img/task-1.PNG)
![Task-Console-1](./task-img/task-console-1.PNG)
### Task 2
![Task-Function-2](./task-img/task-2.PNG)
![Task-Console-2](./task-img/task-console-2.PNG)
### Task 3
![Task-Function-3](./task-img/task-3.PNG)
![Task-Console-3](./task-img/task-console-3.PNG)
