import os from "os"
 export function task(text){
    return `${text} ${os.type()}`
}
