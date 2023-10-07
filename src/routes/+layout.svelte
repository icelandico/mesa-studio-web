<script>
  import InstagramIcon from "$lib/components/icons/instagramIcon.svelte";
  import headerLogo from '$lib/assets/logo_header.png';

  import "../app.css";
</script>

<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-logo">
      <img src="{headerLogo}" alt="logo" />
    </div>
    <div class="navbar-options">
      <!-- <a href="https://www.instagram.com/mesa_studio_/" target="_blank">
        <InstagramIcon />
      </a> -->
    </div>
  </div>
</nav>

<slot />

<style>
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px;
    height: 100%;
  }
  .navbar-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar {
    position: fixed;
    width: 100%;
  }
</style>