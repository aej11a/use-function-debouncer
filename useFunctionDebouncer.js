import {useState} from 'react'
export const useFunctionDebouncer = () => {
    const [timer, setTimer] = useState(null)

    const debounce = (dbFunc, delay) => {
        if(timer){
            clearTimeout(timer)
        }
        setTimer(setTimeout(() => dbFunc(), delay))
    }

    const cancelDebounce = () => {
        if(timer){
            clearTimeout(timer)
        }
        setTimer(timer)
    }

    return {debounce, cancelDebounce}
}