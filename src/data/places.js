const places = [
    {
        id: "1",
        city: 'A Coruña',
        country: "Spain",
        categories: '2',
        description: 'Coruña is the most populated city in Galicia, Spain and the second most populated municipality in the autonomous community and seventeenth overall in the country',
        hotels: 'https://bit.ly/3jrDbrS',
        img: "https://www.iberian-escapes.com/images/a_coruna.jpg",
        img2: 'https://media.quincemil.com/imagenes/2019/12/11012700/iStock-673291920-1080x1080.jpg',
        img3: 'https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/spain_la_coruna_3840x2106.jpg?mw=1920&hash=7DE176663AEB6E558E9A28E517EF3D3F6B8C39FB'
    },
    {
        id: "2",
        city: 'Madrid',
        country: "Spain",
        categories: '3',
        description: 'Is the capital and most populous city of Spain. The city has almost 3.4 million inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU',
        hotels: 'https://bit.ly/3WZE1K9',
        img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg",
        img2: "https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/madrid/vistas-madrid-gran-via-c-alev-takil-u-x2Or94kjaqo.jpg",
        img3: "https://estaticos.esmadrid.com/cdn/farfuture/cWEgd6nsFZn5_x7RaedKMR9rkPA7ZC3zVuc90k6gXwA/mtime:1646729215/sites/default/files/styles/content_type_full/public/editorial/estaciones.jpg?itok=8J6mUZg3"

    },
    {
        id: "3",
        city: 'Paris',
        country: "France",
        categories: '3',
        description: 'Is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi), making it the 30th most densely populated city in the world in 2020.',
        hotels: 'https://bit.ly/3wOmiKT',
        img: "https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg",
        img2: "https://www.campusfrance.org/sites/default/files/paris_0.jpg",
        img3: "https://www.viajarparis.com/img/sobre-paris-introduccion.jpg"
    },
    {
        id: "4",
        city: 'Berlin',
        country: "Germany",
        categories: '3',
        description: "Is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city, according to population within city limits.One of Germany's sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg's capital.",
        hotels: 'https://bit.ly/3X48tCO',
        img: "https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg",
        img2: "https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:16-9?ts=1650383336641&dpr=off",
        img3: "https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Festival%20of%20Lights%202014_c_berlin-lights.com_DL_PPT_0.jpg?h=959603b6&itok=bqmepQmk"
    },
    {
        id: "5",
        city: 'El Calafate',
        country: "Argentina",
        categories: '1',
        description: "Also known as Calafate, is a city in Patagonia, Argentina. It is situated on the southern border of Lake Argentino, in the southwest part of the Santa Cruz Province, about 320 kilometres (200 mi) northwest of Río Gallegos. The name of the city is derived from a little bush with yellow flowers and dark blue berries that is very common in Patagonia: the calafate (Berberis buxifolia); the word comes from the word calafate, which is Spanish for 'caulk'.",
        hotels: 'http://bit.ly/3YlsGVY',
        img: "https://viajoconvos.com.ar/wp-content/uploads/2021/09/Calafate.jpg",
        img2: "https://mundoaustral.com.ar/wp-content/uploads/2022/05/slide-27-1.jpg",
        img3: "https://d2j6dbq0eux0bg.cloudfront.net/images/68931514/3169004729.jpg"
    },
    {
        id: "6",
        city: 'Buenos Aires',
        country: "Argentina",
        categories: '3',
        description: "is the capital and primate city of Argentina. The city is located on the western shore of the Río de la Plata, on South America's southeastern coast. 'Buenos Aires' can be translated as 'fair winds' or 'good airs', but the former was the meaning intended by the founders in the 16th century, by the use of the original name 'Real de Nuestra Señora Santa María del Buen Ayre', named after the Madonna of Bonaria in Sardinia, Italy.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://estaticos-cdn.elperiodico.com/clip/80ccbd4a-9d52-4b2a-b2b3-e9c254b3447c_alta-libre-aspect-ratio_default_0.jpg",
        img2:'https://destinationlesstravel.com/wp-content/uploads/2022/08/Beautiful-View-of-the-city-of-Buenos-Aires-Argentina.jpg.webp',
        img3: 'https://www.costacruceros.es/content/dam/costa/inventory-assets/ports/BUE/buenos-aires.jpg'
    },
    {
        id: "7",
        city: 'Rome',
        country: "Italy",
        categories: '3',
        description: "Is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. ",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg",
        img2: 'https://aunclicdelaaventura.com/wp-content/uploads/2015/05/Fontana-di-Trevi-BR-F-e1515173059785.jpg',
        img3: 'https://media.iatiseguros.com/wp-content/uploads/2019/03/04010917/que-hacer-roma-10.jpg'
    },
    {
        id: "8",
        city: 'Salta',
        country: "Argentina",
        categories: '1',
        description: "Is the capital and largest city in the Argentine province of the same name. With a population of 618,375 according to the 2010 census, it is also the 7th most-populous city in Argentina. The city serves as the cultural and economic center of the Valle de Lerma Metropolitan Area (Spanish: Área Metropolitana del Valle de Lerma, AMVL), which is home to over 50.9% of the population of Salta Province and also includes the municipalities of La Caldera, Vaqueros, Campo Quijano, Rosario de Lerma, Cerrillos, La Merced and San Lorenzo.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://media.tacdn.com/media/attractions-content--1x-1/0b/2c/ef/d8.jpg",
        img2: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Salta.jpg',
        img3: 'https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2022/03/salta.jpg?fit=750%2C408&ssl=1'
    },
    {
        id: "9",
        city: 'El Chalten',
        country: "Argentina",
        categories: '1',
        description: "Is a small mountain village in Santa Cruz Province, Argentina. It is located on the riverside of Rio de las Vueltas, within the Los Glaciares National Park (section Reserva Nacional Zona Viedma) near the base of Cerro Torre and Cerro Fitz Roy spires, both popular for climbing. It is 220 km north of El Calafate. It is also a popular base for hiking numerous trails, such as those to the base of surrounding peaks and glacial lakes, such as Laguna Torre and Laguna de los Tres (near the base of Fitz Roy).",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://img3.oastatic.com/img2/56877554/max/laguna-de-los-tres.jpg",
        img2: 'https://conocedores.com/wp-content/uploads/2022/07/el-chalten-argentina-13072022.webp',
        img3: 'https://www.adonde-y-cuando.es/site/images/illustration/el-chalten_533.jpg'
    },
    {
        id: "10",
        city: 'Machu Picchu',
        country: "Peru",
        categories: '1',
        description: "Is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.Often referred to as the 'Lost City of the Incas', it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province[4] above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg"
    },
    {
        id: "11",
        city: 'Varadero',
        country: "Cuba",
        categories: '2',
        description: "Also referred to as Playa Azul (Blue Beach), is a resort town in the province of Matanzas, Cuba, and one of the largest resort areas in the Caribbean. Varadero Beach is rated one of the world's best beaches in TripAdvisor's Traveler's Choice Awards since 2019, ranking at number two.[3] Common activities include fishing and excursions to Matanzas, Cárdenas, and the Península de Zapata.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://content.r9cdn.net/rimg/dimg/76/09/5da6a15f-lm-159315-1736a4bb293.jpg?width=688&height=350&xhint=1850&yhint=1532&crop=true"
    },
    {
        id: "12",
        city: 'HolBox Island',
        country: "Mexico",
        categories: '2',
        description: "Is an island in the Mexican state of Quintana Roo, located on the north coast of the Yucatán Peninsula. It is approximately 41.84 kilometres (26.00 miles) long and 1.5 kilometres (0.9 miles) wide, and it is separated from the mainland by 10 km of shallow lagoon that is home to flamingos, pelicans and other rich birdlife. Holbox Island is part of the Municipality of Lázaro Cárdenas and also part of the Yum Balam Biosphere Reserve.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/02/holbox-isla-pasion-888.jpg"
    },
    {
        id: "13",
        city: 'New York',
        country: "EE.UU",
        categories: '3',
        description: "Often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second largest city. New York City is located at the southern tip of New York State.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://mindfultravelbysara.com/wp-content/uploads/2015/05/nueva-york-imprescindibl.jpg"
    },
    {
        id: "14",
        city: 'London',
        country: "England",
        categories: '3',
        description: "Is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.",
        hotels: 'http://bit.ly/3JxsezC',
        img: "https://uceap.universityofcalifornia.edu/sites/default/files/2019-04/english-universities-m2.jpg"
    },

]
export default places;