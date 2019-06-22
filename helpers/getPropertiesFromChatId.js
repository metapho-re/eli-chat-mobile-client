import formatMinutes from './formatMinutes';
import getMonthName from './getMonthName';

const getPropertiesFromChatId = (chatId) => {
    const usernames = chatId.split('_')[0].split('.').join(', ');
    const d = new Date(Date.parse(chatId.split('_')[1]));
    const month = getMonthName(d.getMonth());
    const minutes = formatMinutes(d.getMinutes());
    const date = `Created: ${month} ${d.getDate()}, ${d.getFullYear()} (${d.getHours()}:${minutes})`;
    return { usernames, date };
};

export default getPropertiesFromChatId;
