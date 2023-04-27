<script>
    import addStore from './stores/addcontact.store.js';

</script>

<div class="input-width">
    <h5>Add Contact</h5>
    <label for="name">Name</label>
    <input type="text" id="name" name="name"bind:value={addStore.name}>
    <label for="text">Phone</label>
    <input type="text" id="phone" name="phone" bind:value={addStore.phone}>
    <label for="description">Description</label>
    <textarea id="description" name="decription" bind:value={addStore.description} />
    <button on:click={addStore.addContact}>Add Contact</button>
</div>

<style>
    .input-width {
        margin: 1rem;
    }
</style>