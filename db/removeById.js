const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeById = async(contactId)=> {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id == contactId);
    if (idx === -1) {
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return removeContact;
    // const newContacts = contacts.filter((_, index) => index !== idx);
    // await updateContacts(newContacts);
    // return contacts[idx];
}

module.exports = removeById;