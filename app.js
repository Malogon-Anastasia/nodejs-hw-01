const yargs = require("yargs");

const {hideBin} = require("yargs/helpers");
const contactsOperations = require("./products");

const invokeAction = async({action, id, name, email, phone})=> {
    switch(action){
        case "getAll":
            const contacts = await contactsOperations.getAll();
            console.table(contacts);
            break;
        case "getById":
            const contact = await contactsOperations.getById(id);
            if(!contact) {
                throw new Error(`Contact with id=${id} not found`);
            }
            console.log(contact);
            break;
        case "add":
            const newContact = await contactsOperations.add(name, email, phone);
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contactsOperations.updateById(id, data);
            if(!updateContact) {
                throw new Error(`Contact with id=${id} not found`);
            }
            console.log(updateContact);
            break;
        case "removeById":
            const removeContact = await contactsOperations.removeById(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action");
    }
}

const arr = hideBin(process.argv);

const {argv} = yargs(arr);
// const {argv} = yargs(process.argv.slice(2));

invokeAction(argv);