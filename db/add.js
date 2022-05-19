// const {v4} = require("uuid");

const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const add = async(name, email, phone)=> {
    const contacts = await getAll();
    const newContact = { name, email, phone };
    for (let i = 0; i < contacts.length + 1; i++) {
        if (+contacts[i]?.id !== i + 1) {
          contacts.push({ id: `${i + 1}`, ...newContact });
          break;
        }
      }
      contacts.sort((a, b) => a.id - b.id);
     
    await updateContacts(contacts);
    return newContact;
}

module.exports = add;