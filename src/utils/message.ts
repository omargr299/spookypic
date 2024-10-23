import messages from '../constants/messages.json';

export function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}