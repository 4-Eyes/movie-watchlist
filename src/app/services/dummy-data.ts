import { Movie } from "../models/movie";
import { Cinema } from "../models/cinema";

export const MOVIES: Movie[] = [
    {
        _id: 157336,
        imdbId: "tt0816692",
        posterUrl: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        title: "Interstellar",
        releaseDate: new Date("2014-11-05"),
        overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        viewings: [
            {
                _date: new Date("2014-11-21"),
                cinema: {
                    _id: 0,
                    name: "Reading Cinemas, The Palms",
                    location: {
                        latitude: -43.5073936,
                        longitude: 172.6618957
                    }
                },
                id: 0,
                rewatch: false,
                date: "2014-11-21"
            }
        ]
    },
    {
        _id: 274870,
        imdbId: "0",
        overview: "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
        releaseDate: new Date("2016-12-21"),
        posterUrl: "/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg",
        title: "Passengers",
        viewings: []
    },
    {
        _id: 62,
        imdbId: "0",
        overview: "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
        releaseDate: new Date("1968-04-05"),
        posterUrl: "/90T7b2LIrL07ndYQBmSm09yqVEH.jpg",
        title: "2001: A Space Odyssey",
        viewings: []
    },
    {
        _id: 40430,
        imdbId: "0",
        overview: "A planet is discovered in the same orbit as Earth's but is located on the exact opposite side of the sun, making it not visible from Earth. The European Space Exploration Council decide to send American astronaut Glenn Ross and British scientist John Kane via spaceship to explore the other planet. After a disastrous crash-landing Ross awakes to learn that Kane lies near death and that they apparently have returned to Earth, as evidenced by the presence of the Council director and his staff. Released to the custody of his wife, he soon learns things are not as they seem.",
        releaseDate: new Date("1969-09-08"),
        posterUrl: "/o0LM7Mleo9Fwl9kUl6GVqd4IGQ9.jpg",
        title: "Doppelgänger",
        viewings: []
    },
    {
        _id: 286217,
        imdbId: "0",
        overview: "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
        releaseDate: new Date("2015-09-30"),
        posterUrl: "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
        title: "The Martian",
        viewings: []
    },
    {
        _id: 95,
        imdbId: "0",
        overview: "An asteroid the size of Texas is heading directly toward Earth at 22,000 mph. NASA's executive director, Dan Truman, has only one option - to send up a crew to destroy the asteroid. He enlists the help of Harry S. Stamper - the world's foremost deep core oil driller - and Stamper's roughneck team of drillers to land on the asteroid, drill into its surface, and drop a nuclear device.",
        releaseDate: new Date("1998-07-01"),
        posterUrl: "/coINnuCzcw5FMHBty8hcudMOBnO.jpg",
        title: "Armageddon",
        viewings: []
    },
    {
        _id: 118340,
        imdbId: "0",
        overview: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        releaseDate: new Date("2014-07-30"),
        posterUrl: "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
        title: "Guardians of the Galaxy",
        viewings: []
    },
    {
        _id: 348,
        imdbId: "0",
        overview: "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
        releaseDate: new Date("1979-05-25"),
        posterUrl: "/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
        title: "Alien",
        viewings: []
    },
    {
        _id: 8077,
        imdbId: "0",
        overview: "After escaping with Newt and Hicks from the alien planet, Ripley crash lands on Fiorina 161, a prison planet and host to a correctional facility. Unfortunately, although Newt and Hicks do not survive the crash, a more unwelcome visitor does. The prison does not allow weapons of any kind, and with aid being a long time away, the prisoners must simply survive in any way they can.",
        releaseDate: new Date("1992-05-22"),
        posterUrl: "/vz1vBw17F0x42bhziHdYRJC9uCv.jpg",
        title: "Alien³",
        viewings: []
    },
    {
        _id: 19995,
        imdbId: "0",
        overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        releaseDate: new Date("2009-12-10"),
        posterUrl: "/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
        title: "Avatar",
        viewings: []
    },
    {
        _id: 2067,
        imdbId: "0",
        overview: "When contact is lost with the crew of the first Mars expedition, a rescue mission is launched to discover their fate.",
        releaseDate: new Date("2000-03-10"),
        posterUrl: "/eco5chujn3Mt7HnuMTUIuobPMoX.jpg",
        title: "Mission to Mars",
        viewings: []
    },
    {
        _id: 2103,
        imdbId: "0",
        overview: "Upon arrival at the space station orbiting an ocean world called Solaris a psychologist discovers that the commander of an expedition to the planet has died mysteriously. Other strange events soon start happening as well, such as the appearance of old acquaintances of the crew, including some who are dead.",
        releaseDate: new Date("2002-11-27"),
        posterUrl: "/8TTniVKEjUWs3DnAMEWMXP6V1ct.jpg",
        title: "Solaris",
        viewings: []
    },
    {
        _id: 13475,
        imdbId: "0",
        overview: "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
        releaseDate: new Date("2009-05-06"),
        posterUrl: "/xPihqTMhCh6b8DHYzE61jrIiNMS.jpg",
        title: "Star Trek",
        viewings: []
    },
    {
        _id: 329865,
        imdbId: "0",
        overview: "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
        releaseDate: new Date("2016-11-10"),
        posterUrl: "/hLudzvGfpi6JlwUnsNhXwKKg4j.jpg",
        title: "Arrival",
        viewings: []
    },
    {
        _id: 381284,
        imdbId: "0",
        overview: "The incredible untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson - brilliant African-American women working at NASA, who served as the brains behind one of the greatest operations in history: the launch of astronaut John Glenn into orbit, a stunning achievement that restored the nation's confidence, turned around the Space Race, and galvanized the world. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
        releaseDate: new Date("2016-12-10"),
        posterUrl: "/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg",
        title: "Hidden Figures",
        viewings: []
    },
    {
        _id: 76757,
        imdbId: "0",
        overview: "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
        releaseDate: new Date("2015-02-04"),
        posterUrl: "/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg",
        title: "Jupiter Ascending",
        viewings: []
    },
    {
        _id: 607,
        imdbId: "0",
        overview: "Men in Black follows the exploits of agents Kay and Jay, members of a top-secret organization established to monitor and police alien activity on Earth. The two Men in Black find themselves in the middle of the deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies. In order to prevent worlds from colliding, the MiB must track down the terrorist and prevent the destruction of Earth. It's just another typical day for the Men in Black.",
        releaseDate: new Date("1997-07-01"),
        posterUrl: "/f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg",
        title: "Men in Black",
        viewings: []
    },
    {
        _id: 679,
        imdbId: "0",
        overview: "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story, all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
        releaseDate: new Date("1986-07-18"),
        posterUrl: "/nORMXEkYEbzkU5WkMWMgRDJwjSZ.jpg",
        title: "Aliens",
        viewings: []
    },
    {
        _id: 54138,
        imdbId: "0",
        overview: "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
        releaseDate: new Date("2013-05-05"),
        posterUrl: "/41mhrXASAW3sdn7LBWF49uCX0xi.jpg",
        title: "Star Trek Into Darkness",
        viewings: []
    },
    {
        _id: 75612,
        imdbId: "0",
        overview: "Jack Harper (Tom Cruise) is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
        releaseDate: new Date("2013-04-10"),
        posterUrl: "/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg",
        title: "Oblivion",
        viewings: []
    },
    {
        _id: 568,
        imdbId: "0",
        overview: "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
        releaseDate: new Date("1995-06-30"),
        posterUrl: "/6JQ9z3V9x4vlU2GSZx2yNO0PvuX.jpg",
        title: "Apollo 13",
        viewings: []
    },
    {
        _id: 601,
        imdbId: "0",
        overview: "A science fiction fairytale about an extra-terrestrial who is left behind on Earth and is found by a young boy who befriends him. This heart-warming fantasy from Director Steven Spielberg became one of the most commercially successful films of all time.",
        releaseDate: new Date("1982-04-03"),
        posterUrl: "/vEaHlJljhYqYjMc7HmNEOoq3UlU.jpg",
        title: "E.T. the Extra-Terrestrial",
        viewings: []
    },
    {
        _id: 395992,
        imdbId: "0",
        overview: "The six-member crew of the International Space Station is tasked with studying a sample from Mars that may be the first proof of extra-terrestrial life, which proves more intelligent than ever expected.",
        releaseDate: new Date("2017-03-23"),
        posterUrl: "/xFaJzrTExr99cBbrJp90dHhW1Aj.jpg",
        title: "Life",
        viewings: []
    },
    {
        _id: 602,
        imdbId: "0",
        overview: "On July 2, a giant alien mothership enters orbit around Earth and deploys several dozen saucer-shaped 'destroyer' spacecraft that quickly lay waste to major cities around the planet. On July 3, the United States conducts a coordinated counterattack that fails. On July 4 the a plan is devised to gain access to the interior of the alien mothership in space in order to plant a nuclear missile.",
        releaseDate: new Date("1996-06-25"),
        posterUrl: "/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg",
        title: "Independence Day",
        viewings: []
    },
    {
        _id: 608,
        imdbId: "0",
        overview: "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
        releaseDate: new Date("2002-07-03"),
        posterUrl: "/qWjRfBwr4VculczswwojXgoU0mq.jpg",
        title: "Men in Black II",
        viewings: []
    },
    {
        _id: 4437,
        imdbId: "0",
        overview: "This is a sequel to 2001 A Space Odyssey. It is now 2010 and both the Americans and the Russians are racing to get to Jupiter to investigate the black monolith (similar to the one found in Lunar Crater Clavius) which was found by the U.S.S. Discovery in orbit around Jupiter's moons. The U.S.S. Discovery's orbit is rapidly decaying and it will crash into IO but the Americans cannot get there in time to save U.S.S. Discovery. The Russians can get to Jupiter in time but only the Americans have the knowledge to access and awaken the U.S.S. Discovery's H.A.L.9000 sentient computer. This forces a joint American-Soviet space expedition against a backdrop of growing global tensions. The combined expedition is seeking answers to several mysteries. What is the significance of the black monolith? Why did H.A.L.9000 act so bizarrely and terminate 4 of 5 of the U.S.S. Discovery's crew? What happened to David Bowman? Along the way, curious data is detected  ...",
        releaseDate: new Date("1984-12-06"),
        posterUrl: "/9Rcz2n16HEYRi2EKGliByP6ESYR.jpg",
        title: "2010",
        viewings: []
    },
    {
        _id: 126889,
        imdbId: "0",
        overview: "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship Covenant discovers what they think is an uncharted paradise, but is actually a dark, dangerous world — whose sole inhabitant is the “synthetic” David, survivor of the doomed Prometheus expedition.",
        releaseDate: new Date("2017-05-10"),
        posterUrl: "/kwYzMCNUWUADZo9ox2jbUbcNT7O.jpg",
        title: "Alien: Covenant",
        viewings: []
    },
    {
        _id: 871,
        imdbId: "0",
        overview: "An  U.S. Spaceship lands on a desolate planet, stranding astronaut Taylor in a world dominated by apes, 2000 years into the future, who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.",
        releaseDate: new Date("1968-02-07"),
        posterUrl: "/lj3k2LU4LYpQA3gfJM3uqo7HCf7.jpg",
        title: "Planet of the Apes",
        viewings: []
    },
    {
        _id: 9738,
        imdbId: "0",
        overview: "During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these \"Fantastic Four\" must now thwart the evil plans of Dr. Doom and save the world from certain destruction.",
        releaseDate: new Date("2005-07-07"),
        posterUrl: "/aJwUBmUA11lkNVSJ3if3h3xHSFd.jpg",
        title: "Fantastic Four",
        viewings: []
    },
    {
        _id: 8413,
        imdbId: "0",
        overview: "In the year 2047 a group of astronauts are sent to investigate and salvage the long lost starship \"Event Horizon\". The ship disappeared mysteriously 7 years before on its maiden voyage and with its return comes even more mystery as the crew of the \"Lewis and Clark\" discover the real truth behind its disappearance and something even more terrifying.",
        releaseDate: new Date("1997-08-15"),
        posterUrl: "/vo02iJLsem3VCJ2TNvSzRiJMpAE.jpg",
        title: "Event Horizon",
        viewings: []
    },
    {
        _id: 8656,
        imdbId: "0",
        overview: "A seven-mile-wide space rock is hurtling toward Earth, threatening to obliterate the planet. Now, it's up to the president of the United States to save the world. He appoints a tough-as-nails veteran astronaut to lead a joint American-Russian crew into space to destroy the comet before impact. Meanwhile, an enterprising reporter uses her smarts to uncover the scoop of the century.",
        releaseDate: new Date("1998-05-07"),
        posterUrl: "/nbF4Tuj4OY8btrjoOHtk64hkKbJ.jpg",
        title: "Deep Impact",
        viewings: []
    },
    {
        _id: 18,
        imdbId: "0",
        overview: "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
        releaseDate: new Date("1997-05-07"),
        posterUrl: "/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
        title: "The Fifth Element",
        viewings: []
    },
    {
        _id: 299536,
        imdbId: "0",
        overview: "The Avengers, torn apart after the events of Captain America: Civil War, join forces with the Guardians of the Galaxy to battle Thanos, who is trying to amass the Infinity Stones for a gauntlet that will give him dominion over space, time, and all reality.",
        releaseDate: new Date("2018-04-25"),
        posterUrl: "/ah9VcsW04n2dvuAv257RZFJD7ta.jpg",
        title: "Avengers: Infinity War",
        viewings: []
    },
    {
        _id: 957,
        imdbId: "0",
        overview: "When the nefarious Dark Helmet hatches a plan to snatch Princess Vespa and steal her planet's air, space-bum-for-hire Lone Starr and his clueless sidekick fly to the rescue. Along the way, they meet Yogurt, who puts Lone Starr wise to the power of \"The Schwartz.\" Can he master it in time to save the day?",
        releaseDate: new Date("1987-06-24"),
        posterUrl: "/xWt9KAcToCRdJ6JH8JyZZlhkVgG.jpg",
        title: "Spaceballs",
        viewings: []
    },
    {
        _id: 811,
        imdbId: "0",
        overview: "In a future Earth barren of all flora and fauna, the planet's ecosystems exist only in large pods attached to spacecraft. When word comes in that the pods are to be jettisoned into space and destroyed so that the spacecraft can be reused for commercial purposes, most of the crew of the Valley Forge rejoice at the prospect of going home. Not so for botanist Freeman Lowell who loves the forest and its creatures, so decides to take matters into his own hands to protect what he loves.",
        releaseDate: new Date("1972-03-09"),
        posterUrl: "/kyEljmcf7YYmp85BdZffqiuRLfV.jpg",
        title: "Silent Running",
        viewings: []
    },
    {
        _id: 1091,
        imdbId: "0",
        overview: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people that it kills.",
        releaseDate: new Date("1982-06-25"),
        posterUrl: "/s5fH3GqFcHbi2F0NSBSh4KRNTc0.jpg",
        title: "The Thing",
        viewings: []
    },
    {
        _id: 698,
        imdbId: "0",
        overview: "During the transportation of a Space Shuttle a Boeing 747 crashes in the Atlantic Ocean yet when they go to look for the destroyed shuttle it is not there. James Bond investigates the missing mission space shuttle and soon learns that the shuttles owner Hugo Drax wants to kill all of mankind.",
        releaseDate: new Date("1979-06-26"),
        posterUrl: "/bIiTYuG1NRtLZAY7lxOwNafn2BV.jpg",
        title: "Moonraker",
        viewings: []
    },
    {
        _id: 283995,
        imdbId: "0",
        overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        releaseDate: new Date("2017-04-20"),
        posterUrl: "/gaHepzSTMkGwsSKAqiBgroSCf07.jpg",
        title: "Guardians of the Galaxy Vol. 2",
        viewings: []
    },
    {
        _id: 68724,
        imdbId: "0",
        overview: "In the year 2159, two classes of people exist: the very wealthy who live on a pristine man-made space station called Elysium, and the rest, who live on an overpopulated, ruined Earth. Secretary Rhodes (Jodie Foster), a hard line government ofﬁcial, will stop at nothing to enforce anti-immigration laws and preserve the luxurious lifestyle of the citizens of Elysium. That doesn’t stop the people of Earth from trying to get in, by any means they can. When unlucky Max (Matt Damon) is backed into a corner, he agrees to take on a daunting mission that, if successful, will not only save his life, but could bring equality to these polarized worlds.",
        releaseDate: new Date("2013-08-07"),
        posterUrl: "/tHkjoAxmhp3Eau1h0Ir7maKMwUz.jpg",
        title: "Elysium",
        viewings: []
    },
    {
        _id: 1979,
        imdbId: "0",
        overview: "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
        releaseDate: new Date("2007-06-13"),
        posterUrl: "/fXpziQgnBnB4bLgjKhjTbLQumE5.jpg",
        title: "Fantastic 4: Rise of the Silver Surfer",
        viewings: [

        ]
    }
];
export const CINEMAS: Cinema[] = [
    {
        _id: 0,
        name: "Reading Cinemas, The Palms",
        location: {
            latitude: -43.5073936,
            longitude: 172.6618957
        }
    },
    {
        _id: 1,
        name: "Hoyts Riccarton",
        location: {
            latitude: -43.5316394,
            longitude: 172.5979278
        }
    },
    {
        _id: 2,
        name: "Academy Gold",
        location: {
            latitude: -43.5463849,
            longitude: 172.6338126
        }
    },
];
