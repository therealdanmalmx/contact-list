<script>
  import AddContact from "./AddContact.svelte";
  import ShowContact from "./ShowContact.svelte";

</script>
<div class="list-margin">
  <h2>Contact list</h2>
  <AddContact />
  <ShowContact />
</div>

<style>
  h2 {
    text-align: center;
  }
  .list-margin {
    margin: 1rem;
  }
</style>