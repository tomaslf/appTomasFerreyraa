const places = [
    {
        id: "1",
        city: 'A Coruña',
        country: "Spain",
        categories: '2',
        description: 'Coruña is the most populated city in Galicia, Spain and the second most populated municipality in the autonomous community and seventeenth overall in the country',
        hotels: 'https://bit.ly/3jrDbrS',
        maps: 'https://www.google.com/maps?q=La+Coruña',
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
        maps: 'https://www.google.com/maps?q=Madrid',
        img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg",
        img2: "https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/madrid/vistas-madrid-gran-via-c-alev-takil-u-x2Or94kjaqo.jpg",
        img3: 'https://aldianews.com/sites/default/files/2022-08/Puerta%20de%20Alcala%CC%81_Madrid.jpg'
    },
    {
        id: "3",
        city: 'Paris',
        country: "France",
        categories: '3',
        description: 'Is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi), making it the 30th most densely populated city in the world in 2020.',
        hotels: 'https://bit.ly/3wOmiKT',
        maps: 'https://www.google.com/maps?q=Paris',
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
        maps: 'https://www.google.com/maps?q=Berlin',
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
        maps: 'https://www.google.com/maps?q=El+Calafate',
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
        maps: 'https://www.google.com/maps?q=Buenos+Aires',
        img: "https://estaticos-cdn.elperiodico.com/clip/80ccbd4a-9d52-4b2a-b2b3-e9c254b3447c_alta-libre-aspect-ratio_default_0.jpg",
        img2: 'https://destinationlesstravel.com/wp-content/uploads/2022/08/Beautiful-View-of-the-city-of-Buenos-Aires-Argentina.jpg.webp',
        img3: 'https://www.costacruceros.es/content/dam/costa/inventory-assets/ports/BUE/buenos-aires.jpg'
    },
    {
        id: "7",
        city: 'Rome',
        country: "Italy",
        categories: '3',
        description: "Is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. ",
        hotels: 'https://bit.ly/3z0OGuD',
        maps: 'https://www.google.com/maps?q=Rome',
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
        hotels: 'http://bit.ly/40vwuVt',
        maps: 'https://www.google.com/maps?q=Salta',
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
        hotels: 'https://www.booking.com/discover/city/ar/el-chalten.es.html?offset=0',
        maps: 'https://www.google.com/maps?q=El+Chalten',
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
        hotels: 'https://www.booking.com/city/pe/machupicchu.es.html',
        maps: 'https://www.google.com/maps?q=Machu+Picchu',
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg",
        img2: 'https://as01.epimg.net/diarioas/imagenes/2021/08/06/actualidad/1628267854_729207_1628268324_noticia_normal.jpg',
        img3: 'https://www.peru.travel/Contenido/Atractivo/Imagen/pe/145/1.4/Principal/Machu%20Picchu.jpg'
    },
    {
        id: "11",
        city: 'Varadero',
        country: "Cuba",
        categories: '2',
        description: "Also referred to as Playa Azul (Blue Beach), is a resort town in the province of Matanzas, Cuba, and one of the largest resort areas in the Caribbean. Varadero Beach is rated one of the world's best beaches in TripAdvisor's Traveler's Choice Awards since 2019, ranking at number two.[3] Common activities include fishing and excursions to Matanzas, Cárdenas, and the Península de Zapata.",
        hotels: 'https://www.booking.com/city/cu/varadero.es.html',
        maps: 'https://www.google.com/maps?q=Varadero',
        img: 'https://static.euronews.com/articles/stories/03/94/74/16/1440x810_cmsv2_2a4304fe-1c85-5ecb-96be-39c4d6e41c53-3947416.jpg',
        img2: 'https://content.r9cdn.net/rimg/dimg/23/7c/ce64c78b-city-49786-165d3de60d1.jpg?crop=true&width=1366&height=768&xhint=2263&yhint=1514',
        img3: 'https://wcm.transat.com/getmedia/3152b7bc-b01e-4c45-802c-ad8190c6b5c1/VRA-Paradisus-Varadero-Aerial-002.aspx'
    },
    {
        id: "12",
        city: 'HolBox Island',
        country: "Mexico",
        categories: '2',
        description: "Is an island in the Mexican state of Quintana Roo, located on the north coast of the Yucatán Peninsula. It is approximately 41.84 kilometres (26.00 miles) long and 1.5 kilometres (0.9 miles) wide, and it is separated from the mainland by 10 km of shallow lagoon that is home to flamingos, pelicans and other rich birdlife. Holbox Island is part of the Municipality of Lázaro Cárdenas and also part of the Yum Balam Biosphere Reserve.",
        hotels: 'https://www.booking.com/city/mx/isla-holbox-mx.es.html',
        maps: 'https://www.google.com/maps?q=Holbox',
        img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/02/holbox-isla-pasion-888.jpg",
        img2: 'https://www.turismomexico.es/wp-content/uploads/2017/01/holbox.jpg',
        img3: 'https://www.dallasnews.com/resizer/4HgIQU9bFe7HmhPS2j62ys90F7k=/arc-anglerfish-arc2-prod-dmn/public/XXMGNKLDAZEBHCNM6XJYUMTF5M.JPG'
    },
    {
        id: "13",
        city: 'New York',
        country: "EE.UU",
        categories: '3',
        description: "Often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second largest city. New York City is located at the southern tip of New York State.",
        hotels: 'https://www.booking.com/city/us/new-york.es.html',
        maps: 'https://www.google.com/maps?q=New+York',
        img: "https://mevoydeviajea.files.wordpress.com/2013/04/estatua-de-la-libertad-new-york.jpg?w=724",
        img2: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/blog/eeuu_nuevayork_timessquare_gettyrf_483467278_osmany_torres_martin_getty_images_.jpg?itok=H34V5VHX',
        img3: 'https://images.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg'
    },
    {
        id: "14",
        city: 'London',
        country: "England",
        categories: '3',
        description: "Is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.",
        hotels: 'https://www.booking.com/city/gb/london.es.html',
        maps: 'https://www.google.com/maps?q=London',
        img: "https://uceap.universityofcalifornia.edu/sites/default/files/2019-04/english-universities-m2.jpg",
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/1200px-London-Eye-2009.JPG',
        img3: 'https://s27363.pcdn.co/wp-content/uploads/2020/05/Best-Things-to-do-in-London-1200x900.jpg.optimal.jpg'
    },
    {
        id: "15",
        city: 'Jotunheimen National Park',
        country: "Norway",
        categories: '1',
        description: "Jotunheimen is a mountainous area in Norway, known for its stunning peaks, glaciers, and valleys. It is a popular destination for hikers, mountaineers, and skiers, offering breathtaking views and a challenging terrain.",
        maps: 'https://www.google.com/maps?q=Jotunheimen+National+Park',
        hotels: 'https://www.booking.com/region/no/jotunheimen-national-park.es.html',
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5f/60/79/jotunheimen-nasjonal.jpg?w=1200&h=-1&s=1",
        img2: 'https://images.rove.me/w_1920,q_85/y6ekxbialzk1agnmdrxf/norway-hiking-in-jotunheimen-national-park.jpg',
        img3: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Jotunheimen_-_view_from_Galdh%C3%B8piggen1.JPG'
    },
    {
        id: "16",
        city: 'German Alps',
        country: "Germany",
        categories: '1',
        description: "The Bavarian Alps are a mountain range in southern Germany, offering a variety of outdoor activities such as skiing, hiking, and mountain biking. The area is also known for its rich cultural heritage, with picturesque towns and historic castles dotting the landscape.",
        hotels: 'https://www.booking.com/region/de/german-alps.es.html',
        maps: 'https://www.google.com/maps?q=Alpes+Bavaros',
        img: "https://www.muntania.com/wp-content/uploads/2021/04/af476fd196e94bb1837758aef1ab76ea.jpg",
        img2: 'https://assets.epuzzle.info/puzzle/068/818/original.webp',
        img3: 'https://live.staticflickr.com/670/32638901813_0b5d3db173_b.jpg'
    },
    {
        id: "17",
        city: 'Jujuy',
        country: "Argentina",
        categories: '1',
        description: "Jujuy is a province in northern Argentina, known for its stunning natural beauty, colorful landscapes, and rich cultural heritage. Visitors can explore its unique rock formations, vibrant markets, and ancient ruins, or embark on adventurous activities such as trekking, rafting, and paragliding.",
        hotels: 'https://www.booking.com/region/ar/jujuy.es-ar.html',
        maps: 'https://www.google.com/maps?q=Jujuy',
        img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/86000/86475-Jujuy-Province.jpg",
        img2: 'https://media.urgente24.com/p/682970e78f4702d899d2b6be40ef85dd/adjuntos/319/imagenes/002/660/0002660605/turismo-argentinajpg.jpg',
        img3: 'https://excursionesargentina.com.ar/wp-content/uploads/2021/06/purmamarca-870x555.jpg'
    },
    {
        id: "18",
        city: 'Punta Cana',
        country: "Dominican Republic",
        categories: '2',
        description: "Punta Cana is a popular beach resort destination in the Dominican Republic, known for its crystal-clear waters, white-sand beaches, and luxurious resorts. Visitors can enjoy a range of water sports and outdoor activities, or simply relax and soak up the sun.",
        hotels: 'https://www.booking.com/city/do/punta-cana.es.html',
        maps: 'https://www.google.com/maps?q=Punta+Cana',
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f4/14/08/beach-overview.jpg?w=600&h=400&s=1",
        img2: 'https://static.barcelo.com/content/dam/bpt/posts/2020/10/vacaciones-en-punta-cana.jpg.bhgimg.jpg/1656412696248.jpg',
        img3: 'https://fotografias.larazon.es/clipping/cmsimages01/2022/09/09/9AF1E8EC-1CAC-4F19-A00C-4D2E5A28EA27/98.jpg?crop=2732,1537,x0,y141&width=1900&height=1069&optimize=low&format=webply'
    },
    {
        id: "19",
        city: 'Jericoacoara',
        country: "Brazil",
        categories: '2',
        description: "Jericoacoara is a small beach town in northeastern Brazil, known for its pristine beaches, sand dunes, and crystal-clear lagoons. Visitors can enjoy a range of outdoor activities such as surfing, kiteboarding, and hiking, or simply relax and take in the natural beauty of the area.",
        hotels: 'https://www.booking.com/city/br/jericoacoara.es.html',
        maps: 'https://www.google.com/maps?q=Jericoacoara',
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8a/61/9e/redinhas.jpg?w=1200&h=-1&s=1",
        img2: 'https://www.brasilplanet.com.br/img_home_brasil/DJI_0067_BrasilPlanet2.jpg',
        img3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pedra_furada.jpg/1200px-Pedra_furada.jpg'
    },
    {
        id: "20",
        city: 'Papeete',
        country: "French Polynesia",
        categories: '2',
        description: "The French Polynesia is an archipelago in the South Pacific, known for its breathtaking natural beauty, crystal-clear lagoons, and rich cultural heritage. Visitors can explore its unique marine life, lush rainforests, and traditional villages, or simply relax on its pristine beaches.",
        hotels: 'https://www.booking.com/city/pf/papeete.es.html',
        maps: 'https://www.google.com/maps?q=Papeete',
        img: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Papeete.jpg",
        img2: 'https://static1.mclcm.net/iod/images/v2/132/citytheque/localite_101_3608/1200x630_100_300_000000x30x0.jpg',
        img3: 'https://dynl.mktgcdn.com/p/NYPda9VENAglmMOyBxyR0x23lA-T31Br6ceVEaFCxYc/1024x768.jpg'
    },
    {
        id: "21",
        city: 'Naples',
        country: "Italy",
        categories: '3',
        description: "Naples is a historic city in southern Italy, known for its rich cultural heritage, stunning architecture, and delicious cuisine. Visitors can explore its ancient ruins, beautiful churches, and colorful markets, or sample its famous pizza and other traditional dishes.",
        hotels: 'https://www.booking.com/city/it/naples.es.html',
        maps: 'https://www.google.com/maps?q=Naples',
        img: "https://lagavetavoladora.com/wp-content/uploads/2018/04/Viaje-a-Napoles-1280x720.jpg",
        img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f9/3a/6b/caption.jpg?w=1200&h=-1&s=1',
        img3: 'https://i0.wp.com/nosvolveremosaver.com/wp-content/uploads/2018/07/Sorbillo-1.jpg?resize=827%2C959&ssl=1'
    },
    {
        id: "22",
        city: 'Mar del Plata',
        country: "Argentina",
        categories: '2',
        description: "Mar del Plata is a beach resort town in eastern Argentina, known for its long sandy beaches, lively nightlife, and rich cultural heritage. Visitors can enjoy a range of outdoor activities such as swimming, surfing, and fishing, or explore its many museums, theaters, and art galleries.",
        hotels: 'https://www.booking.com/city/ar/mar-del-plata.es-ar.html',
        maps: 'https://www.google.com/maps?q=Mar+del+Plata',
        img: "https://elviajerofeliz.com/wp-content/uploads/2020/03/mar-del-plata.jpg",
        img2: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Stensj%C3%B6lejon_i_Mar_del_Plata.jpg',
        img3: 'https://images.mnstatic.com/b5/8a/b58a47aa20f66d3a80b98a2edc74637a.jpg'
    },
    {
        id: "23",
        city: 'Amalfi Coast',
        country: "Italy",
        categories: '2',
        description: "The Amalfi Coast is a stretch of coastline in southern Italy, renowned for its rugged terrain, picturesque towns, and stunning beaches. Visitors can explore charming villages perched on steep cliffs, take scenic hikes through the surrounding hills, or simply relax on the sandy beaches and enjoy the beautiful Mediterranean Sea.",
        maps: 'https://www.google.com/maps?q=Costa+Amalfitana',
        hotels: 'https://www.booking.com/region/it/amalficoast.es.html',
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/costa-amalfitana-viaje-mapa-fotos-que-ver-pueblos-hoteles-ruta-esquire-1568883867.jpg",
        img2: 'https://cdn0.bodas.net/article/3813/3_2/1280/jpg/63183-1.webp',
        img3: 'https://millugaresdondeviajar.files.wordpress.com/2022/05/img_3857.jpg'
    },
    {
        id: "24",
        city: 'Grand Canyon',
        country: "United States",
        categories: '1',
        description: "The Grand Canyon is a massive geological wonder located in the state of Arizona, USA. The canyon is over 277 miles (446 km) long, up to 18 miles (29 km) wide, and reaches a depth of over a mile (6,093 feet or 1,857 meters). The canyon was carved over millions of years by the Colorado River, and the colorful rock layers visible in the canyon walls provide a unique record of the Earth's geological history. The Grand Canyon is a popular tourist destination, attracting millions of visitors each year to hike, camp, and take in the breathtaking views. It is also an important site for scientific research and preservation, with many rare and endangered plant and animal species living in the canyon's ecosystem.",
        maps: 'https://www.google.com/maps?q=Grand+Canyon+National+Park',
        hotels: 'https://www.booking.com/region/us/grand-canyon.es.html',
        img: "https://www.lavanguardia.com/files/article_main_microformat/uploads/2019/09/26/5fa5338881ffa.jpeg",
        img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/2c/0d/53/those-looking-for-a-comprehens.jpg?w=1200&h=-1&s=1',
        img3: 'https://www.viajarlasvegas.com/img/visitar-gran-canon.jpg'
    },


]
export default places;