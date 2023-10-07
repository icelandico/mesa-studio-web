<script>
  import homeBackground from '$lib/assets/home_bg.png';
  </script>

<div class="container" style="background-image: url('{homeBackground}');">
  <div class="menu-container">
    <div class="menu-contact">
      <a class="contact-item contact-mail" href="mailto:hi@mesa-studio.pl">hi@mesa-studio.pl</a>
      <a class="contact-item" href="tel:602502150">+48602502150</a>
    </div>
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
    padding: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
  .menu-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-item {
    color: #fff;
    font-size: 36px;
  }
  .contact-mail {
    position: relative;
  }


  @media (min-width: 768px) {
    .container {
      padding: 0 24px;
    }
    .contact-item {
      font-size: 56px;
    }
    .contact-mail::before, 
    .contact-mail::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      background-color: #0300FC;
      border-radius: 50%;
    }
    .contact-mail::before {
      left: -35px;
    }
    .contact-mail::after {
      right: -35px;
      transform: translate(50%, -50%);
    }
  }
</style>