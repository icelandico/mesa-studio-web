<script>
  import homeBackground from '$lib/assets/home_bg.png';
	import FacebookIcon from '$lib/components/icons/facebookIcon.svelte';
	import InstagramIcon from '$lib/components/icons/instagramIcon.svelte';
  </script>

<div class="container" style="background-image: url('{homeBackground}');">
  <div class="menu-container">
    <div class="menu-contact">
      <p class="contact-item">contact us</p>
      <a class="contact-item contact-mail" href="mailto:hi@mesa-studio.pl">hi@mesa-studio.pl</a>
      <a class="contact-item" href="tel:602502150">+48602502150</a>
    </div>
    <div class="menu-socials">
      <a href="https://www.facebook.com/profile.php/?id=100088669205685" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/mesa_studio_/" target="_blank">
        <InstagramIcon />
      </a>
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
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    margin-top: 100px;
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
  .menu-socials {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 40px;
  }


  @media (min-width: 768px) {
    .container {
      align-items: flex-end;
      padding: 0 24px 10% 24px;
    }
    .contact-item {
      font-size: 56px;
    }
  }
</style>