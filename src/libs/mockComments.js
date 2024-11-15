import { faker } from '@faker-js/faker';

const roles = ['admin', 'user', 'moderator'];
const authorIDs = ['1', '2', '3', '4', '5'];

function createRandomUser(index) {
  return {
    id: String(index + 1),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    role: roles[Math.floor(Math.random() * roles.length)],
  };
}

function createRandomComment(index) {
  return {
    id: String(index + 1),
    comment: faker.lorem.paragraph(),
    author: { id: authorIDs[Math.floor(Math.random() * authorIDs.length)] },
  };
}

const users = Array.from({ length: 5 }, (_, i) => createRandomUser(i));
const comments = Array.from({ length: 30 }, (_, i) => createRandomComment(i));

export { users, comments };
