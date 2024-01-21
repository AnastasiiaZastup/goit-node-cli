// contacts.js

const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "books.json");

async function listContacts() {
  const listAll = await fs.readFile(path, "utf-8");
  return JSON.parse(listAll);
}

async function getContactById(contactId) {
  const contact = await listContacts();
  const result = contact.find((item) => item.id === id);
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
