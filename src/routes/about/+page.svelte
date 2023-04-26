<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import about from '$lib/assets/about.jpeg';
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
		<NavLi href="/about" active={true}>O firmie</NavLi>
		<NavLi href="/offer">Oferta</NavLi>
		<NavLi href="/pricing">Cennik</NavLi>
		<NavLi href="/gallery">Galeria</NavLi>
		<NavLi href="/contact">Kontakt</NavLi>
	</NavUl>
</Navbar>
<div
	class="flex flex-col justify-center items-center bg-bg-header bg-cover bg-center w-full h-48 bg-black text-white"
>
	<h2 class="text-4xl">O firmie</h2>
</div>
<div
	class="flex flex-col lg:flex-row justify-center w-full bg-black space-y-12 lg:space-x-12 p-8 mt-16"
>
	<img src={about} class="w-3/4 lg:w-1/3" alt="O firmie" />
	<div class="text-white">
		<ul class="space-y-2 text-xl md:text-2xl">
			<h2 class="text-2xl md:text-4xl mb-4">Dlaczego właśnie my?</h2>
			<li>
				<i class="fa-solid fa-check text-green-500 mr-4" />Nasz zespół stawia nie na ilość lecz na
				jakość!
			</li>
			<li>
				<i class="fa-solid fa-check text-green-500 mr-4" />Cenimy zarówno czas, jak i pieniądze
				naszych klientów!
			</li>
			<li>
				<i class="fa-solid fa-check text-green-500 mr-4" />Pracujemy tylko na wysokiej jakości
				produktach!
			</li>
			<li>
				<i class="fa-solid fa-check text-green-500 mr-4" />Jedynie co po sobie zostawiamy to
				porządnie wykonana robota!
			</li>
			<li>
				<i class="fa-solid fa-check text-green-500 mr-4" />Szcześliwy i zadowolony klient, to nasz
				klient!
			</li>
			<li><i class="fa-solid fa-check text-green-500 mr-4" />Działamy również w soboty!</li>
		</ul>
	</div>
</div>
