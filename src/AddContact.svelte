<script>
    const contact = {
        name: '',
        phone: '',
        description: ''
    }
    

</script>

<div class="input-width">
    <h5>Add Contact</h5>
    <label for="name">Name</label>
    <input type="text" id="name" name="name"bind:value={contact.name}>
    <label for="text">Phone</label>
    <input type="text" id="phone" name="phone" bind:value={contact.phone}>
    <label for="description">Description</label>
    <textarea id="description" name="decription" bind:value={contact.description} />
    <button>Add Contact</button>
</div>

<style>
    .input-width {
        margin: 1rem;
    }
</style>