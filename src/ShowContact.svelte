<script>
    import addContact from './stores/addcontact.store.js';

</script>

<div class="show-contact">
    {#each addContact.viewContacts() as contact}
    <div class="contact-card">
        <p>Name: {contact.name}</p>
        <p>Phone: {contact.phone}</p>
        <p>Description: {contact.description}</p>
    </div>
    <button>Edit</button>
    <button on:click={addContact.deleteContac}>Delete</button>
    {/each}
</div>

<style>
    * {
        margin: .5rem 0;
    }
</style>