#useFunctionDebouncer

useFunctionDebouncer is a React hook which can *debounce* (or delay) a function and provide a method to cancel the function.

*Debouncing* means delaying a function call.

Use it like this:

`const {debounce, cancelDebounce} = useFunctionDebouncer()`

Pass a function to debounce and time delay (in ms) to debounce it by like this:

`debounce(() => console.log("Debounce me!"), 1000)`

That will run `console.log(...)` after 1 second (1000 ms)

If you'd like to cancel the function's execution during the debounce, run `cancelDebounce()`

If you'd like to use multiple debouncers, reassign the returned object's properties like this:

```js
const {debounce: firstDebouncer, cancelDebounce: cancelFirstDebouncer} = useFunctionDebouncer()
const {debounce: secondDebouncer, cancelDebounce: cancelSecondDebouncer} = useFunctionDebouncer()
``` 