import os from "os"
import {task} from "./welcome.js"
console.log(os.homedir())
console.log(os.hostname());
console.log(os.version());
console.log(os.type());
console.log(task('Привет, юзер. Вижу ты зашел с'));
