const randomMessage = (notifications) =>
  notifications[Math.floor(Math.random() * notifications.length)];

const notifications = [
  {
    person: 'Mac',
    message: 'Hello! This is git-cherry-pick!',
  },
  {
    person: 'Deandre',
    message: 'Hello, I hope to be a comedian one day',
  },
  {
    person: 'Charlie',
    message: 'Hello, I am the king of the rats',
  },
];

const { person, message } = randomMessage(notifications);
alert(`${person} says: ${message}`);