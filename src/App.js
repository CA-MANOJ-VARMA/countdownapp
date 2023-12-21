import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { RiFullscreenExitLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const timeZoneData = [
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Abidjan",
   "country": "Ivory Coast",
   "major_cities_in_timezones": "Abidjan, Abobo, Bouaké, Korhogo, Daloa"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Accra",
   "country": "Ghana",
   "major_cities_in_timezones": "Accra, Kumasi, Tamale, Takoradi, Atsiaman"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Addis_Ababa",
   "country": "Ethiopia",
   "major_cities_in_timezones": "Addis Ababa, Jijiga, Gondar, Mek'ele, Nazrēt"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Algiers",
   "country": "Algeria",
   "major_cities_in_timezones": "Algiers, Boumerdas, Oran, Tébessa, Constantine"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Asmara",
   "country": "Eritrea",
   "major_cities_in_timezones": "Asmara, Keren, Massawa, Assab, Mendefera"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Bamako",
   "country": "Mali",
   "major_cities_in_timezones": "Bamako, Ségou, Sikasso, Mopti, Koutiala"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Bangui",
   "country": "Central African Republic",
   "major_cities_in_timezones": "Bangui, Bimbo, Mbaïki, Berbérati, Kaga Bandoro"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Banjul",
   "country": "Gambia",
   "major_cities_in_timezones": "Serekunda, Brikama, Bakau, Banjul, Farafenni"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Bissau",
   "country": "Guinea-Bissau",
   "major_cities_in_timezones": "Bissau, Bafatá, Gabú, Bissorã, Bolama"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Blantyre",
   "country": "Malawi",
   "major_cities_in_timezones": "Lilongwe, Blantyre, Mzuzu, Zomba, Kasungu"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Brazzaville",
   "country": "Republic of the Congo",
   "major_cities_in_timezones": "Brazzaville, Pointe-Noire, Dolisie, Kayes, Owando"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Bujumbura",
   "country": "Burundi",
   "major_cities_in_timezones": "Bujumbura, Muyinga, Gitega, Ruyigi, Ngozi"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Cairo",
   "country": "Egypt",
   "major_cities_in_timezones": "Cairo, Alexandria, Giza, Shubrā al Khaymah, Port Said"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Casablanca",
   "country": "Morocco",
   "major_cities_in_timezones": "Casablanca, Rabat, Fès, Sale, Marrakesh"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Ceuta",
   "country": "Spain",
   "major_cities_in_timezones": "Melilla"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Conakry",
   "country": "Guinea",
   "major_cities_in_timezones": "Camayenne, Conakry, Nzérékoré, Kindia, Kankan"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Dakar",
   "country": "Senegal",
   "major_cities_in_timezones": "Dakar, Pikine, Touba, Thiès, Saint-Louis"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Dar_es_Salaam",
   "country": "Tanzania",
   "major_cities_in_timezones": "Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Djibouti",
   "country": "Djibouti",
   "major_cities_in_timezones": "Djibouti, 'Ali Sabieh, Tadjourah, Obock, Dikhil"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Douala",
   "country": "Cameroon",
   "major_cities_in_timezones": "Douala, Yaoundé, Garoua, Kousséri, Bamenda"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/El_Aaiun",
   "country": "Western Sahara",
   "major_cities_in_timezones": "Laayoune, Dakhla, Boujdour, Laayoune Plage"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Freetown",
   "country": "Sierra Leone",
   "major_cities_in_timezones": "Freetown, Bo, Kenema, Koidu, Makeni"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Gaborone",
   "country": "Botswana",
   "major_cities_in_timezones": "Gaborone, Francistown, Molepolole, Maun, Serowe"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Harare",
   "country": "Zimbabwe",
   "major_cities_in_timezones": "Harare, Bulawayo, Chitungwiza, Mutare, Gweru"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Johannesburg",
   "country": "South Africa",
   "major_cities_in_timezones": "Johannesburg, Cape Town, Durban, Soweto, Pretoria"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Juba",
   "country": "South Sudan",
   "major_cities_in_timezones": "Juba, Winejok, Yei, Malakal, Wau"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Kampala",
   "country": "Uganda",
   "major_cities_in_timezones": "Kampala, Gulu, Lira, Mbarara, Jinja"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Khartoum",
   "country": "Sudan",
   "major_cities_in_timezones": "Khartoum, Omdurman, Nyala, Port Sudan, Kassala"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Kigali",
   "country": "Rwanda",
   "major_cities_in_timezones": "Kigali, Gisenyi, Butare, Gitarama, Musanze"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Kinshasa",
   "country": "Democratic Republic of the Congo",
   "major_cities_in_timezones": "Kinshasa, Masina, Kikwit, Mbandaka, Matadi"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Lagos",
   "country": "Nigeria",
   "major_cities_in_timezones": "Lagos, Kano, Ibadan, Port Harcourt, Benin City"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Libreville",
   "country": "Gabon",
   "major_cities_in_timezones": "Libreville, Port-Gentil, Franceville, Oyem, Moanda"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Lome",
   "country": "Togo",
   "major_cities_in_timezones": "Lomé, Sokodé, Kara, Atakpamé, Kpalimé"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Luanda",
   "country": "Angola",
   "major_cities_in_timezones": "Luanda, N’dalatando, Huambo, Lobito, Benguela"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Lubumbashi",
   "country": "Democratic Republic of the Congo",
   "major_cities_in_timezones": "Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Likasi"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Lusaka",
   "country": "Zambia",
   "major_cities_in_timezones": "Lusaka, Ndola, Kitwe, Chipata, Kabwe"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Malabo",
   "country": "Equatorial Guinea",
   "major_cities_in_timezones": "Bata, Malabo, Ebebiyin, Aconibe, Añisoc"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Maputo",
   "country": "Mozambique",
   "major_cities_in_timezones": "Maputo, Matola, Nampula, Beira, Chimoio"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Maseru",
   "country": "Lesotho",
   "major_cities_in_timezones": "Maseru, Mohale’s Hoek, Mafeteng, Leribe, Butha-Buthe"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Mbabane",
   "country": "Eswatini",
   "major_cities_in_timezones": "Manzini, Mbabane, Big Bend, Malkerns, Nhlangano"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Mogadishu",
   "country": "Somalia",
   "major_cities_in_timezones": "Mogadishu, Hargeysa, Berbera, Kismayo, Marka"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Monrovia",
   "country": "Liberia",
   "major_cities_in_timezones": "Monrovia, Gbarnga, Kakata, Bensonville, Harper"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Africa/Nairobi",
   "country": "Kenya",
   "major_cities_in_timezones": "Nairobi, Kakamega, Mombasa, Ruiru, Eldoret"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Ndjamena",
   "country": "Chad",
   "major_cities_in_timezones": "N'Djamena, Moundou, Sarh, Abéché, Kelo"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Niamey",
   "country": "Niger",
   "major_cities_in_timezones": "Niamey, Zinder, Maradi, Agadez, Alaghsas"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Nouakchott",
   "country": "Mauritania",
   "major_cities_in_timezones": "Nouakchott, Nouadhibou, Néma, Kaédi, Rosso"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Ouagadougou",
   "country": "Burkina Faso",
   "major_cities_in_timezones": "Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Kaya"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Porto-Novo",
   "country": "Benin",
   "major_cities_in_timezones": "Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Africa/Sao_Tome",
   "country": "Sao Tome and Principe",
   "major_cities_in_timezones": "São Tomé, Santo António"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Africa/Tripoli",
   "country": "Libya",
   "major_cities_in_timezones": "Tripoli, Benghazi, Ajdabiya, Mişrātah, Tarhuna"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Tunis",
   "country": "Tunisia",
   "major_cities_in_timezones": "Tunis, Sfax, Sousse, Kairouan, Bizerte"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Africa/Windhoek",
   "country": "Namibia",
   "major_cities_in_timezones": "Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund"
  },
  {
   "utc": "UTC-10",
   "utc_in_minutes": -600,
   "time_zone": "America/Adak",
   "country": "United States"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Anchorage",
   "country": "United States",
   "major_cities_in_timezones": "Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Anguilla",
   "country": "Anguilla",
   "major_cities_in_timezones": "The Valley, Blowing Point Village, Sandy Ground Village, The Quarter, Sandy Hill"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Antigua",
   "country": "Antigua and Barbuda",
   "major_cities_in_timezones": "Saint John’s, Piggotts, Bolands, Codrington, Parham"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Araguaina",
   "country": "Brazil",
   "major_cities_in_timezones": "Palmas, Araguaína, Gurupi, Miracema do Tocantins, Taguatinga"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Buenos_Aires",
   "country": "Argentina",
   "major_cities_in_timezones": "Buenos Aires, Mar del Plata, Bahía Blanca, Merlo, Quilmes"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Catamarca",
   "country": "Argentina",
   "major_cities_in_timezones": "Catamarca, Comodoro Rivadavia, Trelew, Puerto Madryn, Esquel"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Cordoba",
   "country": "Argentina",
   "major_cities_in_timezones": "Córdoba, Rosario, Santa Fe, Corrientes, Posadas"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Jujuy",
   "country": "Argentina",
   "major_cities_in_timezones": "San Salvador de Jujuy, San Pedro de Jujuy, Libertador General San Martín, Palpalá, La Quiaca"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/La_Rioja",
   "country": "Argentina",
   "major_cities_in_timezones": "La Rioja, Chilecito, Arauco, Chamical"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Mendoza",
   "country": "Argentina",
   "major_cities_in_timezones": "San Rafael, Mendoza, San Martín"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Rio_Gallegos",
   "country": "Argentina",
   "major_cities_in_timezones": "Río Gallegos, Caleta Olivia, Pico Truncado, Puerto Deseado, Las Heras"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Salta",
   "country": "Argentina",
   "major_cities_in_timezones": "Salta, Neuquén, Santa Rosa, San Carlos de Bariloche, Cipolletti"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/San_Juan",
   "country": "Argentina",
   "major_cities_in_timezones": "San Juan, Chimbas, Santa Lucía, Pocito, Caucete"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/San_Luis",
   "country": "Argentina",
   "major_cities_in_timezones": "San Luis, Villa Mercedes, La Punta, Merlo, Justo Daract"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Tucuman",
   "country": "Argentina",
   "major_cities_in_timezones": "San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Alderetes, Aguilares"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Argentina/Ushuaia",
   "country": "Argentina",
   "major_cities_in_timezones": "Ushuaia, Río Grande"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Aruba",
   "country": "Aruba",
   "major_cities_in_timezones": "Oranjestad, Tanki Leendert, San Nicolas, Santa Cruz, Paradera"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Asuncion",
   "country": "Paraguay",
   "major_cities_in_timezones": "Asunción, Ciudad del Este, San Lorenzo, Capiatá, Lambaré"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Atikokan",
   "country": "Canada"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Bahia",
   "country": "Brazil",
   "major_cities_in_timezones": "Salvador, Feira de Santana, Vitória da Conquista, Itabuna, Camaçari"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Bahia_Banderas",
   "country": "Mexico",
   "major_cities_in_timezones": "Mezcales, San Vicente, Bucerías, Valle de Banderas"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Barbados",
   "country": "Barbados",
   "major_cities_in_timezones": "Bridgetown, Speightstown, Oistins, Bathsheba, Holetown"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Belem",
   "country": "Brazil",
   "major_cities_in_timezones": "Belém, Macapá, Ananindeua, Parauapebas, Marabá"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Belize",
   "country": "Belize",
   "major_cities_in_timezones": "Belize City, San Ignacio, San Pedro, Orange Walk, Corozal"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Blanc-Sablon",
   "country": "Canada"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Boa_Vista",
   "country": "Brazil",
   "major_cities_in_timezones": "Boa Vista"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Bogota",
   "country": "Colombia",
   "major_cities_in_timezones": "Bogotá, Cali, Medellín, Barranquilla, Cartagena"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Boise",
   "country": "United States",
   "major_cities_in_timezones": "Boise, Meridian, Nampa, Idaho Falls, Pocatello"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Cambridge_Bay",
   "country": "Canada"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Campo_Grande",
   "country": "Brazil",
   "major_cities_in_timezones": "Campo Grande, Dourados, Corumbá, Três Lagoas, Ponta Porã"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Cancun",
   "country": "Mexico",
   "major_cities_in_timezones": "Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Caracas",
   "country": "Venezuela",
   "major_cities_in_timezones": "Caracas, Maracaibo, Maracay, Valencia, Barquisimeto"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Cayenne",
   "country": "French Guiana",
   "major_cities_in_timezones": "Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou, Rémire-Montjoly"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Cayman",
   "country": "Cayman Islands",
   "major_cities_in_timezones": "George Town, West Bay, Bodden Town, North Side, East End"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Chicago",
   "country": "United States",
   "major_cities_in_timezones": "Chicago, Houston, San Antonio, Dallas, Austin"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Chihuahua",
   "country": "Mexico",
   "major_cities_in_timezones": "Chihuahua, Ciudad Delicias, Cuauhtémoc, Parral, Nuevo Casas Grandes"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Ciudad_Juarez",
   "country": "Mexico",
   "major_cities_in_timezones": "Ciudad Juárez, Ascensión, Ascención, Puerto Palomas"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Costa_Rica",
   "country": "Costa Rica",
   "major_cities_in_timezones": "San José, Limón, San Francisco, Alajuela, Liberia"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Creston",
   "country": "Canada",
   "major_cities_in_timezones": "Creston"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Cuiaba",
   "country": "Brazil",
   "major_cities_in_timezones": "Cuiabá, Várzea Grande, Rondonópolis, Sinop, Barra do Garças"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Curacao",
   "country": "Curacao",
   "major_cities_in_timezones": "Willemstad, Sint Michiel Liber"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "America/Danmarkshavn",
   "country": "Greenland"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Dawson",
   "country": "Canada"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Dawson_Creek",
   "country": "Canada",
   "major_cities_in_timezones": "Fort St. John, Dawson Creek"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Denver",
   "country": "United States",
   "major_cities_in_timezones": "Denver, El Paso, Albuquerque, Colorado Springs, Aurora"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Detroit",
   "country": "United States",
   "major_cities_in_timezones": "Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Dominica",
   "country": "Dominica",
   "major_cities_in_timezones": "Roseau, Portsmouth, Berekua, Saint Joseph, Wesley"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Edmonton",
   "country": "Canada",
   "major_cities_in_timezones": "Calgary, Edmonton, Red Deer, Sherwood Park, Lethbridge"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Eirunepe",
   "country": "Brazil",
   "major_cities_in_timezones": "Eirunepé, Benjamin Constant, Envira"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/El_Salvador",
   "country": "El Salvador",
   "major_cities_in_timezones": "San Salvador, Soyapango, San Miguel, Santa Ana, Mejicanos"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Fort_Nelson",
   "country": "Canada"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Fortaleza",
   "country": "Brazil",
   "major_cities_in_timezones": "Fortaleza, São Luís, Natal, Teresina, João Pessoa"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Glace_Bay",
   "country": "Canada",
   "major_cities_in_timezones": "Sydney, Glace Bay, Sydney Mines"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Goose_Bay",
   "country": "Canada",
   "major_cities_in_timezones": "Happy Valley-Goose Bay, Labrador City"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Grand_Turk",
   "country": "Turks and Caicos Islands",
   "major_cities_in_timezones": "Cockburn Town"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Grenada",
   "country": "Grenada",
   "major_cities_in_timezones": "Saint George's, Gouyave, Grenville, Victoria, Saint David’s"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Guadeloupe",
   "country": "Guadeloupe",
   "major_cities_in_timezones": "Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Guatemala",
   "country": "Guatemala",
   "major_cities_in_timezones": "Guatemala City, Villa Nueva, Mixco, Cobán, Quetzaltenango"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Guayaquil",
   "country": "Ecuador",
   "major_cities_in_timezones": "Quito, Guayaquil, Cuenca, Santo Domingo de los Colorados, Ambato"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Guyana",
   "country": "Guyana",
   "major_cities_in_timezones": "Georgetown, Linden, New Amsterdam, Anna Regina, Bartica"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Halifax",
   "country": "Canada",
   "major_cities_in_timezones": "Halifax, Dartmouth, Charlottetown, Lower Sackville, Cole Harbour"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Havana",
   "country": "Cuba",
   "major_cities_in_timezones": "Havana, Santiago de Cuba, Camagüey, Holguín, Guantánamo"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Hermosillo",
   "country": "Mexico",
   "major_cities_in_timezones": "Hermosillo, Ciudad Obregón, Nogales, San Luis Río Colorado, Navojoa"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Indianapolis",
   "country": "United States",
   "major_cities_in_timezones": "Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Indiana/Knox",
   "country": "United States"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Marengo",
   "country": "United States"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Petersburg",
   "country": "United States"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Indiana/Tell_City",
   "country": "United States",
   "major_cities_in_timezones": "Tell City"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Vevay",
   "country": "United States"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Vincennes",
   "country": "United States",
   "major_cities_in_timezones": "Jasper, Washington, Huntingburg"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Indiana/Winamac",
   "country": "United States"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Inuvik",
   "country": "Canada"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Iqaluit",
   "country": "Canada",
   "major_cities_in_timezones": "Iqaluit"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Jamaica",
   "country": "Jamaica",
   "major_cities_in_timezones": "Kingston, New Kingston, Spanish Town, Portmore, Montego Bay"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Juneau",
   "country": "United States",
   "major_cities_in_timezones": "Juneau"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Kentucky/Louisville",
   "country": "United States",
   "major_cities_in_timezones": "Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Kentucky/Monticello",
   "country": "United States",
   "major_cities_in_timezones": "Monticello"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Kralendijk",
   "country": "Bonaire, Saint Eustatius and Saba",
   "major_cities_in_timezones": "Kralendijk, Oranjestad, The Bottom"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/La_Paz",
   "country": "Bolivia",
   "major_cities_in_timezones": "La Paz, Santa Cruz de la Sierra, Cochabamba, Sucre, Oruro"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Lima",
   "country": "Peru",
   "major_cities_in_timezones": "Lima, Callao, Arequipa, Trujillo, Chiclayo"
  },
  {
   "utc": "UTC-8",
   "utc_in_minutes": -480,
   "time_zone": "America/Los_Angeles",
   "country": "United States",
   "major_cities_in_timezones": "Los Angeles, San Diego, San Jose, San Francisco, Seattle"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Lower_Princes",
   "country": "Sint Maarten",
   "major_cities_in_timezones": "Cul de Sac, Lower Prince’s Quarter, Koolbaai, Philipsburg"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Maceio",
   "country": "Brazil",
   "major_cities_in_timezones": "Maceió, Aracaju, Arapiraca, Nossa Senhora do Socorro, São Cristóvão"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Managua",
   "country": "Nicaragua",
   "major_cities_in_timezones": "Managua, León, Masaya, Chinandega, Matagalpa"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Manaus",
   "country": "Brazil",
   "major_cities_in_timezones": "Manaus, Itacoatiara, Parintins, Manacapuru, Coari"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Marigot",
   "country": "Saint Martin",
   "major_cities_in_timezones": "Marigot"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Martinique",
   "country": "Martinique",
   "major_cities_in_timezones": "Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Matamoros",
   "country": "Mexico",
   "major_cities_in_timezones": "Reynosa, Heroica Matamoros, Nuevo Laredo, Piedras Negras, Ciudad Acuña"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Mazatlan",
   "country": "Mexico",
   "major_cities_in_timezones": "Culiacán, Mazatlán, Tepic, Los Mochis, La Paz"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Menominee",
   "country": "United States",
   "major_cities_in_timezones": "Menominee, Iron Mountain, Kingsford, Ironwood"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Merida",
   "country": "Mexico",
   "major_cities_in_timezones": "Mérida, Campeche, Ciudad del Carmen, Kanasín, Valladolid"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Metlakatla",
   "country": "United States"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Mexico_City",
   "country": "Mexico",
   "major_cities_in_timezones": "Mexico City, Iztapalapa, León de los Aldama, Puebla, Ecatepec de Morelos"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Miquelon",
   "country": "Saint Pierre and Miquelon",
   "major_cities_in_timezones": "Saint-Pierre, Miquelon"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Moncton",
   "country": "Canada",
   "major_cities_in_timezones": "Moncton, Saint John, Fredericton, Dieppe, Miramichi"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Monterrey",
   "country": "Mexico",
   "major_cities_in_timezones": "Monterrey, Torreón, Saltillo, Guadalupe, Victoria de Durango"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Montevideo",
   "country": "Uruguay",
   "major_cities_in_timezones": "Montevideo, Salto, Paysandú, Las Piedras, Rivera"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Montserrat",
   "country": "Montserrat",
   "major_cities_in_timezones": "Brades, Saint Peters, Plymouth"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Nassau",
   "country": "Bahamas",
   "major_cities_in_timezones": "Nassau, Lucaya, Freeport, West End, Cooper’s Town"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/New_York",
   "country": "United States",
   "major_cities_in_timezones": "New York City, Brooklyn, Queens, Philadelphia, Manhattan"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Nome",
   "country": "United States"
  },
  {
   "utc": "UTC-2",
   "utc_in_minutes": -120,
   "time_zone": "America/Noronha",
   "country": "Brazil"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/North_Dakota/Beulah",
   "country": "United States"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/North_Dakota/Center",
   "country": "United States"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/North_Dakota/New_Salem",
   "country": "United States",
   "major_cities_in_timezones": "Mandan"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Nuuk",
   "country": "Greenland",
   "major_cities_in_timezones": "Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Ojinaga",
   "country": "Mexico",
   "major_cities_in_timezones": "Manuel Ojinaga, Ojinaga"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Panama",
   "country": "Panama",
   "major_cities_in_timezones": "Panamá, San Miguelito, Juan Díaz, David, Arraiján"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Paramaribo",
   "country": "Suriname",
   "major_cities_in_timezones": "Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Meerzorg"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Phoenix",
   "country": "United States",
   "major_cities_in_timezones": "Phoenix, Tucson, Mesa, Chandler, Gilbert"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Port_of_Spain",
   "country": "Trinidad and Tobago",
   "major_cities_in_timezones": "Chaguanas, Mon Repos, San Fernando, Port of Spain, Rio Claro"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Port-au-Prince",
   "country": "Haiti",
   "major_cities_in_timezones": "Port-au-Prince, Carrefour, Delmas 73, Port-de-Paix, Pétionville"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Porto_Velho",
   "country": "Brazil",
   "major_cities_in_timezones": "Porto Velho, Ji Paraná, Vilhena, Ariquemes, Cacoal"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Puerto_Rico",
   "country": "Puerto Rico",
   "major_cities_in_timezones": "San Juan, Bayamón, Carolina, Ponce, Arecibo"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Punta_Arenas",
   "country": "Chile",
   "major_cities_in_timezones": "Punta Arenas, Puerto Natales"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Rankin_Inlet",
   "country": "Canada"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Recife",
   "country": "Brazil",
   "major_cities_in_timezones": "Recife, Jaboatão, Jaboatão dos Guararapes, Olinda, Paulista"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Regina",
   "country": "Canada",
   "major_cities_in_timezones": "Saskatoon, Regina, Prince Albert, Moose Jaw, North Battleford"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Resolute",
   "country": "Canada"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Rio_Branco",
   "country": "Brazil",
   "major_cities_in_timezones": "Rio Branco, Cruzeiro do Sul, Senador Guiomard, Sena Madureira, Tarauacá"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Santarem",
   "country": "Brazil",
   "major_cities_in_timezones": "Santarém, Altamira, Itaituba, Óbidos, Oriximiná"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Santiago",
   "country": "Chile",
   "major_cities_in_timezones": "Santiago, Puente Alto, Antofagasta, Viña del Mar, Valparaíso"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Santo_Domingo",
   "country": "Dominican Republic",
   "major_cities_in_timezones": "Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macorís"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "America/Sao_Paulo",
   "country": "Brazil",
   "major_cities_in_timezones": "São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba"
  },
  {
   "utc": "UTC-1",
   "utc_in_minutes": -60,
   "time_zone": "America/Scoresbysund",
   "country": "Greenland"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Sitka",
   "country": "United States",
   "major_cities_in_timezones": "Sitka, Ketchikan"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/St_Barthelemy",
   "country": "Saint Barthelemy",
   "major_cities_in_timezones": "Gustavia"
  },
  {
   "utc": "UTC-3:30",
   "utc_in_minutes": -210,
   "time_zone": "America/St_Johns",
   "country": "Canada",
   "major_cities_in_timezones": "St. John's, Mount Pearl, Corner Brook, Conception Bay South, Grand Falls-Windsor"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/St_Kitts",
   "country": "Saint Kitts and Nevis",
   "major_cities_in_timezones": "Basseterre, Fig Tree, Market Shop, Saint Paul’s, Middle Island"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/St_Lucia",
   "country": "Saint Lucia",
   "major_cities_in_timezones": "Castries, Bisee, Vieux Fort, Micoud, Soufrière"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/St_Thomas",
   "country": "U.S. Virgin Islands",
   "major_cities_in_timezones": "Saint Croix, Charlotte Amalie, Cruz Bay"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/St_Vincent",
   "country": "Saint Vincent and the Grenadines",
   "major_cities_in_timezones": "Kingstown, Kingstown Park, Georgetown, Barrouallie, Port Elizabeth"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Swift_Current",
   "country": "Canada",
   "major_cities_in_timezones": "Swift Current"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Tegucigalpa",
   "country": "Honduras",
   "major_cities_in_timezones": "Tegucigalpa, San Pedro Sula, La Ceiba, Choloma, El Progreso"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Thule",
   "country": "Greenland"
  },
  {
   "utc": "UTC-8",
   "utc_in_minutes": -480,
   "time_zone": "America/Tijuana",
   "country": "Mexico",
   "major_cities_in_timezones": "Tijuana, Mexicali, Ensenada, Rosarito, Tecate"
  },
  {
   "utc": "UTC-5",
   "utc_in_minutes": -300,
   "time_zone": "America/Toronto",
   "country": "Canada",
   "major_cities_in_timezones": "Toronto, Montréal, Ottawa, Mississauga, Brampton"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "America/Tortola",
   "country": "British Virgin Islands",
   "major_cities_in_timezones": "Road Town"
  },
  {
   "utc": "UTC-8",
   "utc_in_minutes": -480,
   "time_zone": "America/Vancouver",
   "country": "Canada",
   "major_cities_in_timezones": "Vancouver, Surrey, Okanagan, Victoria, Burnaby"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Whitehorse",
   "country": "Canada",
   "major_cities_in_timezones": "Whitehorse"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "America/Winnipeg",
   "country": "Canada",
   "major_cities_in_timezones": "Winnipeg, Brandon, Steinbach, Kenora, Thompson"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "America/Yakutat",
   "country": "United States"
  },
  {
   "utc": "UTC-7",
   "utc_in_minutes": -420,
   "time_zone": "America/Yellowknife",
   "country": "Canada",
   "major_cities_in_timezones": "Yellowknife"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Antarctica/Casey",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Antarctica/Davis",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Antarctica/DumontDUrville",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Antarctica/Macquarie",
   "country": "Australia"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Antarctica/Mawson",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Antarctica/McMurdo",
   "country": "Antarctica"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "Antarctica/Palmer",
   "country": "Antarctica"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "Antarctica/Rothera",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Antarctica/Syowa",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Antarctica/Troll",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Antarctica/Vostok",
   "country": "Antarctica"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Arctic/Longyearbyen",
   "country": "Svalbard and Jan Mayen",
   "major_cities_in_timezones": "Longyearbyen, Olonkinbyen"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Aden",
   "country": "Yemen",
   "major_cities_in_timezones": "Sanaa, Aden, Al Ḩudaydah, Taiz, Mukalla"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Almaty",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Almaty, Shymkent, Karagandy, Taraz, Astana"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Amman",
   "country": "Jordan",
   "major_cities_in_timezones": "Amman, Zarqa, Irbid, Russeifa, Wādī as Sīr"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Asia/Anadyr",
   "country": "Russia",
   "major_cities_in_timezones": "Anadyr, Bilibino"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Aqtau",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Shevchenko, Zhanaozen, Beyneu, Shetpe, Yeraliyev"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Aqtobe",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Aktobe, Kandyagash, Shalqar, Khromtau, Embi"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Ashgabat",
   "country": "Turkmenistan",
   "major_cities_in_timezones": "Ashgabat, Türkmenabat, Daşoguz, Mary, Balkanabat"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Atyrau",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Atyrau, Qulsary, Shalkar, Balykshi, Maqat"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Baghdad",
   "country": "Iraq",
   "major_cities_in_timezones": "Baghdad, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul, Erbil"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Bahrain",
   "country": "Bahrain",
   "major_cities_in_timezones": "Ar Rifā‘, Manama, Al Muharraq, Dār Kulayb, Madīnat Ḩamad"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Asia/Baku",
   "country": "Azerbaijan",
   "major_cities_in_timezones": "Baku, Sumqayıt, Ganja, Lankaran, Tovuz"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Bangkok",
   "country": "Thailand",
   "major_cities_in_timezones": "Hanoi, Bangkok, Haiphong, Samut Prakan, Huế"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Barnaul",
   "country": "Russia",
   "major_cities_in_timezones": "Barnaul, Biysk, Rubtsovsk, Gorno-Altaysk, Novoaltaysk"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Beirut",
   "country": "Lebanon",
   "major_cities_in_timezones": "Beirut, Ra’s Bayrūt, Tripoli, Sidon, Tyre"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Bishkek",
   "country": "Kyrgyzstan",
   "major_cities_in_timezones": "Bishkek, Osh, Jalal-Abad, Karakol, Tokmok"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Brunei",
   "country": "Brunei",
   "major_cities_in_timezones": "Bandar Seri Begawan, Kuala Belait, Seria, Tutong, Bangar"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Chita",
   "country": "Russia",
   "major_cities_in_timezones": "Chita, Krasnokamensk, Borzya, Petrovsk-Zabaykal’skiy, Aginskoye"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Choibalsan",
   "country": "Mongolia",
   "major_cities_in_timezones": "Baruun-Urt, Choibalsan"
  },
  {
   "utc": "UTC+5:30",
   "utc_in_minutes": 330,
   "time_zone": "Asia/Colombo",
   "country": "Sri Lanka",
   "major_cities_in_timezones": "Colombo, Dehiwala-Mount Lavinia, Maharagama, Jaffna, Moratuwa"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Damascus",
   "country": "Syria",
   "major_cities_in_timezones": "Aleppo, Damascus, Homs, Ḩamāh, Latakia"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Dhaka",
   "country": "Bangladesh",
   "major_cities_in_timezones": "Dhaka, Chattogram, Khulna, Rangpur, Comilla"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Dili",
   "country": "Timor Leste",
   "major_cities_in_timezones": "Dili, Maliana, Suai, Likisá, Aileu"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Asia/Dubai",
   "country": "United Arab Emirates",
   "major_cities_in_timezones": "Dubai, Sharjah, Al Ain City, Abu Dhabi, Ajman City"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Dushanbe",
   "country": "Tajikistan",
   "major_cities_in_timezones": "Dushanbe, Isfara, Istaravshan, Kŭlob, Konibodom"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Famagusta",
   "country": "Cyprus",
   "major_cities_in_timezones": "Famagusta, Kyrenia, Protaras, Paralímni, Lápithos"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Gaza",
   "country": "Palestinian Territory",
   "major_cities_in_timezones": "Gaza, Khān Yūnis, Jabālyā, Rafaḩ, Dayr al Balaḩ"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Hebron",
   "country": "Palestinian Territory",
   "major_cities_in_timezones": "East Jerusalem, Hebron, Nablus, Battir, Ţūlkarm"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Ho_Chi_Minh",
   "country": "Vietnam",
   "major_cities_in_timezones": "Ho Chi Minh City, Da Nang, Biên Hòa, Cần Thơ, Thuận An"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Hong_Kong",
   "country": "Hong Kong",
   "major_cities_in_timezones": "Hong Kong, Kowloon, Victoria, Tuen Mun, Sha Tin"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Hovd",
   "country": "Mongolia",
   "major_cities_in_timezones": "Ulaangom, Khovd, Ölgii, Altai, Uliastay"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Irkutsk",
   "country": "Russia",
   "major_cities_in_timezones": "Irkutsk, Ulan-Ude, Bratsk, Angarsk, Ust’-Ilimsk"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Jakarta",
   "country": "Indonesia",
   "major_cities_in_timezones": "Jakarta, Surabaya, Bekasi, Bandung, Medan"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Jayapura",
   "country": "Indonesia",
   "major_cities_in_timezones": "Jayapura, Ambon, Sorong, Ternate, Manokwari"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Jerusalem",
   "country": "Israel",
   "major_cities_in_timezones": "Jerusalem, Tel Aviv, West Jerusalem, Haifa, Rishon LeTsiyyon"
  },
  {
   "utc": "UTC+4:30",
   "utc_in_minutes": 270,
   "time_zone": "Asia/Kabul",
   "country": "Afghanistan",
   "major_cities_in_timezones": "Kabul, Herāt, Mazār-e Sharīf, Kandahār, Jalālābād"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Asia/Kamchatka",
   "country": "Russia",
   "major_cities_in_timezones": "Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Klyuchi, Mil’kovo"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Karachi",
   "country": "Pakistan",
   "major_cities_in_timezones": "Karachi, Lahore, Faisalabad, Rawalpindi, Multan"
  },
  {
   "utc": "UTC+5:45",
   "utc_in_minutes": 345,
   "time_zone": "Asia/Kathmandu",
   "country": "Nepal",
   "major_cities_in_timezones": "Kathmandu, Bharatpur, Pātan, Birgañj, Biratnagar"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Khandyga",
   "country": "Russia"
  },
  {
   "utc": "UTC+5:30",
   "utc_in_minutes": 330,
   "time_zone": "Asia/Kolkata",
   "country": "India",
   "major_cities_in_timezones": "Mumbai, Delhi, Bengaluru, Hyderābād, Ahmedabad"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Krasnoyarsk",
   "country": "Russia",
   "major_cities_in_timezones": "Krasnoyarsk, Abakan, Norilsk, Achinsk, Kyzyl"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Kuala_Lumpur",
   "country": "Malaysia",
   "major_cities_in_timezones": "Kuala Lumpur, Petaling Jaya, Klang, Johor Bahru, Ipoh"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Kuching",
   "country": "Malaysia",
   "major_cities_in_timezones": "Kota Kinabalu, Sandakan, Kuching, Tawau, Miri"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Kuwait",
   "country": "Kuwait",
   "major_cities_in_timezones": "Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim, Al Farwānīyah"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Macau",
   "country": "Macao",
   "major_cities_in_timezones": "Macau"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Asia/Magadan",
   "country": "Russia",
   "major_cities_in_timezones": "Magadan, Ust-Nera, Susuman, Ola"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Makassar",
   "country": "Indonesia",
   "major_cities_in_timezones": "Makassar, Samarinda, Denpasar, Balikpapan, Banjarmasin"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Manila",
   "country": "Philippines",
   "major_cities_in_timezones": "Quezon City, Davao, Manila, Caloocan City, Budta"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Asia/Muscat",
   "country": "Oman",
   "major_cities_in_timezones": "Muscat, Seeb, Bawshar, ‘Ibrī, Şalālah"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Asia/Nicosia",
   "country": "Cyprus",
   "major_cities_in_timezones": "Nicosia, Limassol, Larnaca, Stróvolos, Paphos"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Novokuznetsk",
   "country": "Russia",
   "major_cities_in_timezones": "Kemerovo, Novokuznetsk, Prokop’yevsk, Leninsk-Kuznetsky, Kiselëvsk"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Novosibirsk",
   "country": "Russia",
   "major_cities_in_timezones": "Novosibirsk, Berdsk, Iskitim, Akademgorodok, Kuybyshev"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Omsk",
   "country": "Russia",
   "major_cities_in_timezones": "Omsk, Tara, Kalachinsk, Znamenskoye, Tavricheskoye"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Oral",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Oral, Aqsay, Dzhanybek, Tasqala, Zhumysker"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Phnom_Penh",
   "country": "Cambodia",
   "major_cities_in_timezones": "Phnom Penh, Takeo, Siem Reap, Battambang, Paoy Paet"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Pontianak",
   "country": "Indonesia",
   "major_cities_in_timezones": "Pontianak, Palangkaraya, Singkawang, Sampit, Sungai Raya"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Pyongyang",
   "country": "North Korea",
   "major_cities_in_timezones": "Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn, Hŭngnam"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Qatar",
   "country": "Qatar",
   "major_cities_in_timezones": "Doha, Ar Rayyān, Umm Şalāl Muḩammad, Al Wakrah, Al Khawr"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Qostanay",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Kostanay, Rudnyy, Baikonur, Zhitikara, Arkalyk"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Qyzylorda",
   "country": "Kazakhstan",
   "major_cities_in_timezones": "Kyzylorda, Novokazalinsk, Aral, Chiili, Yanykurgan"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Asia/Riyadh",
   "country": "Saudi Arabia",
   "major_cities_in_timezones": "Jeddah, Riyadh, Mecca, Medina, Dammam"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Asia/Sakhalin",
   "country": "Russia",
   "major_cities_in_timezones": "Yuzhno-Sakhalinsk, Korsakov, Kholmsk, Okha, Nevel’sk"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Samarkand",
   "country": "Uzbekistan",
   "major_cities_in_timezones": "Samarkand, Nukus, Bukhara, Qarshi, Tirmiz"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Seoul",
   "country": "South Korea",
   "major_cities_in_timezones": "Seoul, Busan, Incheon, Daegu, Gwangju"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Shanghai",
   "country": "China",
   "major_cities_in_timezones": "Shanghai, Beijing, Shenzhen, Guangzhou, Chengdu"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Singapore",
   "country": "Singapore",
   "major_cities_in_timezones": "Singapore, Woodlands, Geylang, Queenstown Estate, Marine Parade"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Asia/Srednekolymsk",
   "country": "Russia"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Taipei",
   "country": "Taiwan",
   "major_cities_in_timezones": "Taipei, Kaohsiung, Taichung, Tainan, Banqiao"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Tashkent",
   "country": "Uzbekistan",
   "major_cities_in_timezones": "Tashkent, Namangan, Andijon, Fergana, Qo‘qon"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Asia/Tbilisi",
   "country": "Georgia",
   "major_cities_in_timezones": "Tbilisi, Batumi, Kutaisi, Rustavi, Sokhumi"
  },
  {
   "utc": "UTC+3:30",
   "utc_in_minutes": 210,
   "time_zone": "Asia/Tehran",
   "country": "Iran",
   "major_cities_in_timezones": "Tehran, Mashhad, Isfahan, Karaj, Tabriz"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Thimphu",
   "country": "Bhutan",
   "major_cities_in_timezones": "Thimphu, Phuntsholing, Tsirang, Punākha, Pemagatshel"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Tokyo",
   "country": "Japan",
   "major_cities_in_timezones": "Tokyo, Yokohama, Osaka, Nagoya, Sapporo"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Tomsk",
   "country": "Russia",
   "major_cities_in_timezones": "Tomsk, Seversk, Strezhevoy, Kolpashevo, Asino"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Asia/Ulaanbaatar",
   "country": "Mongolia",
   "major_cities_in_timezones": "Ulan Bator, Erdenet, Darhan, Mörön, Bayanhongor"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Asia/Urumqi",
   "country": "China",
   "major_cities_in_timezones": "Ürümqi, Shihezi, Korla, Aksu, Kashgar"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Asia/Ust-Nera",
   "country": "Russia"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Asia/Vientiane",
   "country": "Laos",
   "major_cities_in_timezones": "Vientiane, Savannakhet, Pakse, Thakhèk, Luang Prabang"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Asia/Vladivostok",
   "country": "Russia",
   "major_cities_in_timezones": "Khabarovsk, Vladivostok, Khabarovsk Vtoroy, Komsomolsk-on-Amur, Ussuriysk"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Asia/Yakutsk",
   "country": "Russia",
   "major_cities_in_timezones": "Yakutsk, Blagoveshchensk, Belogorsk, Neryungri, Svobodnyy"
  },
  {
   "utc": "UTC+6:30",
   "utc_in_minutes": 390,
   "time_zone": "Asia/Yangon",
   "country": "Myanmar",
   "major_cities_in_timezones": "Yangon, Mandalay, Nay Pyi Taw, Mawlamyine, Kyain Seikgyi Township"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Asia/Yekaterinburg",
   "country": "Russia",
   "major_cities_in_timezones": "Yekaterinburg, Chelyabinsk, Ufa, Perm, Tyumen"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Asia/Yerevan",
   "country": "Armenia",
   "major_cities_in_timezones": "Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan"
  },
  {
   "utc": "UTC-1",
   "utc_in_minutes": -60,
   "time_zone": "Atlantic/Azores",
   "country": "Portugal",
   "major_cities_in_timezones": "Ponta Delgada, Lagoa, Angra do Heroísmo, Rosto de Cão, Rabo de Peixe"
  },
  {
   "utc": "UTC-4",
   "utc_in_minutes": -240,
   "time_zone": "Atlantic/Bermuda",
   "country": "Bermuda",
   "major_cities_in_timezones": "Hamilton"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Atlantic/Canary",
   "country": "Spain",
   "major_cities_in_timezones": "Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arona"
  },
  {
   "utc": "UTC-1",
   "utc_in_minutes": -60,
   "time_zone": "Atlantic/Cape_Verde",
   "country": "Cabo Verde",
   "major_cities_in_timezones": "Praia, Mindelo, Santa Maria, Cova Figueira, Santa Cruz"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Atlantic/Faroe",
   "country": "Faroe Islands",
   "major_cities_in_timezones": "Tórshavn, Klaksvík, Fuglafjørður, Miðvágur, Tvøroyri"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Atlantic/Madeira",
   "country": "Portugal",
   "major_cities_in_timezones": "Funchal, Câmara de Lobos, São Martinho, Caniço, Machico"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Atlantic/Reykjavik",
   "country": "Iceland",
   "major_cities_in_timezones": "Reykjavík, Kópavogur, Hafnarfjörður, Reykjanesbær, Akureyri"
  },
  {
   "utc": "UTC-2",
   "utc_in_minutes": -120,
   "time_zone": "Atlantic/South_Georgia",
   "country": "South Georgia and the South Sandwich Islands",
   "major_cities_in_timezones": "Grytviken"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Atlantic/St_Helena",
   "country": "Saint Helena",
   "major_cities_in_timezones": "Jamestown, Georgetown, Edinburgh of the Seven Seas"
  },
  {
   "utc": "UTC-3",
   "utc_in_minutes": -180,
   "time_zone": "Atlantic/Stanley",
   "country": "Falkland Islands",
   "major_cities_in_timezones": "Stanley"
  },
  {
   "utc": "UTC+9:30",
   "utc_in_minutes": 570,
   "time_zone": "Australia/Adelaide",
   "country": "Australia",
   "major_cities_in_timezones": "Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale, Gawler"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Australia/Brisbane",
   "country": "Australia",
   "major_cities_in_timezones": "Brisbane, Gold Coast, Logan City, Townsville, Cairns"
  },
  {
   "utc": "UTC+9:30",
   "utc_in_minutes": 570,
   "time_zone": "Australia/Broken_Hill",
   "country": "Australia",
   "major_cities_in_timezones": "Broken Hill"
  },
  {
   "utc": "UTC+9:30",
   "utc_in_minutes": 570,
   "time_zone": "Australia/Darwin",
   "country": "Australia",
   "major_cities_in_timezones": "Darwin, Alice Springs, Palmerston, Howard Springs"
  },
  {
   "utc": "UTC+8:45",
   "utc_in_minutes": 525,
   "time_zone": "Australia/Eucla",
   "country": "Australia"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Australia/Hobart",
   "country": "Australia",
   "major_cities_in_timezones": "Hobart, Launceston, Burnie, Devonport, Sandy Bay"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Australia/Lindeman",
   "country": "Australia"
  },
  {
   "utc": "UTC+10:30",
   "utc_in_minutes": 630,
   "time_zone": "Australia/Lord_Howe",
   "country": "Australia"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Australia/Melbourne",
   "country": "Australia",
   "major_cities_in_timezones": "Melbourne, Geelong, Ballarat, Bendigo, Point Cook"
  },
  {
   "utc": "UTC+8",
   "utc_in_minutes": 480,
   "time_zone": "Australia/Perth",
   "country": "Australia",
   "major_cities_in_timezones": "Perth, Mandurah, Bunbury, Baldivis, Geraldton"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Australia/Sydney",
   "country": "Australia",
   "major_cities_in_timezones": "Sydney, Canberra, Newcastle, Wollongong, Maitland"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Amsterdam",
   "country": "Netherlands",
   "major_cities_in_timezones": "Amsterdam, Rotterdam, The Hague, Utrecht, Groningen"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Andorra",
   "country": "Andorra",
   "major_cities_in_timezones": "Andorra la Vella, les Escaldes, Encamp, Sant Julià de Lòria, la Massana"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Europe/Astrakhan",
   "country": "Russia",
   "major_cities_in_timezones": "Astrakhan, Akhtubinsk, Znamensk, Kharabali, Kamyzyak"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Athens",
   "country": "Greece",
   "major_cities_in_timezones": "Athens, Thessaloníki, Pátra, Piraeus, Lárisa"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Belgrade",
   "country": "Serbia",
   "major_cities_in_timezones": "Belgrade, Pristina, Niš, Novi Sad, Prizren"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Berlin",
   "country": "Germany",
   "major_cities_in_timezones": "Berlin, Hamburg, Munich, Köln, Frankfurt am Main"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Bratislava",
   "country": "Slovakia",
   "major_cities_in_timezones": "Bratislava, Košice, Nitra, Prešov, Žilina"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Brussels",
   "country": "Belgium",
   "major_cities_in_timezones": "Brussels, Antwerpen, Gent, Charleroi, Liège"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Bucharest",
   "country": "Romania",
   "major_cities_in_timezones": "Bucharest, Sector 3, Iaşi, Sector 6, Sector 2"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Budapest",
   "country": "Hungary",
   "major_cities_in_timezones": "Budapest, Debrecen, Szeged, Miskolc, Pécs"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Chisinau",
   "country": "Moldova",
   "major_cities_in_timezones": "Chisinau, Tiraspol, Bălţi, Bender, Rîbniţa"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Copenhagen",
   "country": "Denmark",
   "major_cities_in_timezones": "Copenhagen, Århus, Odense, Aalborg, Frederiksberg"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/Dublin",
   "country": "Ireland",
   "major_cities_in_timezones": "Dublin, South Dublin, Cork, Limerick, Gaillimh"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Gibraltar",
   "country": "Gibraltar",
   "major_cities_in_timezones": "Gibraltar"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/Guernsey",
   "country": "Guernsey",
   "major_cities_in_timezones": "Saint Peter Port, Saint Sampson, St Martin, St Anne, Saint Saviour"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Helsinki",
   "country": "Finland",
   "major_cities_in_timezones": "Helsinki, Espoo, Tampere, Oulu, Turku"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/Isle_of_Man",
   "country": "Isle of Man",
   "major_cities_in_timezones": "Douglas, Ramsey, Peel, Port Erin, Castletown"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Istanbul",
   "country": "Turkey",
   "major_cities_in_timezones": "Istanbul, Ankara, Bursa, İzmir, Gaziantep"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/Jersey",
   "country": "Jersey",
   "major_cities_in_timezones": "Saint Helier, Le Hocq"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Kaliningrad",
   "country": "Russia",
   "major_cities_in_timezones": "Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk, Gusev"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Kirov",
   "country": "Russia",
   "major_cities_in_timezones": "Kirov, Kirovo-Chepetsk, Vyatskiye Polyany, Slobodskoy, Kotel’nich"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Kyiv",
   "country": "Ukraine",
   "major_cities_in_timezones": "Kyiv, Kharkiv, Odesa, Dnipro, Donetsk"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/Lisbon",
   "country": "Portugal",
   "major_cities_in_timezones": "Lisbon, Porto, Amadora, Braga, Setúbal"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Ljubljana",
   "country": "Slovenia",
   "major_cities_in_timezones": "Ljubljana, Maribor, Kranj, Celje, Koper"
  },
  {
   "utc": "UTC+0",
   "utc_in_minutes": 0,
   "time_zone": "Europe/London",
   "country": "United Kingdom",
   "major_cities_in_timezones": "London, Birmingham, Liverpool, Glasgow, Sheffield"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Luxembourg",
   "country": "Luxembourg",
   "major_cities_in_timezones": "Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Madrid",
   "country": "Spain",
   "major_cities_in_timezones": "Madrid, Barcelona, Valencia, Sevilla, Zaragoza"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Malta",
   "country": "Malta",
   "major_cities_in_timezones": "San Pawl il-Baħar, Birkirkara, Mosta, Sliema, Qormi"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Mariehamn",
   "country": "Aland Islands",
   "major_cities_in_timezones": "Mariehamn"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Minsk",
   "country": "Belarus",
   "major_cities_in_timezones": "Minsk, Homyel', Hrodna, Mahilyow, Brest"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Monaco",
   "country": "Monaco",
   "major_cities_in_timezones": "Monaco, Monte-Carlo, La Condamine"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Moscow",
   "country": "Russia",
   "major_cities_in_timezones": "Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Oslo",
   "country": "Norway",
   "major_cities_in_timezones": "Oslo, Bergen, Trondheim, Stavanger, Drammen"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Paris",
   "country": "France",
   "major_cities_in_timezones": "Paris, Marseille, Lyon, Toulouse, Nice"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Podgorica",
   "country": "Montenegro",
   "major_cities_in_timezones": "Podgorica, Nikšić, Herceg Novi, Pljevlja, Budva"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Prague",
   "country": "Czechia",
   "major_cities_in_timezones": "Prague, Brno, Ostrava, Pilsen, Liberec"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Riga",
   "country": "Latvia",
   "major_cities_in_timezones": "Riga, Daugavpils, Liepāja, Jelgava, Jūrmala"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Rome",
   "country": "Italy",
   "major_cities_in_timezones": "Rome, Milan, Naples, Turin, Palermo"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Europe/Samara",
   "country": "Russia",
   "major_cities_in_timezones": "Samara, Tolyatti, Izhevsk, Syzran’, Novokuybyshevsk"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/San_Marino",
   "country": "San Marino",
   "major_cities_in_timezones": "Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Sarajevo",
   "country": "Bosnia and Herzegovina",
   "major_cities_in_timezones": "Sarajevo, Banja Luka, Zenica, Tuzla, Mostar"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Europe/Saratov",
   "country": "Russia",
   "major_cities_in_timezones": "Saratov, Balakovo, Engels, Balashov, Vol’sk"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Simferopol",
   "country": "Ukraine",
   "major_cities_in_timezones": "Sevastopol, Simferopol, Kerch, Yevpatoriya, Yalta"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Skopje",
   "country": "North Macedonia",
   "major_cities_in_timezones": "Skopje, Kumanovo, Prilep, Bitola, Čair"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Sofia",
   "country": "Bulgaria",
   "major_cities_in_timezones": "Sofia, Plovdiv, Varna, Burgas, Stara Zagora"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Stockholm",
   "country": "Sweden",
   "major_cities_in_timezones": "Stockholm, Göteborg, Malmö, Uppsala, Örebro"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Tallinn",
   "country": "Estonia",
   "major_cities_in_timezones": "Tallinn, Tartu, Narva, Pärnu, Nõmme"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Tirane",
   "country": "Albania",
   "major_cities_in_timezones": "Tirana, Durrës, Elbasan, Vlorë, Shkodër"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Europe/Ulyanovsk",
   "country": "Russia",
   "major_cities_in_timezones": "Ulyanovsk, Dimitrovgrad, Inza, Barysh, Novoul’yanovsk"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Vaduz",
   "country": "Liechtenstein",
   "major_cities_in_timezones": "Schaan, Vaduz, Triesen, Balzers, Eschen"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Vatican",
   "country": "Vatican",
   "major_cities_in_timezones": "Vatican City"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Vienna",
   "country": "Austria",
   "major_cities_in_timezones": "Vienna, Graz, Linz, Favoriten, Donaustadt"
  },
  {
   "utc": "UTC+2",
   "utc_in_minutes": 120,
   "time_zone": "Europe/Vilnius",
   "country": "Lithuania",
   "major_cities_in_timezones": "Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Europe/Volgograd",
   "country": "Russia",
   "major_cities_in_timezones": "Volgograd, Volzhsky, Kamyshin, Mikhaylovka, Uryupinsk"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Warsaw",
   "country": "Poland",
   "major_cities_in_timezones": "Warsaw, Łódź, Kraków, Wrocław, Poznań"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Zagreb",
   "country": "Croatia",
   "major_cities_in_timezones": "Zagreb, Split, Rijeka, Osijek, Zadar"
  },
  {
   "utc": "UTC+1",
   "utc_in_minutes": 60,
   "time_zone": "Europe/Zurich",
   "country": "Switzerland",
   "major_cities_in_timezones": "Zürich, Genève, Basel, Lausanne, Bern"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Indian/Antananarivo",
   "country": "Madagascar",
   "major_cities_in_timezones": "Antananarivo, Toamasina, Antsirabe, Mahajanga, Fianarantsoa"
  },
  {
   "utc": "UTC+6",
   "utc_in_minutes": 360,
   "time_zone": "Indian/Chagos",
   "country": "British Indian Ocean Territory"
  },
  {
   "utc": "UTC+7",
   "utc_in_minutes": 420,
   "time_zone": "Indian/Christmas",
   "country": "Christmas Island",
   "major_cities_in_timezones": "Flying Fish Cove"
  },
  {
   "utc": "UTC+6:30",
   "utc_in_minutes": 390,
   "time_zone": "Indian/Cocos",
   "country": "Cocos Islands",
   "major_cities_in_timezones": "West Island"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Indian/Comoro",
   "country": "Comoros",
   "major_cities_in_timezones": "Moroni, Moutsamoudou, Fomboni, Domoni, Tsimbeo"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Indian/Kerguelen",
   "country": "French Southern Territories",
   "major_cities_in_timezones": "Port-aux-Français"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Indian/Mahe",
   "country": "Seychelles",
   "major_cities_in_timezones": "Victoria, Anse Boileau, Bel Ombre, Beau Vallon, Cascade"
  },
  {
   "utc": "UTC+5",
   "utc_in_minutes": 300,
   "time_zone": "Indian/Maldives",
   "country": "Maldives",
   "major_cities_in_timezones": "Male, Fuvahmulah, Hithadhoo, Kulhudhuffushi, Thinadhoo"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Indian/Mauritius",
   "country": "Mauritius",
   "major_cities_in_timezones": "Port Louis, Vacoas, Beau Bassin-Rose Hill, Curepipe, Quatre Bornes"
  },
  {
   "utc": "UTC+3",
   "utc_in_minutes": 180,
   "time_zone": "Indian/Mayotte",
   "country": "Mayotte",
   "major_cities_in_timezones": "Mamoudzou, Koungou, Dzaoudzi, Dembeni, Sada"
  },
  {
   "utc": "UTC+4",
   "utc_in_minutes": 240,
   "time_zone": "Indian/Reunion",
   "country": "Reunion",
   "major_cities_in_timezones": "Saint-Denis, Saint-Paul, Le Tampon, Saint-Pierre, Saint-André"
  },
  {
   "utc": "UTC+13",
   "utc_in_minutes": 780,
   "time_zone": "Pacific/Apia",
   "country": "Samoa",
   "major_cities_in_timezones": "Apia, Asau, Mulifanua, Afega, Leulumoega"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Auckland",
   "country": "New Zealand",
   "major_cities_in_timezones": "Auckland, Wellington, Christchurch, Manukau City, North Shore"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Bougainville",
   "country": "Papua New Guinea",
   "major_cities_in_timezones": "Arawa, Buka"
  },
  {
   "utc": "UTC+12:45",
   "utc_in_minutes": 765,
   "time_zone": "Pacific/Chatham",
   "country": "New Zealand",
   "major_cities_in_timezones": "Waitangi"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Pacific/Chuuk",
   "country": "Micronesia",
   "major_cities_in_timezones": "Weno, Colonia"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "Pacific/Easter",
   "country": "Chile"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Efate",
   "country": "Vanuatu",
   "major_cities_in_timezones": "Port-Vila, Luganville, Isangel, Sola, Lakatoro"
  },
  {
   "utc": "UTC+13",
   "utc_in_minutes": 780,
   "time_zone": "Pacific/Fakaofo",
   "country": "Tokelau",
   "major_cities_in_timezones": "Atafu Village, Nukunonu, Fale old settlement"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Fiji",
   "country": "Fiji",
   "major_cities_in_timezones": "Nasinu, Suva, Lautoka, Nadi, Labasa"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Funafuti",
   "country": "Tuvalu",
   "major_cities_in_timezones": "Funafuti, Savave Village, Tanrake Village, Toga Village, Asau Village"
  },
  {
   "utc": "UTC-6",
   "utc_in_minutes": -360,
   "time_zone": "Pacific/Galapagos",
   "country": "Ecuador",
   "major_cities_in_timezones": "Puerto Ayora, Puerto Baquerizo Moreno"
  },
  {
   "utc": "UTC-9",
   "utc_in_minutes": -540,
   "time_zone": "Pacific/Gambier",
   "country": "French Polynesia"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Guadalcanal",
   "country": "Solomon Islands",
   "major_cities_in_timezones": "Honiara, Malango, Auki, Gizo, Kirakira"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Pacific/Guam",
   "country": "Guam",
   "major_cities_in_timezones": "Dededo Village, Yigo Village, Tamuning, Tamuning-Tumon-Harmon Village, Mangilao Village"
  },
  {
   "utc": "UTC-10",
   "utc_in_minutes": -600,
   "time_zone": "Pacific/Honolulu",
   "country": "United States",
   "major_cities_in_timezones": "Honolulu, East Honolulu, Pearl City, Hilo, Kailua"
  },
  {
   "utc": "UTC+13",
   "utc_in_minutes": 780,
   "time_zone": "Pacific/Kanton",
   "country": "Kiribati"
  },
  {
   "utc": "UTC+14",
   "utc_in_minutes": 840,
   "time_zone": "Pacific/Kiritimati",
   "country": "Kiribati"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Kosrae",
   "country": "Micronesia",
   "major_cities_in_timezones": "Tofol"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Kwajalein",
   "country": "Marshall Islands",
   "major_cities_in_timezones": "Ebaye, Jabat"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Majuro",
   "country": "Marshall Islands",
   "major_cities_in_timezones": "Majuro, Arno, Jabor, Wotje, Mili"
  },
  {
   "utc": "UTC-9:30",
   "utc_in_minutes": -570,
   "time_zone": "Pacific/Marquesas",
   "country": "French Polynesia",
   "major_cities_in_timezones": "Taiohae"
  },
  {
   "utc": "UTC-11",
   "utc_in_minutes": -660,
   "time_zone": "Pacific/Midway",
   "country": "United States Minor Outlying Islands"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Nauru",
   "country": "Nauru",
   "major_cities_in_timezones": "Yaren, Baiti, Anabar, Uaboe, Ijuw"
  },
  {
   "utc": "UTC-11",
   "utc_in_minutes": -660,
   "time_zone": "Pacific/Niue",
   "country": "Niue",
   "major_cities_in_timezones": "Alofi"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Norfolk",
   "country": "Norfolk Island",
   "major_cities_in_timezones": "Kingston"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Noumea",
   "country": "New Caledonia",
   "major_cities_in_timezones": "Nouméa, Mont-Dore, Dumbéa, Païta, Wé"
  },
  {
   "utc": "UTC-11",
   "utc_in_minutes": -660,
   "time_zone": "Pacific/Pago_Pago",
   "country": "American Samoa",
   "major_cities_in_timezones": "Pago Pago, Tāfuna, Ta`ū, Taulaga"
  },
  {
   "utc": "UTC+9",
   "utc_in_minutes": 540,
   "time_zone": "Pacific/Palau",
   "country": "Palau",
   "major_cities_in_timezones": "Koror, Koror Town, Kloulklubed, Ulimang, Mengellang"
  },
  {
   "utc": "UTC-8",
   "utc_in_minutes": -480,
   "time_zone": "Pacific/Pitcairn",
   "country": "Pitcairn",
   "major_cities_in_timezones": "Adamstown"
  },
  {
   "utc": "UTC+11",
   "utc_in_minutes": 660,
   "time_zone": "Pacific/Pohnpei",
   "country": "Micronesia",
   "major_cities_in_timezones": "Kolonia, Kolonia Town, Palikir - National Government Center"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Pacific/Port_Moresby",
   "country": "Papua New Guinea",
   "major_cities_in_timezones": "Port Moresby, Lae, Mount Hagen, Popondetta, Madang"
  },
  {
   "utc": "UTC-10",
   "utc_in_minutes": -600,
   "time_zone": "Pacific/Rarotonga",
   "country": "Cook Islands",
   "major_cities_in_timezones": "Avarua"
  },
  {
   "utc": "UTC+10",
   "utc_in_minutes": 600,
   "time_zone": "Pacific/Saipan",
   "country": "Northern Mariana Islands",
   "major_cities_in_timezones": "Saipan, San Jose Village"
  },
  {
   "utc": "UTC-10",
   "utc_in_minutes": -600,
   "time_zone": "Pacific/Tahiti",
   "country": "French Polynesia",
   "major_cities_in_timezones": "Faaa, Papeete, Punaauia, Pirae, Mahina"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Tarawa",
   "country": "Kiribati",
   "major_cities_in_timezones": "Tarawa, Betio Village, Bikenibeu Village"
  },
  {
   "utc": "UTC+13",
   "utc_in_minutes": 780,
   "time_zone": "Pacific/Tongatapu",
   "country": "Tonga",
   "major_cities_in_timezones": "Nuku‘alofa, Lapaha, Neiafu, Pangai, ‘Ohonua"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Wake",
   "country": "United States Minor Outlying Islands"
  },
  {
   "utc": "UTC+12",
   "utc_in_minutes": 720,
   "time_zone": "Pacific/Wallis",
   "country": "Wallis and Futuna",
   "major_cities_in_timezones": "Mata-Utu, Leava, Alo"
  }
 ]

 const timeZoneDataModified1=[]
 const timeZoneDataModified2=[]


 for (let i=0;i<timeZoneData.length;i++) {

  let obj
  if(timeZoneData[i].major_cities_in_timezones?.split(',').length>0){
    for (let j=0;j<timeZoneData[i].major_cities_in_timezones.split(',').length;j++){
      // console.log(timeZoneData[i].major_cities_in_timezones.split(','))
      obj ={
        "utc": timeZoneData[i].utc,
   "utc_in_minutes": timeZoneData[i].utc_in_minutes,
   "time_zone": timeZoneData[i].time_zone,
   "country": timeZoneData[i].country,
   "city":timeZoneData[i].major_cities_in_timezones.split(',')[j] 
      }
      timeZoneDataModified1.push(obj)
    }
    }
    if(timeZoneData[i].major_cities_in_timezones===undefined){
      obj ={
        "utc": timeZoneData[i].utc,
   "utc_in_minutes": timeZoneData[i].utc_in_minutes,
   "time_zone": timeZoneData[i].time_zone,
   "country": timeZoneData[i].country,
      }
      timeZoneDataModified2.push(obj)
  }
 }

 timeZoneDataModified1.sort((a, b) => a.utc_in_minutes-b.utc_in_minutes

);

 timeZoneDataModified1.sort((a, b) => {
  
    const nameA = a.country.toLowerCase(); // ignore upper and lowercase
    const nameB = b.country.toLowerCase(); // ignore upper and lowercase
    // return nameA.localeCompare(nameB)
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  }
  
);



  console.log(timeZoneDataModified1,timeZoneDataModified2)

 const today = new Date()// get today's date
 const nextDate = new Date(today)
 console.log(nextDate.setDate(today.getDate() + 0))
const tomorrow = nextDate.toDateString()
// 

const tomorrow1 = new Date(tomorrow).toLocaleDateString().split("/").reverse().join("-")+'T'+"22:00:00"

console.log(tomorrow1)

function App() {
  
  const importantDays = [{id:0,day:'New Year',date:'2024-01-01T00:00:00',message:"Happy New Year"}, {id:1,day:'Christmas',date:'2023-12-25T00:00:00',message:"Merry Christmas"},{id:3,day:'Tomorrow',date:tomorrow1,message:"Happy Test Day"}]
  const [impDay,setImpDay] = useState(importantDays[0])
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [timezone,setTimezone] = useState('Asia/Kolkata')
  const [filteredTime,setFilteredTime] = useState(timeZoneData[247])
  const [fullScreen, setFullScreen] = useState(false)

  let intervalVar
  
 
  const changeTheDay = (id) =>{
    console.log(impDay)
    console.log(id)
    const choosenDay = importantDays.filter(item => item.day===id)
    console.log(choosenDay)
    setImpDay(...choosenDay)
    
  }
 

  const timeFunction = () =>{
    
    intervalVar = setInterval(()=>{
     
      const date = new Date()
      var offset = date.getTimezoneOffset();
      const newYearDate = new Date(impDay.date)
      const diffMillSecs = newYearDate- date 
      - offset*60*1000 - filteredTime.utc_in_minutes*60*1000
 
    
      setDays(Math.floor(diffMillSecs/(1000*60*60*24)))
    
      setHours(Math.floor(diffMillSecs/(1000*60*60)) - Math.floor(diffMillSecs/(1000*60*60*24))*24)
    
      setMinutes(Math.floor(diffMillSecs/(1000*60)) - (Math.floor(diffMillSecs/(1000*60*60*24)))*24*60 -  (Math.floor(diffMillSecs/(1000*60*60)) - Math.floor(diffMillSecs/(1000*60*60*24))*24)*60) 
    
      setSeconds(Math.floor(diffMillSecs/1000) - (Math.floor(diffMillSecs/(1000*60*60*24)))*24*60*60 - (Math.floor(diffMillSecs/(1000*60*60)) - Math.floor(diffMillSecs/(1000*60*60*24))*24)*60*60 - (Math.floor(diffMillSecs/(1000*60)) - (Math.floor(diffMillSecs/(1000*60*60*24)))*24*60 -  (Math.floor(diffMillSecs/(1000*60*60)) - Math.floor(diffMillSecs/(1000*60*60*24))*24)*60)*60 )
    
    
    
      },1000)
      
       
  }


  useEffect(()=>{
  
    
    timeFunction()
     return ()=>clearInterval(intervalVar)
  },[impDay,filteredTime]
  )
  

  

  const setIntervalFunction = (e) =>{
    
    
    const timeFilter = timeZoneDataModified1.filter(item=> item.city===e.target.value)
    setTimezone(timeFilter[0].time_zone)
    console.log(timeFilter)
    setFilteredTime(...timeFilter)
  
}


  return (
    <div className="App">
      
       
      <div className={`css-importantdays-container ${fullScreen && 'css-hide-header'}`}>
        <div>
        
        <select onChange={(e)=>setIntervalFunction(e)} 
          // value={timezone}
            className='css-select-properties'>
              <optgroup>
          {
            timeZoneDataModified1.map(item=>
              {
              if(item.city!==undefined){
             return   <option value={item.city} >{item.country} - {item.city} - {item.utc}</option>
              }
            }
              )
          }
          </optgroup>
          </select>
        </div>
        <div className='css-impdays-button-properties'>
        <select onChange={(e)=>changeTheDay(e.target.value)} value={impDay.day} className='css-select-properties'>
        <optgroup>
          {
            importantDays.map(item=>
              <option value={item.day} >{item.day}</option>)
          }
          </optgroup>
          </select>

        </div>
        <div className='css-selected-present-timezone-properties'>
        <p>Selected Time Zone : {timezone}</p>
        <p>Your Time Zone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        </div>
      </div>

     
      <div className='css-countdown-display-properties'>
        <div className={`css-time-display-properties ${fullScreen && 'css-enlarge-text'}`}>
      {days>0 && <p>{days.toString().length===1 ? '0'+ days.toString():days}days</p>}
      {!(days===0 && hours===0) && <p>{hours.toString().length===1 ? '0'+ hours.toString():hours}hours</p>}
      {!(days===0 && hours===0 && minutes===0) && <p>{minutes.toString().length===1 ? '0'+ minutes.toString():minutes}minutes</p>}
      {((days>=0 && minutes!==0) || (days>=0 && seconds!==0)) && <p>{seconds.toString().length===1 ? '0'+ seconds.toString():seconds}seconds</p>}
      {(days<0) && <p>{impDay.message}</p>}
        </div>
      </div>
      
      <div className='css-fullscreen-button'>
        <button onClick={()=>setFullScreen(!fullScreen)} className='button-17'>{!fullScreen? <RiFullscreenExitLine />:<IoMdClose />}</button>
      </div>
    </div>
  );
}

export default App;
