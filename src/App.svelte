<script>
  import AddContact from "./AddContact.svelte";
  import ShowContact from "./ShowContact.svelte";
  import addStore from "./stores/addcontact.store.js";

</script>
<div class="list-margin">
  <h2>Contact list</h2>
  <AddContact />
  <ShowContact />
  <!-- {#if addStore.addContactLength}
  {:else if !addStore.addContactLength}
  {/if} -->
</div>

<style>
  h2 {
    text-align: center;
  }
  .list-margin {
    margin: 1rem;
  }
</style>