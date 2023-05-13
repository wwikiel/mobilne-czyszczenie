<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import img1 from '$lib/assets/gallery/image-1.jpeg';
	import img2 from '$lib/assets/gallery/image-2.jpeg';
	import img3 from '$lib/assets/gallery/image-3.jpeg';
	import img4 from '$lib/assets/gallery/image-4.jpeg';
	import img5 from '$lib/assets/gallery/image-5.jpeg';
	import img6 from '$lib/assets/gallery/image-6.jpeg';
	import img7 from '$lib/assets/gallery/image-7.jpeg';
	import img8 from '$lib/assets/gallery/image-8.jpeg';
	import img9 from '$lib/assets/gallery/image-9.jpeg';
	import img10 from '$lib/assets/gallery/image-10.jpeg';
	import img11 from '$lib/assets/gallery/image-11.jpeg';
	import img12 from '$lib/assets/gallery/image-12.jpeg';
	import img13 from '$lib/assets/gallery/image-13.jpeg';
	import img14 from '$lib/assets/gallery/image-14.jpeg';
	import img15 from '$lib/assets/gallery/image-15.jpeg';
	import img16 from '$lib/assets/gallery/image-16.jpeg';
	import img17 from '$lib/assets/gallery/image-17.jpeg';
	import img18 from '$lib/assets/gallery/image-18.jpeg';
	import img19 from '$lib/assets/gallery/image-19.jpeg';
	import img20 from '$lib/assets/gallery/image-20.jpeg';
	import img21 from '$lib/assets/gallery/image-21.jpeg';
	import img22 from '$lib/assets/gallery/image-22.jpeg';
	import img23 from '$lib/assets/gallery/image-23.jpeg';
	import img24 from '$lib/assets/gallery/image-24.jpeg';
	import img25 from '$lib/assets/gallery/image-25.jpeg';
	import img26 from '$lib/assets/gallery/image-26.jpeg';
	import img27 from '$lib/assets/gallery/image-27.jpeg';
	import img28 from '$lib/assets/gallery/image-28.jpeg';
	import img29 from '$lib/assets/gallery/image-29.jpeg';
	import img30 from '$lib/assets/gallery/image-30.jpeg';
	import img31 from '$lib/assets/gallery/image-31.jpeg';
	import img32 from '$lib/assets/gallery/image-32.jpeg';
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
		<img src={img14} class="w-full h-72 object-cover" alt="img14" />
		<img src={img15} class="w-full h-72 object-cover" alt="img15" />
		<img src={img16} class="w-full h-72 object-cover" alt="img16" />
		<img src={img17} class="w-full h-72 object-cover" alt="img17" />
		<img src={img18} class="w-full h-72 object-cover" alt="img18" />
		<img src={img19} class="w-full h-72 object-cover" alt="img19" />
		<img src={img20} class="w-full h-72 object-cover" alt="img20" />
		<img src={img21} class="w-full h-72 object-cover" alt="img21" />
		<img src={img22} class="w-full h-72 object-cover" alt="img22" />
		<img src={img23} class="w-full h-72 object-cover" alt="img23" />
		<img src={img24} class="w-full h-72 object-cover" alt="img24" />
		<img src={img25} class="w-full h-72 object-cover" alt="img25" />
		<img src={img26} class="w-full h-72 object-cover" alt="img26" />
		<img src={img27} class="w-full h-72 object-cover" alt="img27" />
		<img src={img28} class="w-full h-72 object-cover" alt="img28" />
		<img src={img29} class="w-full h-72 object-cover" alt="img29" />
		<img src={img30} class="w-full h-72 object-cover" alt="img30" />
		<img src={img31} class="w-full h-72 object-cover" alt="img31" />
		<img src={img32} class="w-full h-72 object-cover" alt="img32" />
	</div>
</div>
