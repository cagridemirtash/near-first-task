import { storage, Context } from "near-sdk-as";

// return the string 'hello world'
// Task 1: Change this function to return the string 'hello <Your Name>'
/*
  export function helloWorld(): string {
  return "hello Cagri";
}
*/
// Task 2: Change this function take a string parameter called name, And return the string 'hello <name>'
/*
  export function helloWorld(name: string): string {
  return "hello " + name;
}
*/
// Task 3: Change this function take a Array<string> parameter called names, And return the string 'hello <names[0]> <names[1]> ... <names[n]>'
export function helloWorld(names: Array<string>): string {
  return names.map<string>((name) => "hello " + name).join(" ");
}

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`;
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`;
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`;
}
