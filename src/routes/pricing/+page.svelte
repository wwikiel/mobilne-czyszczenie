<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import logo from '$lib/assets/logo.png';
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
		<NavLi href="/pricing" active={true}>Cennik</NavLi>
		<NavLi href="/gallery">Galeria</NavLi>
		<NavLi href="/contact">Kontakt</NavLi>
	</NavUl>
</Navbar>
<div
	class="flex flex-col justify-center items-center bg-bg-header bg-cover bg-center w-full h-48 bg-black text-white"
>
	<h2 class="text-4xl">Cennik</h2>
</div>
<div
	class="flex flex-col justify-center items-center w-full min-h-screen bg-black space-y-12 text-white mt-12"
>
	<h2 class="text-2xl md:text-4xl">Atrakcyjne rabaty dla stałych klientów</h2>
	<table class="table-price">
		<tr> <th>POJAZDY</th> <th>Cena</th> </tr>
		<tr> <td>zewnętrzne ręczne mycie pojazdu</td> <td>od 79 zł</td> </tr>
		<tr> <td>wewnętrzne sprzątanie pojazdu</td> <td>od 99 zł</td> </tr>
		<tr> <td>czyszczenie skórzanej tapicerki</td><td>od 249 zł</td> </tr>
		<tr> <td>pranie kompletu tapicerki</td> <td>od 199 zł</td> </tr>
		<tr> <td>pranie wykładziny + dywaników</td> <td>od 149 zł</td> </tr>
		<tr> <td>pranie komory bagażnika </td><td>od 49 zł</td> </tr>
		<tr> <td>pranie podsufitki</td><td>od 99 zł</td> </tr>
		<tr> <td>impregncacja tapicerki skórzanej</td> <td>od 199 zł</td> </tr>
		<tr> <td>impregnacja tapicerki materiałowej</td> <td>od 149 zł</td> </tr>
		<tr> <td>impregnacja powłoki lakierniczej ciekłym woskiem</td> <td>od 300 zł</td> </tr>
		<tr> <td>ozonowanie/dezynfekcja</td><td>od 99 zł</td> </tr>
	</table>

	<table class="table-price">
		<tr> <th>BUDYNKI</th> <th>Cena</th> </tr>
		<tr> <td>mycie elewacji i dachów </td> <td>od 10 zł/m²</td> </tr>
		<tr> <td>mycie okien</td><td>od 15 zł</td> </tr>
		<tr> <td>czyszczenie rynien</td> <td>od 10 zł/m²</td> </tr>
		<tr> <td>mycie witryn sklepowych</td> <td>od 7 zł/m²</td> </tr>
		<tr> <td>impregnacja elewacji/dachów</td><td>od 10 zł/m²</td> </tr>
		<tr> <td>impregnacja okien</td> <td>od 49 zł/m²</td> </tr>
		<tr> <td>czyszczenie zabrudzeń pobudowlanych</td> <td>od 40 zł/m²</td> </tr>
		<tr> <td>usuwanie graffiti </td><td>od 70 zł/m²</td> </tr>
		<tr> <td>zabezpieczenie antygrafiti </td><td>od 50 zł/m²</td> </tr>
	</table>

	<table class="table-price">
		<tr> <th> WNĘTRZA</th> <th>Cena</th> </tr>
		<tr> <td>pranie dywanów i wykładzin z krótkim włosiem</td> <td>od 15 zł/m²</td> </tr>
		<tr> <td>pranie narożników</td><td>od 149 zł</td> </tr>
		<tr> <td>pranie kanap</td> <td>od 99 zł</td> </tr>
		<tr> <td>pranie foteli </td> <td>od 49 zł</td> </tr>
		<tr> <td>pranie poduszek </td><td>od 10 zł</td> </tr>
		<tr> <td>czyszczenie krzeseł </td><td>od 15 zł</td> </tr>
		<tr> <td>sprzątanie pomieszczeń</td> <td>od 5 zł/m²</td> </tr>
		<tr> <td>impregnacja wykładzin</td><td>od 2 zł/m²</td> </tr>
	</table>

	<table class="table-price">
		<tr> <th>POZOSTAŁE</th> <th>Cena</th> </tr>
		<tr> <td>kostki brukowej/chodnikowej</td> <td>od 7 zł/m²</td> </tr>
		<tr> <td>mycie ogrodzeń</td> <td>od 9 zł/m²</td> </tr>
		<tr> <td>impregnacja kostki brukowej/płyt chodnikowych </td><td>od 10 zł/m²</td> </tr>
		<tr> <td>usuwanie dodatkowych zabrudzeń</td> <td>od 20 zł/m²</td> </tr>
		<tr> <td>uzupełnianie spoin piaskiem</td> <td>od 4 zł/m²</td> </tr>
	</table>

	<p>
		* Wszystkie podane ceny są cenami orientacyjnymi oraz są uzależnione od wielkości czyszczonej
		powierzchni i stopnia zabrudzenia <br />*Minimalna wartość zlecenia 149zł
	</p>
</div>

<style>
	table {
		@apply w-4/5 border-collapse mx-auto my-4 bg-gray-800;
	}

	td,
	th {
		@apply px-4 py-2 text-left text-white text-base;
	}

	th {
		@apply font-bold bg-yellow-300;
	}

	tr:nth-child(odd) {
		@apply bg-black font-bold;
	}
</style>
