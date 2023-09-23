<div class="container">
  <div class="menu-container">
    <a class="menu-link" href="/projects">Projects</a>
    <a class="menu-link" href="/studio">Studio</a>
    <a class="menu-link" href="/contact">Contact</a>
  </div>
</div>


<style>
  :global(:root) {
      --main-blue: #226ebf;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 100%;
    background-color: rgb(238, 224, 224);
    margin: 0;
    padding: 0;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .menu-link {
    text-transform: uppercase;
    font-size: 48px;
    color: var(--main-blue);
  }
</style>