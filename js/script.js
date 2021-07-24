import { messages } from './data/messagesData.js';
import { stories } from './data/storiesData.js';

const storiesCont = document.querySelector('.app__stories-cont');
const messagesCont = document.querySelector('.app__messages');


stories.forEach((el) => {

    let storiesDiv = document.createElement('div');
    storiesDiv.classList.add('app__stories-story')

    let storiesImage = document.createElement('img')
    storiesImage.setAttribute('src', `./img/${el.avatar}`)
    storiesImage.classList.add('app__stories-story-image')
    if(el.unread === 'Yes') {
        storiesImage.classList.add('unread')
    }

    let named = document.createElement('p')
    
    let firstname = document.createElement('span')
    firstname.classList.add('firstname')
    firstname.textContent = el.firstname
    
    let lastname = document.createElement('span')
    lastname.classList.add('lastname')
    lastname.textContent = el.lastname


    storiesCont.appendChild(storiesDiv)
    storiesDiv.appendChild(storiesImage)
    storiesDiv.appendChild(named)
    named.appendChild(firstname)
    named.appendChild(lastname)
})

messages.forEach((el) => {
    let messagesDiv = document.createElement('div');
    messagesDiv.classList.add('app__messages-message')

    let messagesImage = document.createElement('img')
    messagesImage.setAttribute('src', `./img/${el.avatar}`)
    messagesImage.classList.add('app__messages-image')

    let messagesDivCont = document.createElement('div')
    messagesDivCont.classList.add('app__messages-message-cont')


    let named = document.createElement('p')
    
    let firstLastName = document.createElement('p')
    firstLastName.classList.add('name')
    firstLastName.textContent = el.firstname + ' ' + el.lastname;

    let message = document.createElement('p')
    message.classList.add('message')
    message.textContent = el.message;

    let messageContDate = document.createElement('div')
    messageContDate.classList.add('message-cont-date')

    let Time = document.createElement('p')
    Time.classList.add('time')
    Time.textContent = el.time;

    let unreadMessage = document.createElement('div')
    unreadMessage.classList.add('undraw-message')


    messagesCont.appendChild(messagesDiv)
    messagesDiv.appendChild(messagesImage)
    messagesDiv.appendChild(messagesDivCont)
    messagesDivCont.appendChild(firstLastName)
    messagesDivCont.appendChild(message)
    messagesDivCont.appendChild(messageContDate)
    messageContDate.appendChild(Time)
    if (el.unread === 'Yes') {
        messageContDate.appendChild(unreadMessage)
    }
})
