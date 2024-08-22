<div
	class="flex flex-col md:flex-row items-center md:justify-between p-2 md:p-8 h-full w-full gap-8 md:gap-16 text-primaryBlue"
>
	<div class="md:basis-1/3">
		<p class="text-primaryBlue text-[40px] text-left">Skontaktuj się z nami:</p>
		<div class="flex justify-between mt-4">
			<div class="flex flex-col basis-1/2">
				<a href="mailto:hi@mesa-studio.pl">hi@mesa-studio.pl</a>
				<a href="tel:799 203 520">tel: 799 203 520</a>
			</div>
			<div class="flex flex-col basis-1/2">
				<a href="https://www.instagram.com/mesa_studio_/" target="_blank">mesa_studio_</a>
				<a href="https://www.facebook.com/people/mesa-studio/100088669205685/" target="_blank"
					>mesa studio</a
				>
			</div>
		</div>
	</div>
	<div class="md:basis-1/2">
		<form name="contact" class="flex flex-col gap-4" netlify>
			<div class="flex flex-col">
				<label class="text-primaryBlue" for="name">Imię i nazwisko</label>
				<input class="border-lightBlue border-2 mt-2 h-10 px-2" type="text" id="name" />
			</div>
			<div class="flex justify-between gap-4">
				<div class="flex flex-col w-full">
					<label class="text-primaryBlue" for="email">Adres e-mail</label>
					<input class="border-lightBlue border-2 mt-2 h-10 px-2" type="text" id="email" />
				</div>
				<div class="flex flex-col w-full">
					<label class="text-primaryBlue" for="phone">Nr telefonu</label>
					<input class="border-lightBlue border-2 mt-2 h-10 px-2" type="text" id="phone" />
				</div>
			</div>
			<div class="flex flex-col">
				<label class="text-primaryBlue" for="phone">Możesz przesłać zrzut</label>
				<input class="border-lightBlue border-2 mt-2 h-10 px-2" type="file" id="phone" />
			</div>
			<div class="flex flex-col">
				<label class="text-primaryBlue" for="phone">Pomocy przy jakim wnętrzu potrzebujesz?</label>
				<textarea class="border-lightBlue border-2 mt-2 px-2 pt-2" id="description" rows="4" />
			</div>
		</form>
	</div>
</div>
