<script lang="ts">
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<header class="fixed w-full">
	<nav>
		<ul
			class="h-[80px] flex bg-white justify-center items-center border border-2 border-gray-500 p-6 text-xl text-light text-primaryBlue"
		>
			<li class="flex-1">
				<a class="cursor-pointer" href="#studio" on:click|preventDefault={scrollIntoView}>studio</a>
			</li>
			<li class=" flex-1">
				<a class="cursor-pointer" href="#projects" on:click|preventDefault={scrollIntoView}
					>projekty</a
				>
			</li>
			<li class="cursor-pointer flex justify-center basis-6/12">
				<p>LOGO</p>
			</li>
			<li class="cursor-pointer flex-1 text-right">
				<a class="cursor-pointer" href="#contact" on:click|preventDefault={scrollIntoView}
					>kontakt</a
				>
			</li>
			<li class="cursor-pointer flex-1 text-right">en</li>
		</ul>
	</nav>
</header>
