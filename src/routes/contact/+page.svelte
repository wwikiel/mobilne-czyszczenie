<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import phone from '$lib/assets/phone.png';
	import email from '$lib/assets/email.png';
	import facebook from '$lib/assets/facebook.png';
	import instagram from '$lib/assets/instagram.png';
	import tiktok from '$lib/assets/tiktok.png';
</script>

<Navbar let:hidden let:toggle color="none" navClass="bg-black px-2 sm:px-4 py-2.5 w-full">
	<NavBrand href="/">
		<!-- <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" /> -->
		<span class="self-center whitespace-nowrap text-xl font-semibold text-white">
			Mobilne czyszczenie
		</span>
	</NavBrand>
	<NavHamburger
		on:click={toggle}
		btnClass="ml-3 md:hidden text-white hover:text-black hover:bg-yellow-300"
	/>
	<NavUl
		ulClass="bg-transparent flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium border-none"
		nonActiveClass="text-white md:hover:text-yellow-300 hover:bg-gray-800 md:hover:bg-transparent"
		activeClass="bg-yellow-300 md:bg-transparent text-white md:text-yellow-300"
		{hidden}
	>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">O firmie</NavLi>
		<NavLi href="/offer">Oferta</NavLi>
		<NavLi href="/pricing">Cennik</NavLi>
		<NavLi href="/gallery">Galeria</NavLi>
		<NavLi href="/contact" active={true}>Kontakt</NavLi>
	</NavUl>
</Navbar>
<div
	class="flex flex-col justify-center items-center bg-bg-header bg-cover bg-center w-full h-48 bg-black text-white"
>
	<h2 class="text-4xl">Kontakt</h2>
</div>
<div
	class="flex flex-col justify-center items-center w-full bg-black space-y-12 p-8 text-white mt-16"
>
	<h2 class="text-3xl md:text-4xl">Kontakt do nas</h2>
	<div class="space-y-6">
		<div class="flex flex-row items-center space-x-6">
			<img src={phone} alt="Phone" class="w-12" />
			<div class="flex flex-col space-y-4">
				<a href="tel:+48 732 777 469" class="text-xl md:text-2xl">+48 732 777 469</a>
				<a href="tel:+48 505 448 426" class="text-xl md:text-2xl">+48 505 448 426</a>
			</div>
		</div>
		<div class="flex flex-row items-center space-x-6">
			<img src={email} alt="Email" class="w-12" />
			<a href="mailto:mobilne.czyszczenie@onet.pl" class="text-xl md:text-2xl"
				>mobilne.czyszczenie@onet.pl</a
			>
		</div>
	</div>
	<div class="w-full h-56 px-4 md:px-32 lg:px-56">
		<iframe
			title="map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.3836898953537!2d20.80129339567952!3d52.26999293320156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb503dd4a39eb%3A0x53885355bc9aae4b!2sAkacjowa%2094%2C%2005-080%20Koczargi%20Stare!5e0!3m2!1spl!2spl!4v1678876514040!5m2!1spl!2spl"
			class="rounded-xl"
			height="100%"
			width="100%"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
	<div class="flex flex-row space-x-12">
		<a href="https://www.facebook.com/profile.php?id=100080013793673"
			><img src={facebook} alt="Facebook" class="w-12" /></a
		>
		<a
			href="https://www.instagram.com/mobilne.czyszczenie/?fbclid=IwAR2LnrLCoXLdfMo5yHOuQtk8Ws9076nmbgbGKQzROkT8XbmTxYVpxUm1KKo"
			><img src={instagram} alt="Instagram" class="w-12" /></a
		>
		<a
			href="https://www.tiktok.com/@mobilne.czyszczenie?fbclid=IwAR2LnrLCoXLdfMo5yHOuQtk8Ws9076nmbgbGKQzROkT8XbmTxYVpxUm1KKo"
			><img src={tiktok} alt="Tiktok" class="w-12" /></a
		>
	</div>
</div>
