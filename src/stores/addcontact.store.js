import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';

const contacts = [
    {
        id: '1',
        name: 'John', 
        phone: '121313',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc'
    }
];

// const contact = {
//     id: uuidv4(),
//     name: "John Doe",
//     phone: "1234567890",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc"
// }

const store = writable(undefined);

export default {
    subscribe: store.subscribe,
    addContact() {
        store.update((store) => {
            const contact = {
                id: uuidv4(),
                name: store.name,
                phone: store.phone,
                description: store.description
            }
            contacts.push(contact);
        }); 
    },
    addContactLength() {
        contacts.length > 0
    },
    viewContacts() {
        return contacts;
    },
    deleteContact(id) {
        store.update(() => {
            contacts.filter((contact) => contact.id !== id);
        });
    },

};