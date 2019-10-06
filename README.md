# useFunctionDebouncer

useFunctionDebouncer is a React hook which can *debounce* (or delay) a function and provide a method to cancel the function.

---

### What is debouncing?

*Debouncing* means delaying a function call.

### How do I use it?

Use it like this:  
`const {debounce, cancelDebounce} = useFunctionDebouncer()`

Pass a _**function to debounce**_ and a _**time delay (in ms) to debounce it by**_ like this:  
`debounce(() => console.log("Debounce me!"), 1000)`

That will run `console.log(...)` after 1 second (1000 ms)

### What else can I do?

If you'd like to _**cancel the function's execution during the debounce**_, run `cancelDebounce()`

If you'd like to use _**multiple debouncers**_, reassign the returned object's properties like this:  

```js
const {debounce: firstDebouncer, cancelDebounce: cancelFirstDebouncer} = useFunctionDebouncer()
const {debounce: secondDebouncer, cancelDebounce: cancelSecondDebouncer} = useFunctionDebouncer()
```
