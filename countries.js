// Base de datos de países con sus códigos ISO, regiones y capitales
const countries = [
    // Europa
    { name: "España", code: "es", region: "europe", capital: "Madrid" },
    { name: "Francia", code: "fr", region: "europe", capital: "París" },
    { name: "Alemania", code: "de", region: "europe", capital: "Berlín" },
    { name: "Italia", code: "it", region: "europe", capital: "Roma" },
    { name: "Reino Unido", code: "gb", region: "europe", capital: "Londres" },
    { name: "Portugal", code: "pt", region: "europe", capital: "Lisboa" },
    { name: "Países Bajos", code: "nl", region: "europe", capital: "Ámsterdam" },
    { name: "Bélgica", code: "be", region: "europe", capital: "Bruselas" },
    { name: "Suiza", code: "ch", region: "europe", capital: "Berna" },
    { name: "Austria", code: "at", region: "europe", capital: "Viena" },
    { name: "Grecia", code: "gr", region: "europe", capital: "Atenas" },
    { name: "Suecia", code: "se", region: "europe", capital: "Estocolmo" },
    { name: "Noruega", code: "no", region: "europe", capital: "Oslo" },
    { name: "Dinamarca", code: "dk", region: "europe", capital: "Copenhague" },
    { name: "Finlandia", code: "fi", region: "europe", capital: "Helsinki" },
    { name: "Irlanda", code: "ie", region: "europe", capital: "Dublín" },
    { name: "Polonia", code: "pl", region: "europe", capital: "Varsovia" },
    { name: "Rumania", code: "ro", region: "europe", capital: "Bucarest" },
    { name: "Bulgaria", code: "bg", region: "europe", capital: "Sofía" },
    { name: "Hungría", code: "hu", region: "europe", capital: "Budapest" },
    { name: "República Checa", code: "cz", region: "europe", capital: "Praga" },
    { name: "Eslovaquia", code: "sk", region: "europe", capital: "Bratislava" },
    { name: "Croacia", code: "hr", region: "europe", capital: "Zagreb" },
    { name: "Eslovenia", code: "si", region: "europe", capital: "Liubliana" },
    { name: "Serbia", code: "rs", region: "europe", capital: "Belgrado" },
    { name: "Bosnia y Herzegovina", code: "ba", region: "europe", capital: "Sarajevo" },
    { name: "Macedonia del Norte", code: "mk", region: "europe", capital: "Skopie" },
    { name: "Albania", code: "al", region: "europe", capital: "Tirana" },
    { name: "Montenegro", code: "me", region: "europe", capital: "Podgorica" },
    { name: "Ucrania", code: "ua", region: "europe", capital: "Kiev" },
    { name: "Bielorrusia", code: "by", region: "europe", capital: "Minsk" },
    { name: "Lituania", code: "lt", region: "europe", capital: "Vilna" },
    { name: "Letonia", code: "lv", region: "europe", capital: "Riga" },
    { name: "Estonia", code: "ee", region: "europe", capital: "Tallin" },
    { name: "Rusia", code: "ru", region: "europe", capital: "Moscú" },
    { name: "Moldavia", code: "md", region: "europe", capital: "Chisináu" },
    { name: "Islandia", code: "is", region: "europe", capital: "Reikiavik" },
    { name: "Malta", code: "mt", region: "europe", capital: "La Valeta" },
    { name: "Chipre", code: "cy", region: "europe", capital: "Nicosia" },
    { name: "Luxemburgo", code: "lu", region: "europe", capital: "Luxemburgo" },
    
    // América
    { name: "Estados Unidos", code: "us", region: "america", capital: "Washington D.C." },
    { name: "Canadá", code: "ca", region: "america", capital: "Ottawa" },
    { name: "México", code: "mx", region: "america", capital: "Ciudad de México" },
    { name: "Brasil", code: "br", region: "america", capital: "Brasilia" },
    { name: "Argentina", code: "ar", region: "america", capital: "Buenos Aires" },
    { name: "Colombia", code: "co", region: "america", capital: "Bogotá" },
    { name: "Perú", code: "pe", region: "america", capital: "Lima" },
    { name: "Venezuela", code: "ve", region: "america", capital: "Caracas" },
    { name: "Chile", code: "cl", region: "america", capital: "Santiago" },
    { name: "Ecuador", code: "ec", region: "america", capital: "Quito" },
    { name: "Bolivia", code: "bo", region: "america", capital: "La Paz" },
    { name: "Paraguay", code: "py", region: "america", capital: "Asunción" },
    { name: "Uruguay", code: "uy", region: "america", capital: "Montevideo" },
    { name: "Cuba", code: "cu", region: "america", capital: "La Habana" },
    { name: "República Dominicana", code: "do", region: "america", capital: "Santo Domingo" },
    { name: "Guatemala", code: "gt", region: "america", capital: "Ciudad de Guatemala" },
    { name: "Honduras", code: "hn", region: "america", capital: "Tegucigalpa" },
    { name: "El Salvador", code: "sv", region: "america", capital: "San Salvador" },
    { name: "Nicaragua", code: "ni", region: "america", capital: "Managua" },
    { name: "Costa Rica", code: "cr", region: "america", capital: "San José" },
    { name: "Panamá", code: "pa", region: "america", capital: "Ciudad de Panamá" },
    { name: "Jamaica", code: "jm", region: "america", capital: "Kingston" },
    { name: "Haití", code: "ht", region: "america", capital: "Puerto Príncipe" },
    { name: "Bahamas", code: "bs", region: "america", capital: "Nasáu" },
    { name: "Trinidad y Tobago", code: "tt", region: "america", capital: "Puerto España" },
    { name: "Belice", code: "bz", region: "america", capital: "Belmopán" },
    { name: "Guyana", code: "gy", region: "america", capital: "Georgetown" },
    { name: "Surinam", code: "sr", region: "america", capital: "Paramaribo" },
    
    // Asia
    { name: "China", code: "cn", region: "asia", capital: "Pekín" },
    { name: "Japón", code: "jp", region: "asia", capital: "Tokio" },
    { name: "India", code: "in", region: "asia", capital: "Nueva Delhi" },
    { name: "Corea del Sur", code: "kr", region: "asia", capital: "Seúl" },
    { name: "Corea del Norte", code: "kp", region: "asia", capital: "Pionyang" },
    { name: "Vietnam", code: "vn", region: "asia", capital: "Hanói" },
    { name: "Tailandia", code: "th", region: "asia", capital: "Bangkok" },
    { name: "Indonesia", code: "id", region: "asia", capital: "Yakarta" },
    { name: "Malasia", code: "my", region: "asia", capital: "Kuala Lumpur" },
    { name: "Filipinas", code: "ph", region: "asia", capital: "Manila" },
    { name: "Singapur", code: "sg", region: "asia", capital: "Singapur" },
    { name: "Pakistán", code: "pk", region: "asia", capital: "Islamabad" },
    { name: "Bangladesh", code: "bd", region: "asia", capital: "Daca" },
    { name: "Arabia Saudita", code: "sa", region: "asia", capital: "Riad" },
    { name: "Emiratos Árabes Unidos", code: "ae", region: "asia", capital: "Abu Dabi" },
    { name: "Qatar", code: "qa", region: "asia", capital: "Doha" },
    { name: "Kuwait", code: "kw", region: "asia", capital: "Kuwait" },
    { name: "Irak", code: "iq", region: "asia", capital: "Bagdad" },
    { name: "Irán", code: "ir", region: "asia", capital: "Teherán" },
    { name: "Siria", code: "sy", region: "asia", capital: "Damasco" },
    { name: "Jordania", code: "jo", region: "asia", capital: "Amán" },
    { name: "Líbano", code: "lb", region: "asia", capital: "Beirut" },
    { name: "Israel", code: "il", region: "asia", capital: "Jerusalén" },
    { name: "Turquía", code: "tr", region: "asia", capital: "Ankara" },
    { name: "Afganistán", code: "af", region: "asia", capital: "Kabul" },
    { name: "Nepal", code: "np", region: "asia", capital: "Katmandú" },
    { name: "Sri Lanka", code: "lk", region: "asia", capital: "Colombo" },
    { name: "Myanmar", code: "mm", region: "asia", capital: "Naipyidó" },
    { name: "Camboya", code: "kh", region: "asia", capital: "Nom Pen" },
    { name: "Laos", code: "la", region: "asia", capital: "Vientián" },
    { name: "Mongolia", code: "mn", region: "asia", capital: "Ulán Bator" },
    { name: "Kazajistán", code: "kz", region: "asia", capital: "Nursultán" },
    { name: "Uzbekistán", code: "uz", region: "asia", capital: "Taskent" },
    { name: "Turkmenistán", code: "tm", region: "asia", capital: "Asjabad" },
    { name: "Kirguistán", code: "kg", region: "asia", capital: "Biskek" },
    { name: "Tayikistán", code: "tj", region: "asia", capital: "Dusambé" },
    { name: "Yemen", code: "ye", region: "asia", capital: "Saná" },
    { name: "Omán", code: "om", region: "asia", capital: "Mascate" },
    { name: "Bahréin", code: "bh", region: "asia", capital: "Manama" },
    { name: "Azerbaiyán", code: "az", region: "asia", capital: "Bakú" },
    { name: "Georgia", code: "ge", region: "asia", capital: "Tiflis" },
    { name: "Armenia", code: "am", region: "asia", capital: "Ereván" },
    
    // África
    { name: "Egipto", code: "eg", region: "africa", capital: "El Cairo" },
    { name: "Sudáfrica", code: "za", region: "africa", capital: "Pretoria" },
    { name: "Nigeria", code: "ng", region: "africa", capital: "Abuya" },
    { name: "Kenia", code: "ke", region: "africa", capital: "Nairobi" },
    { name: "Etiopía", code: "et", region: "africa", capital: "Adís Abeba" },
    { name: "Ghana", code: "gh", region: "africa", capital: "Accra" },
    { name: "Tanzania", code: "tz", region: "africa", capital: "Dodoma" },
    { name: "Marruecos", code: "ma", region: "africa", capital: "Rabat" },
    { name: "Argelia", code: "dz", region: "africa", capital: "Argel" },
    { name: "Túnez", code: "tn", region: "africa", capital: "Túnez" },
    { name: "Libia", code: "ly", region: "africa", capital: "Trípoli" },
    { name: "Senegal", code: "sn", region: "africa", capital: "Dakar" },
    { name: "Costa de Marfil", code: "ci", region: "africa", capital: "Yamusukro" },
    { name: "Camerún", code: "cm", region: "africa", capital: "Yaundé" },
    { name: "Angola", code: "ao", region: "africa", capital: "Luanda" },
    { name: "Sudán", code: "sd", region: "africa", capital: "Jartum" },
    { name: "Uganda", code: "ug", region: "africa", capital: "Kampala" },
    { name: "Mozambique", code: "mz", region: "africa", capital: "Maputo" },
    { name: "Zimbabue", code: "zw", region: "africa", capital: "Harare" },
    { name: "Zambia", code: "zm", region: "africa", capital: "Lusaka" },
    { name: "Ruanda", code: "rw", region: "africa", capital: "Kigali" },
    { name: "Somalia", code: "so", region: "africa", capital: "Mogadiscio" },
    { name: "Madagascar", code: "mg", region: "africa", capital: "Antananarivo" },
    { name: "Mauritania", code: "mr", region: "africa", capital: "Nuakchot" },
    { name: "Malí", code: "ml", region: "africa", capital: "Bamako" },
    { name: "Níger", code: "ne", region: "africa", capital: "Niamey" },
    { name: "Chad", code: "td", region: "africa", capital: "Yamena" },
    { name: "Burkina Faso", code: "bf", region: "africa", capital: "Uagadugú" },
    { name: "Guinea", code: "gn", region: "africa", capital: "Conakry" },
    { name: "Benín", code: "bj", region: "africa", capital: "Porto Novo" },
    { name: "Gabón", code: "ga", region: "africa", capital: "Libreville" },
    { name: "República Democrática del Congo", code: "cd", region: "africa", capital: "Kinsasa" },
    { name: "República del Congo", code: "cg", region: "africa", capital: "Brazzaville" },
    { name: "Botsuana", code: "bw", region: "africa", capital: "Gaborone" },
    { name: "Namibia", code: "na", region: "africa", capital: "Windhoek" },
    { name: "Sudán del Sur", code: "ss", region: "africa", capital: "Yuba" },
    { name: "Eritrea", code: "er", region: "africa", capital: "Asmara" },
    { name: "Yibuti", code: "dj", region: "africa", capital: "Yibuti" },
    { name: "Gambia", code: "gm", region: "africa", capital: "Banjul" },
    { name: "Guinea-Bisáu", code: "gw", region: "africa", capital: "Bisáu" },
    
    // Oceanía
    { name: "Australia", code: "au", region: "oceania", capital: "Canberra" },
    { name: "Nueva Zelanda", code: "nz", region: "oceania", capital: "Wellington" },
    { name: "Papúa Nueva Guinea", code: "pg", region: "oceania", capital: "Puerto Moresby" },
    { name: "Fiyi", code: "fj", region: "oceania", capital: "Suva" },
    { name: "Islas Salomón", code: "sb", region: "oceania", capital: "Honiara" },
    { name: "Vanuatu", code: "vu", region: "oceania", capital: "Port Vila" },
    { name: "Samoa", code: "ws", region: "oceania", capital: "Apia" },
    { name: "Kiribati", code: "ki", region: "oceania", capital: "Tarawa" },
    { name: "Micronesia", code: "fm", region: "oceania", capital: "Palikir" },
    { name: "Tonga", code: "to", region: "oceania", capital: "Nukualofa" },
    { name: "Islas Marshall", code: "mh", region: "oceania", capital: "Majuro" },
    { name: "Palau", code: "pw", region: "oceania", capital: "Ngerulmud" },
    { name: "Tuvalu", code: "tv", region: "oceania", capital: "Funafuti" },
    { name: "Nauru", code: "nr", region: "oceania", capital: "Yaren" }
];

// Función para obtener la URL de la bandera a partir del código ISO del país
function getFlagUrl(countryCode) {
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
}

// Función para obtener la URL de la imagen de la capital
function getCapitalImageUrl(countryCode) {
    // Usamos una API de imágenes de ciudades (placeholder)
    // En un entorno real, se podría usar una API como Unsplash, Pixabay, etc.
    return `https://source.unsplash.com/400x300/?${countries.find(country => country.code === countryCode).capital},city,landmark`;
}

// Función para obtener países por región
function getCountriesByRegion(region) {
    if (region === 'all') {
        return countries;
    }
    return countries.filter(country => country.region === region);
}