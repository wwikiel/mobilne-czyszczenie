<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import carPricingPlan from '$lib/assets/pricing-plan-1.jpg';
	import homePricingPlan from '$lib/assets/pricing-plan-2.jpg';
	import housePricingPlan from '$lib/assets/pricing-plan-3.jpg';
	import gardenPricingPlan from '$lib/assets/pricing-plan-4.jpg';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
		integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

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
		<NavLi href="/offer" active={true}>Oferta</NavLi>
		<NavLi href="/pricing">Cennik</NavLi>
		<NavLi href="/gallery">Galeria</NavLi>
		<NavLi href="/contact">Kontakt</NavLi>
	</NavUl>
</Navbar>
<div class="flex flex-col justify-center items-center w-full min-h-screen bg-black space-y-12">
	<div class="flex flex-col sm:flex-row flex-wrap justify-center items-center">
		<div class="w-80 h-104 rounded-lg bg-gray-800 p-8 m-2 text-white space-y-4 overflow-auto">
			<img src={carPricingPlan} alt="Car" class="w-64 h-40 object-cover rounded-md" />
			<p class="text-2xl">Czyszczenie pojazdów</p>
			<ul>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Usuwanie plam i zabrudzeń</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Odświeżanie</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Impregnacja</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Ozonowanie</li>
			</ul>
		</div>
		<div class="w-80 h-104 rounded-lg bg-gray-800 p-8 m-2 text-white space-y-4 overflow-auto">
			<img src={homePricingPlan} alt="Home" class="w-64 h-40 object-cover rounded-md" />
			<p class="text-2xl">Czyszczenie wnętrz</p>
			<ul>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Usuwanie zanieczyszczeń</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Pranie tapicerki meblowej</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Nadanie świeżości</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Dezynfekcja</li>
			</ul>
		</div>
		<div class="w-80 h-104 rounded-lg bg-gray-800 p-8 m-2 text-white space-y-4 overflow-auto">
			<img src={housePricingPlan} alt="House" class="w-64 h-40 object-cover rounded-md" />
			<p class="text-2xl">Mycie budynków</p>
			<ul>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Czyszczenie elewacji</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Mycie okien</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Czyszczenie dachów</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Impregnacja</li>
			</ul>
		</div>
		<div class="w-80 h-104 rounded-lg bg-gray-800 p-8 m-2 text-white space-y-4 overflow-auto">
			<img src={gardenPricingPlan} alt="Garden" class="w-64 h-40 object-cover rounded-md" />
			<p class="text-2xl">Mycie kostki i ogrodzeń</p>
			<ul>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Czyszczenie chemiczne</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Usuwanie plam</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Impregnacja</li>
				<li><i class="fa-solid fa-check text-green-500 mr-4" />Usuwanie mchów</li>
			</ul>
		</div>
	</div>
</div>
