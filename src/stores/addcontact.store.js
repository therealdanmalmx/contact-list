import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';

const contacts = [];

const store = writable(undefined);

export default {
    subscribe: store.subscribe,
    addContact() {
        store.update((store) => {
            const addThis = {
                id: store.id,
                name: store.name,
                phone: store.phone,
                description: store.description
            }
            contacts.push(addThis);
        }); 
    },
    addContactLength() {
        return contacts.length > 0
    }

};