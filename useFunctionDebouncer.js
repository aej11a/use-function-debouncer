import {useState} from 'react'
export const useFunctionDebouncer = () => {
    //we need to keep the setTimeout timer in state so we can cancel it later if needed
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

    return [debounce, cancelDebounce]
}
