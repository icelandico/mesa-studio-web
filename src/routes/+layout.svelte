<script>
  import "../app.css";
</script>

<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-logo">COMPANY LOGO</div>
    <div class="navbar-options">
      <div class="navbar-options__lang">LANG</div>
      <div class="navbar-options__social-instagram">INSTA LOGO</div>
    </div>
  </div>
</nav>

<slot />

<style>
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    height: 100%;
  }
  .navbar-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .navbar {
    position: fixed;
    height: 70px;
    background-color: rgb(194, 193, 192);
    width: 100%;
  }
</style>