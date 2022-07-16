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
];

const { person, message } = randomMessage(notifications);
alert(`${person} says: ${message}`);