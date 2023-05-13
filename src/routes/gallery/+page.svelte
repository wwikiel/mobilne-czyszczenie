<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import img1 from '$lib/assets/gallery/img-1.jpg';
	import img2 from '$lib/assets/gallery/img-2.jpg';
	import img3 from '$lib/assets/gallery/img-3.jpg';
	import img4 from '$lib/assets/gallery/img-4.jpg';
	import img5 from '$lib/assets/gallery/img-5.jpg';
	import img6 from '$lib/assets/gallery/img-6.jpg';
	import img7 from '$lib/assets/gallery/img-7.jpg';
	import img8 from '$lib/assets/gallery/img-8.jpg';
	import img9 from '$lib/assets/gallery/img-9.jpg';
	import img10 from '$lib/assets/gallery/img-10.jpg';
	import img11 from '$lib/assets/gallery/img-11.jpg';
	import img12 from '$lib/assets/gallery/img-12.jpg';
	import img13 from '$lib/assets/gallery/img-13.jpg';
	import img16 from '$lib/assets/gallery/img-16.jpg';
	import image1.jpeg from '$lib/assets/gallery/img-16.jpg';
</script>

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
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">O firmie</NavLi>
		<NavLi href="/offer">Oferta</NavLi>
		<NavLi href="/pricing">Cennik</NavLi>
		<NavLi href="/gallery" active={true}>Galeria</NavLi>
		<NavLi href="/contact">Kontakt</NavLi>
	</NavUl>
</Navbar>
<div
	class="flex flex-col justify-center items-center bg-bg-header bg-cover bg-center w-full h-48 bg-black text-white"
>
	<h2 class="text-4xl">Galeria</h2>
</div>
<div
	class="flex flex-col justify-center items-center w-full min-h-screen bg-black space-y-12 text-white"
>
	<div
		class="my-4 md:my-8 lg:my-24 mx-12 md:mx-24 lg:mx-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
	>
		<img src={img1} class="w-full h-72 object-cover" alt="img1" />
		<img src={img2} class="w-full h-72 object-cover" alt="img2" />
		<img src={img3} class="w-full h-72 object-cover" alt="img3" />
		<img src={img4} class="w-full h-72 object-cover" alt="img4" />
		<img src={img5} class="w-full h-72 object-cover" alt="img5" />
		<img src={img6} class="w-full h-72 object-cover" alt="img6" />
		<img src={img7} class="w-full h-72 object-cover" alt="img7" />
		<img src={img8} class="w-full h-72 object-cover" alt="img8" />
		<img src={img9} class="w-full h-72 object-cover" alt="img9" />
		<img src={img10} class="w-full h-72 object-cover" alt="img10" />
		<img src={img11} class="w-full h-72 object-cover" alt="img11" />
		<img src={img12} class="w-full h-72 object-cover" alt="img12" />
		<img src={img13} class="w-full h-72 object-cover" alt="img13" />
		<img src={img16} class="w-full h-72 object-cover" alt="img16" />
		<img src={image1.jpeg} class="w-full h-72 object-cover" alt="img16" />
	</div>
</div>
