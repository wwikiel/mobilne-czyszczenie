<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import logo from '$lib/assets/logo.png';
</script>

<div class="bg-bg-home bg-cover bg-center w-full min-h-screen">
	<Navbar let:hidden let:toggle color="none" navClass="bg-black px-2 sm:px-4 py-2.5 w-full">
		<NavBrand href="/">
			<!-- <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" /> -->
			<span class="self-center whitespace-nowrap text-xl font-semibold text-white">
				MOBILNE CZYSZCZENIE
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
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">O firmie</NavLi>
			<NavLi href="/offer">Oferta</NavLi>
			<NavLi href="/pricing">Cennik</NavLi>
			<NavLi href="/gallery">Galeria</NavLi>
			<NavLi href="/contact">Kontakt</NavLi>
		</NavUl>
	</Navbar>
	<div class="flex flex-col justify-center items-center space-y-12 mt-10 md:mt-32 lg:mt-48">
		<img src={logo} class="h-60 sm:h-48" alt="Logo" />
		<div class="text-center text-white">
			<h1 class="text-4xl">Oferujemy profesjonalne usługi czyszczenia wszelakich zanieczyszczeń z dbałością o każdy szczegół!</h1>
		</div>
		<a href="/pricing" class="bg-yellow-300 hover:bg-yellow-400 px-6 py-2 rounded-lg text-lg"
			>Zobacz ofertę</a
		>
	</div>
</div>
