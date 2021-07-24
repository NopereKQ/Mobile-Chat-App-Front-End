import { messages } from '../data/messagesData.js';

console.log(messages.find(c => c.firstname == "A"))

export function handleSearch() {
    let inputData = event.path["0"].value;
    let appMessages = event.path["2"].childNodes["5"];


    console.log(inputData)
    console.log(appMessages)
}