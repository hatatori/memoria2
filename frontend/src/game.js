const fullList = [
    'aatrox-primordian',
    'aatrox-blood-moon-prestige-edition',
    'aatrox-odyssey',
    'aatrox-lunar-eclipse',
    'aatrox-mecha',
    'aatrox-classic',
    'aatrox-drx-prestige',
    'aatrox-blood-moon',
    'aatrox-drx',
    'aatrox-victorious',
    'aatrox-sea-hunter',
    'aatrox-justicar',
    'ahri-spirit-blossom',
    'ahri-midnight',
    'ahri-immortalized-legend',
    'ahri-popstar',
    'ahri-snow-moon',
    'ahri-coven',
    'ahri-arcade',
    'ahri-kda',
    'ahri-star-guardian',
    'ahri-classic',
    'ahri-risen-legend',
    'ahri-arcana',
    'ahri-kda-all-out',
    'ahri-elderwood',
    'ahri-kda-prestige',
    'ahri-academy',
    'ahri-challenger',
    'ahri-foxfire',
    'ahri-dynasty',
    'akali-infernal',
    'akali-headhunter',
    'akali-coven-prestige',
    'akali-stinger',
    'akali-kda-prestige-edition',
    'akali-drx',
    'akali-project',
    'akali-kda-all-out',
    'akali-blood-moon',
    'akali-coven',
    'akali-empyrean',
    'akali-star-guardian',
    'akali-crime-city-nightmare',
    'akali-true-damage',
    'akali-kda',
    'akali-sashimi',
    'akali-silverfang',
    'akali-nurse',
    'akali-all-star',
    'akali-classic',
    'akshan-crystal-rose',
    'akshan-classic',
    'akshan-three-honors',
    'akshan-cyber-pop',
    'alistar-hextech',
    'alistar-blackfrost',
    'alistar-moo-cow',
    'alistar-longhorn',
    'alistar-classic',
    'alistar-black',
    'alistar-skt',
    'alistar-infernal',
    'alistar-conqueror',
    'alistar-unchained',
    'alistar-lunar-beast',
    'alistar-marauder',
    'alistar-sweeper',
    'alistar-matador',
    'alistar-golden',
    'ambessa-chosen-of-the-wolf',
    'ambessa-classic',
    'amumu-heartache',
    'amumu-infernal',
    'amumu-pharaoh',
    'amumu-classic',
    'amumu-re-gifted',
    'amumu-vancouver',
    'amumu-porcelain',
    'amumu-sad-robot',
    'amumu-pumpkin-prince',
    'amumu-hextech',
    'amumu-surprise-party',
    'amumu-little-knight',
    'amumu-almost-prom-king',
    'amumu-emumu',
    'anivia-victorious',
    'anivia-betwitching-batnivia',
    'anivia-team-spirit',
    'anivia-papercraft',
    'anivia-blackfrost',
    'anivia-classic',
    'anivia-noxus-hunter',
    'anivia-cosmic-flight',
    'anivia-divine-phoenix',
    'anivia-festival-queen',
    'anivia-prehistoric',
    'anivia-hextech',
    'anivia-bird-of-prey',
    'annie-frostfire',
    'annie-red-riding',
    'annie-cafe-cuties',
    'annie-panda',
    'annie-classic',
    'annie-fright-night',
    'annie-versary',
    'annie-super-galaxy',
    'annie-battle-princess',
    'annie-winterblessed',
    'annie-lunar-beast',
    'annie-hextech',
    'annie-sweetheart',
    'annie-franken-tibbers',
    'annie-reverse',
    'annie-prom-queen',
    'annie-annie-in-wonderland',
    'annie-goth',
    'aphelios-classic',
    'aphelios-edg',
    'aphelios-lunar-beast',
    'aphelios-spirit-blossom',
    'aphelios-nightbringer',
    'aphelios-heartsteel',
    'ashe-classic',
    'ashe-cosmic-queen',
    'ashe-crystalis-motus',
    'ashe-fae-dragon',
    'ashe-project',
    'ashe-high-noon',
    'ashe-heartseeker',
    'ashe-freljord',
    'ashe-drx',
    'ashe-woad',
    'ashe-infernal',
    'ashe-lunar-empress',
    'ashe-ocean-song',
    'ashe-coven',
    'ashe-championship',
    'ashe-marauder',
    'ashe-amethyst',
    'ashe-queen',
    'ashe-sherwood-forest',
    'aurelion-sol-inkshadow',
    'aurelion-sol-porcelain-protector',
    'aurelion-sol-storm-dragon',
    'aurelion-sol-ashen-lord',
    'aurelion-sol-classic',
    'aurelion-sol-mecha',
    'aurora-battle-bunny',
    'aurora-classic',
    'azir-worlds-2022',
    'azir-gravelord',
    'azir-classic',
    'azir-warring-kingdoms',
    'azir-attorney',
    'azir-elderwood',
    'azir-skt',
    'azir-galactic',
    'bard-classic',
    'bard-elderwood',
    'bard-snow-day',
    'bard-shan-hai-scrolls',
    'bard-astronaut',
    'bard-cafe-cuties',
    'bard-bard',
    'bard-t1',
    'belveth-cosmic-matriarch',
    'belveth-classic',
    'belveth-battle-boss',
    'belveth-primordian',
    'blitzcrank-boom-boom',
    'blitzcrank-battle-boss',
    'blitzcrank-classic',
    'blitzcrank-space-groove',
    'blitzcrank-witchs-brew',
    'blitzcrank-lancer-paragon',
    'blitzcrank-goalkeeper',
    'blitzcrank-definitely-not',
    'blitzcrank-rusty',
    'blitzcrank-victorious',
    'blitzcrank-iblitzcrank',
    'blitzcrank-beezcrank',
    'blitzcrank-zenith-games',
    'blitzcrank-lancer-rogue',
    'blitzcrank-riot',
    'blitzcrank-piltover',
    'brand-eternal-dragon',
    'brand-battle-boss',
    'brand-zombie',
    'brand-apocalyptic',
    'brand-vandal',
    'brand-empyrean',
    'brand-classic',
    'brand-arclight',
    'brand-spirit-fire',
    'brand-debonair-prestige-edition',
    'brand-street-demons',
    'brand-debonair',
    'brand-cryocore',
    'braum-classic',
    'braum-santa',
    'braum-sugar-rush',
    'braum-crime-city',
    'braum-pool-party',
    'braum-dragonslayer',
    'braum-el-tigre',
    'braum-lionheart',
    'briar-primordian',
    'briar-classic',
    'briar-street-demons',
    'caitlyn-snow-moon',
    'caitlyn-headhunter',
    'caitlyn-drx',
    'caitlyn-pulsefire',
    'caitlyn-pool-party',
    'caitlyn-heartthrob',
    'caitlyn-battle-academia',
    'caitlyn-officer',
    'caitlyn-classic',
    'caitlyn-arcane-commander-prestige',
    'caitlyn-arcane-commander',
    'caitlyn-sheriff',
    'caitlyn-arcane',
    'caitlyn-arcade-prestige-edition',
    'caitlyn-arcade',
    'caitlyn-lunar-wraith',
    'caitlyn-arctic-warfare',
    'caitlyn-safari',
    'caitlyn-resistance',
    'camille-program',
    'camille-strike-commander',
    'camille-coven',
    'camille-invictus-gaming',
    'camille-classic',
    'camille-arcana',
    'camille-winterblessed-prestige',
    'camille-winterblessed',
    'cassiopeia-coven',
    'cassiopeia-eternum',
    'cassiopeia-spirit-blossom',
    'cassiopeia-classic',
    'cassiopeia-mythic',
    'cassiopeia-bewitching',
    'cassiopeia-jade-fang',
    'cassiopeia-siren',
    'cassiopeia-desperada',
    'chogath-shan-hai-scrolls',
    'chogath-toy-terror',
    'chogath-gentleman',
    'chogath-dark-star',
    'chogath-broken-covenant',
    'chogath-battlecast-prime',
    'chogath-loch-ness',
    'chogath-classic',
    'chogath-jurassic',
    'chogath-prehistoric',
    'chogath-nightmare',
    'corki-fnatic',
    'corki-red-baron',
    'corki-urfrider',
    'corki-corgi',
    'corki-classic',
    'corki-hot-rod',
    'corki-ice-toboggan',
    'corki-arcade',
    'corki-astronaut',
    'corki-dragonwing',
    'corki-ufo',
    'darius-woad-king',
    'darius-god-king-divine',
    'darius-god-king',
    'darius-high-noon',
    'darius-dunkmaster',
    'darius-classic',
    'darius-porcelain',
    'darius-spirit-blossom',
    'darius-crime-city-nightmare',
    'darius-lunar-beast',
    'darius-dreadnova',
    'darius-academy',
    'darius-bioforge',
    'darius-lord',
    'diana-battle-queen-prestige-edition',
    'diana-winterblessed',
    'diana-classic',
    'diana-heavenscale',
    'diana-sentinel',
    'diana-lunar-goddess',
    'diana-blood-moon',
    'diana-dragonslayer',
    'diana-battle-queen',
    'diana-dark-cosmic-prestige',
    'diana-dark-cosmic',
    'diana-firecracker',
    'diana-dark-waters',
    'diana-infernal',
    'diana-dark-valkyrie',
    'dr-mundo-corporate',
    'dr-mundo-toxic-dr',
    'dr-mundo-frozen-prince',
    'dr-mundo-el-macho',
    'dr-mundo-rageborn',
    'dr-mundo-executioner',
    'dr-mundo-street-demons',
    'dr-mundo-pool-party',
    'dr-mundo-mundo-mundo',
    'dr-mundo-classic',
    'dr-mundo-tpa',
    'dr-mundo-mr',
    'draven-classic',
    'draven-santa',
    'draven-la-ilusion',
    'draven-gladiator',
    'draven-primetime',
    'draven-draven',
    'draven-fright-night',
    'draven-debonair',
    'draven-ruined',
    'draven-mecha-kingdoms',
    'draven-beast-hunter',
    'draven-pool-party',
    'draven-soul-reaver',
    'ekko-true-damage',
    'ekko-star-guardian',
    'ekko-classic',
    'ekko-breakout-true-damage',
    'ekko-pulsefire',
    'ekko-star-guardian-prestige',
    'ekko-sandstorm',
    'ekko-trick-or-treat',
    'ekko-firelight',
    'ekko-arcane-last-stand',
    'ekko-academy',
    'ekko-project',
    'ekko-skt-t1',
    'elise-coven',
    'elise-skt',
    'elise-super-galaxy',
    'elise-classic',
    'elise-death-blossom',
    'elise-victorious',
    'elise-withered-rose',
    'elise-bewitching',
    'elise-blood-moon',
    'evelynn-shadow',
    'evelynn-spirit-blossom',
    'evelynn-high-noon-prestige',
    'evelynn-coven',
    'evelynn-kda-prestige-edition',
    'evelynn-masquerade',
    'evelynn-high-noon',
    'evelynn-blood-moon',
    'evelynn-classic',
    'evelynn-tango',
    'evelynn-safecracker',
    'evelynn-soul-fighter',
    'evelynn-kda-all-out',
    'evelynn-sugar-rush',
    'evelynn-kda',
    'ezreal-explorer',
    'ezreal-battle-academia',
    'ezreal-psyops-prestige-edition',
    'ezreal-ssg',
    'ezreal-faerie-court',
    'ezreal-pulsefire',
    'ezreal-star-guardian',
    'ezreal-frosted',
    'ezreal-heartsteel',
    'ezreal-ace-of-spades',
    'ezreal-heavenscale-prestige',
    'ezreal-porcelain-protector',
    'ezreal-debonair',
    'ezreal-heavenscale',
    'ezreal-psyops',
    'ezreal-pajama-guardian',
    'ezreal-arcade',
    'ezreal-tpa',
    'ezreal-striker',
    'ezreal-nottingham',
    'ezreal-classic',
    'fiddlesticks-surprise-party',
    'fiddlesticks-risen',
    'fiddlesticks-classic',
    'fiddlesticks-union-jack',
    'fiddlesticks-star-nemesis',
    'fiddlesticks-spectral',
    'fiddlesticks-blood-moon',
    'fiddlesticks-praetorian',
    'fiddlesticks-dark-candy',
    'fiddlesticks-fiddle-me-timbers',
    'fiddlesticks-pumpkinhead',
    'fiddlesticks-bandito',
    'fiora-invictus-gaming',
    'fiora-nightraven',
    'fiora-headmistress',
    'fiora-lunar-beast-prestige-edition',
    'fiora-dragonmancer',
    'fiora-soaring-sword',
    'fiora-project',
    'fiora-pulsefire',
    'fiora-classic',
    'fiora-faerie-court',
    'fiora-battle-queen',
    'fiora-bewitching',
    'fiora-lunar-beast',
    'fiora-heartpiercer',
    'fiora-pool-party',
    'fiora-royal-guard',
    'fizz-fuzz',
    'fizz-omega-squad',
    'fizz-tundra',
    'fizz-void',
    'fizz-little-devil',
    'fizz-atlantean',
    'fizz-fisherman',
    'fizz-classic',
    'fizz-fuzz-prestige-edition',
    'fizz-rain-shepherd',
    'fizz-astronaut',
    'fizz-super-galaxy',
    'fizz-cottontail',
    'galio-infernal',
    'galio-gatekeeper',
    'galio-dragon-guardian',
    'galio-classic',
    'galio-enchanted',
    'galio-birdio',
    'galio-hextech',
    'galio-commando',
    'galio-debonair',
    'galio-mythmaker',
    'gangplank-the-betrayer',
    'gangplank-dreadnova',
    'gangplank-toy-soldier',
    'gangplank-special-forces',
    'gangplank-spooky',
    'gangplank-sailor',
    'gangplank-minuteman',
    'gangplank-classic',
    'gangplank-project',
    'gangplank-captain',
    'gangplank-pool-party',
    'gangplank-fpx',
    'gangplank-sultan',
    'garen-god-king',
    'garen-god-king-fallen',
    'garen-mecha-kingdoms',
    'garen-commando',
    'garen-classic',
    'garen-dreadknight',
    'garen-battle-academia',
    'garen-demacia-vice',
    'garen-sanguine',
    'garen-steel-legion',
    'garen-warring-kingdoms',
    'garen-mythmaker',
    'garen-mecha-kingdoms-prestige-edition',
    'garen-rogue-admiral',
    'garen-rugged',
    'garen-desert-trooper',
    'gnar-snow-day',
    'gnar-ssg',
    'gnar-dino',
    'gnar-super-galaxy',
    'gnar-astronaut',
    'gnar-elderwood',
    'gnar-el-leon',
    'gnar-gentleman',
    'gnar-classic',
    'gnar-la-ilusion',
    'gragas-music-fan',
    'gragas-high-noon',
    'gragas-vandal',
    'gragas-santa',
    'gragas-hillbilly',
    'gragas-gragas-esq',
    'gragas-scuba',
    'gragas-classic',
    'gragas-arctic-ops',
    'gragas-oktoberfest',
    'gragas-space-groove',
    'gragas-warden',
    'gragas-caskbreaker',
    'gragas-fnatic',
    'gragas-superfan',
    'graves-snow-day',
    'graves-edg',
    'graves-pool-party',
    'graves-crime-city',
    'graves-cutthroat',
    'graves-battle-professor',
    'graves-sentinel',
    'graves-classic',
    'graves-victorious',
    'graves-porcelain',
    'graves-praetorian',
    'graves-riot',
    'graves-jailbreak',
    'graves-hired-gun',
    'gwen-battle-queen',
    'gwen-space-groove',
    'gwen-cafe-cuties',
    'gwen-soul-fighter',
    'gwen-classic',
    'hecarim-worldbreaker',
    'hecarim-arcade',
    'hecarim-arcana',
    'hecarim-cosmic-charger',
    'hecarim-elderwood',
    'hecarim-reaper',
    'hecarim-winterblessed',
    'hecarim-lancer-zero',
    'hecarim-blood-knight',
    'hecarim-classic',
    'hecarim-high-noon',
    'hecarim-headless',
    'heimerdinger-arcane-professor',
    'heimerdinger-dragon-trainer',
    'heimerdinger-classic',
    'heimerdinger-snowmerdinger',
    'heimerdinger-heimerstinger',
    'heimerdinger-hazmat',
    'heimerdinger-piltover-customs',
    'heimerdinger-blast-zone',
    'heimerdinger-alien-invader',
    'heimerdinger-pool-party',
    'hwei-classic',
    'hwei-winterblessed',
    'illaoi-cosmic-invoker',
    'illaoi-snow-moon',
    'illaoi-resistance',
    'illaoi-classic',
    'illaoi-battle-bear',
    'illaoi-void-bringer',
    'irelia-mythmaker',
    'irelia-aviator',
    'irelia-invictus-gaming',
    'irelia-frostblade',
    'irelia-sentinel',
    'irelia-order-of-the-lotus',
    'irelia-high-noon',
    'irelia-divine-sword',
    'irelia-classic',
    'irelia-nightblade',
    'irelia-porcelain',
    'irelia-project-prestige-edition',
    'irelia-project',
    'irelia-infiltrator',
    'ivern-classic',
    'ivern-candy-king',
    'ivern-astronaut',
    'ivern-dunkmaster',
    'ivern-old-god',
    'janna-crystal-rose',
    'janna-bewitching',
    'janna-forecast',
    'janna-tempest',
    'janna-sacred-sword',
    'janna-classic',
    'janna-cyber-halo-prestige',
    'janna-heavenscale',
    'janna-cyber-halo',
    'janna-battle-queen',
    'janna-guardian-of-the-sands',
    'janna-star-guardian',
    'janna-fnatic',
    'janna-victorious',
    'janna-frost-queen',
    'janna-hextech',
    'jarvan-iv-nightbringer',
    'jarvan-iv-worlds-2021',
    'jarvan-iv-classic',
    'jarvan-iv-commando',
    'jarvan-iv-dark-star',
    'jarvan-iv-lunar-beast',
    'jarvan-iv-fnatic',
    'jarvan-iv-darkforge',
    'jarvan-iv-warring-kingdoms',
    'jarvan-iv-pool-party',
    'jarvan-iv-ssg',
    'jarvan-iv-victorious',
    'jarvan-iv-dragon-slayer',
    'jarvan-iv-hextech',
    'jax-temple',
    'jax-god-staff',
    'jax-pax',
    'jax-nemesis',
    'jax-mecha-kingdoms',
    'jax-conqueror-prestige-edition',
    'jax-skt',
    'jax-project',
    'jax-jaximus',
    'jax-empyrean',
    'jax-neo-pax',
    'jax-conqueror',
    'jax-warden',
    'jax-angler',
    'jax-vandal',
    'jax-the-mighty',
    'jax-classic',
    'jayce-resistance',
    'jayce-brighthammer',
    'jayce-classic',
    'jayce-zenith-games',
    'jayce-arcane-survivor',
    'jayce-battle-academia',
    'jayce-debonair',
    'jayce-t1',
    'jayce-t1-prestige',
    'jayce-arcane',
    'jayce-forsaken',
    'jayce-full-metal',
    'jhin-classic',
    'jhin-dark-cosmic',
    'jhin-soul-fighter',
    'jhin-empyrean',
    'jhin-dwg',
    'jhin-project',
    'jhin-shan-hai-scrolls',
    'jhin-high-noon',
    'jhin-dark-cosmic-erasure',
    'jhin-skt-t1',
    'jhin-blood-moon',
    'jinx-arcane-fractured',
    'jinx-arcane',
    'jinx-crime-city',
    'jinx-cafe-cuties',
    'jinx-star-guardian',
    'jinx-firecracker',
    'jinx-t1',
    'jinx-battle-cat-prestige-edition',
    'jinx-slayer',
    'jinx-ambitious-elf',
    'jinx-classic',
    'jinx-battle-cat',
    'jinx-heartseeker',
    'jinx-project',
    'jinx-odyssey',
    'ksante-empyrean',
    'ksante-classic',
    'ksante-heartsteel',
    'ksante-empyrean-prestige',
    'kaisa-dark-star',
    'kaisa-invictus-gaming',
    'kaisa-inkshadow',
    'kaisa-lagoon-dragon',
    'kaisa-arcade',
    'kaisa-classic',
    'kaisa-heavenscale',
    'kaisa-star-guardian',
    'kaisa-kda-all-out',
    'kaisa-kda',
    'kaisa-bullet-angel',
    'kaisa-kda-all-out-prestige-edition',
    'kaisa-kda-prestige-edition',
    'kalista-marauder',
    'kalista-skt',
    'kalista-blood-moon',
    'kalista-classic',
    'kalista-faerie-court',
    'kalista-championship',
    'karma-dark-star',
    'karma-ruined',
    'karma-tranquility-dragon',
    'karma-classic',
    'karma-dawnbringer',
    'karma-traditional',
    'karma-faerie-queen',
    'karma-sun-goddess',
    'karma-conqueror',
    'karma-infernal',
    'karma-odyssey',
    'karma-winter-wonder',
    'karma-warden',
    'karma-order-of-the-lotus',
    'karma-sakura',
    'karthus-classic',
    'karthus-infernal',
    'karthus-grim-reaper',
    'karthus-pentakill-lost-chapter',
    'karthus-statue-of',
    'karthus-lightsbane',
    'karthus-elderwood',
    'karthus-phantom',
    'karthus-fnatic',
    'karthus-pentakill',
    'kassadin-shockblade',
    'kassadin-dragonmancer',
    'kassadin-harbinger',
    'kassadin-cosmic-reaver',
    'kassadin-deep-one',
    'kassadin-classic',
    'kassadin-hextech',
    'kassadin-count',
    'kassadin-pre-void',
    'kassadin-festival',
    'katarina-faerie-court-prestige',
    'katarina-chosen-of-the-wolf',
    'katarina-faerie-court',
    'katarina-slay-belle',
    'katarina-battle-queen',
    'katarina-high-command',
    'katarina-mercenary',
    'katarina-kitty-cat',
    'katarina-blood-moon',
    'katarina-warring-kingdoms',
    'katarina-high-noon',
    'katarina-battle-academia',
    'katarina-deathsworn',
    'katarina-project',
    'katarina-sandstorm',
    'katarina-bilgewater',
    'katarina-red-card',
    'katarina-classic',
    'kayle-judgement',
    'kayle-silver',
    'kayle-psyops',
    'kayle-viridian',
    'kayle-sun-eater',
    'kayle-empyrean',
    'kayle-immortal-journey',
    'kayle-aether-wing',
    'kayle-empyrean-prestige',
    'kayle-pentakill',
    'kayle-dragonslayer',
    'kayle-classic',
    'kayle-pentakill-lost-chapter',
    'kayle-iron-inquisitor',
    'kayle-riot',
    'kayle-battleborn',
    'kayle-transcended',
    'kayn-snow-moon',
    'kayn-odyssey',
    'kayn-soulhunter',
    'kayn-nightbringer-prestige-edition',
    'kayn-nightbringer',
    'kayn-classic',
    'kayn-heartsteel',
    'kennen-blood-moon',
    'kennen-infernal',
    'kennen-kennen-m-d',
    'kennen-super',
    'kennen-swamp-master',
    'kennen-classic',
    'kennen-astronaut',
    'kennen-dwg',
    'kennen-arctic-ops',
    'kennen-karate',
    'kennen-deadly',
    'khazix-mecha',
    'khazix-dark-star',
    'khazix-death-blossom',
    'khazix-classic',
    'khazix-crystalis-indomitus',
    'khazix-guardian-of-the-sands',
    'khazix-odyssey',
    'khazix-championship',
    'khazix-lunar-guardian',
    'kindred-drx',
    'kindred-woof-and-lamb',
    'kindred-spirit-blossom',
    'kindred-classic',
    'kindred-porcelain-prestige',
    'kindred-chosen-of-the-wolf',
    'kindred-shadowfire',
    'kindred-porcelain',
    'kindred-super-galaxy',
    'kled-classic',
    'kled-kibble-head',
    'kled-count-kledula',
    'kled-marauder',
    'kled-sir',
    'kogmaw-classic',
    'kogmaw-monarch',
    'kog-maw-bee-maw',
    'kog-maw-shan-hai-scrolls',
    'kogmaw-reindeer',
    'kogmaw-pugmaw',
    'kogmaw-jurassic',
    'kog-maw-arcanist',
    'kogmaw-battlecast',
    'kog-maw-zap-maw',
    'kog-maw-victorious',
    'kog-maw-hextech',
    'kogmaw-deep-sea',
    'kogmaw-lion-dance',
    'kogmaw-sonoran',
    'kogmaw-caterpillar',
    'leblanc-invictus-gaming',
    'leblanc-risen-legend',
    'leblanc-championship',
    'leblanc-prestigious',
    'leblanc-classic',
    'leblanc-bewitching',
    'leblanc-ravenborn',
    'leblanc-coven',
    'leblanc-coven-prestige-edition',
    'leblanc-wicked',
    'leblanc-debonair',
    'leblanc-program',
    'leblanc-elderwood',
    'leblanc-mistletoe',
    'lee-sin-god-fist',
    'lee-sin-dragon-fist',
    'lee-sin-classic',
    'lee-sin-storm-dragon',
    'lee-sin-heavenscale-divine',
    'lee-sin-knockout',
    'lee-sin-muay-thai',
    'lee-sin-fpx',
    'lee-sin-heavenscale',
    'lee-sin-playmaker',
    'lee-sin-t1',
    'lee-sin-zenith-games',
    'lee-sin-nightbringer-prestige-edition',
    'lee-sin-nightbringer',
    'lee-sin-skt',
    'lee-sin-pool-party',
    'lee-sin-traditional',
    'lee-sin-acolyte',
    'leona-solar-eclipse',
    'leona-battle-academia-prestige-edition',
    'leona-crystalis-motus',
    'leona-lunar-eclipse',
    'leona-pool-party',
    'leona-high-noon',
    'leona-valkyrie',
    'leona-project',
    'leona-iron-solari',
    'leona-debonair',
    'leona-battle-lion-prestige',
    'leona-battle-lion',
    'leona-dwg',
    'leona-battle-academia',
    'leona-mecha-kingdoms',
    'leona-barbecue',
    'leona-defender',
    'leona-classic',
    'lillia-faerie-court',
    'lillia-spirit-blossom',
    'lillia-nightbringer',
    'lillia-shan-hai-scrolls',
    'lillia-classic',
    'lissandra-dark-cosmic',
    'lissandra-porcelain-prestige',
    'lissandra-coven',
    'lissandra-bloodstone',
    'lissandra-porcelain',
    'lissandra-classic',
    'lissandra-program',
    'lissandra-space-groove',
    'lissandra-blade-queen',
    'lucian-classic',
    'lucian-pulsefire-prestige-edition',
    'lucian-strike-paladin',
    'lucian-high-noon',
    'lucian-arcana',
    'lucian-striker',
    'lucian-winterblessed',
    'lucian-heartseeker',
    'lucian-victorious',
    'lucian-demacia-vice',
    'lucian-hired-gun',
    'lucian-pulsefire',
    'lucian-project',
    'lulu-space-groove',
    'lulu-dragon-trainer',
    'lulu-cafe-cuties',
    'lulu-classic',
    'lulu-wicked',
    'lulu-bittersweet',
    'lulu-space-groove-prestige-edition',
    'lulu-monster-tamer',
    'lulu-winter-wonder',
    'lulu-pajama-guardian',
    'lulu-cosmic-enchantress',
    'lulu-star-guardian',
    'lulu-pool-party',
    'lux-dark-cosmic',
    'lux-elementalist',
    'lux-soul-fighter',
    'lux-cosmic',
    'lux-classic',
    'lux-empyrean',
    'lux-porcelain-prestige-edition',
    'lux-commando',
    'lux-space-groove',
    'lux-spellthief',
    'lux-faerie-court',
    'lux-porcelain',
    'lux-battle-academia-prestige-edition',
    'lux-battle-academia',
    'lux-pajama-guardian',
    'lux-lunar-empress',
    'lux-star-guardian',
    'lux-steel-legion',
    'lux-imperial',
    'lux-sorceress',
    'malphite-obsidian',
    'malphite-shamrock',
    'malphite-mecha',
    'malphite-classic',
    'malphite-fpx',
    'malphite-coral-reef',
    'malphite-marble',
    'malphite-dark-star',
    'malphite-ironside',
    'malphite-old-god',
    'malphite-dark-star-prestige-edition',
    'malphite-lunar-guardian',
    'malphite-odyssey',
    'malphite-glacial',
    'malzahar-shadow-prince',
    'malzahar-battle-boss',
    'malzahar-beezahar',
    'malzahar-worldbreaker',
    'malzahar-classic',
    'malzahar-debonair',
    'malzahar-hextech',
    'malzahar-overlord',
    'malzahar-empyrean',
    'malzahar-three-honors',
    'malzahar-snow-day',
    'malzahar-djinn',
    'malzahar-vizier',
    'maokai-meowkai',
    'maokai-classic',
    'maokai-astronaut',
    'maokai-worldbreaker',
    'maokai-festive',
    'maokai-victorious',
    'maokai-drx',
    'maokai-goalkeeper',
    'maokai-haunted',
    'maokai-totemic',
    'maokai-charred',
    'master-yi-inkshadow',
    'master-yi-project',
    'master-yi-psyops',
    'master-yi-classic',
    'master-yi-eternal-sword',
    'master-yi-snow-man',
    'master-yi-spirit-blossom-prestige',
    'master-yi-heavenscale',
    'master-yi-headhunter',
    'master-yi-assassin',
    'master-yi-spirit-blossom',
    'master-yi-debonair',
    'master-yi-blood-moon',
    'master-yi-cosmic-blade',
    'master-yi-samurai-yi',
    'master-yi-ionia',
    'master-yi-chosen',
    'milio-rain-shepherd',
    'milio-classic',
    'milio-faerie-court',
    'miss-fortune-secret-agent',
    'miss-fortune-battle-bunny',
    'miss-fortune-porcelain',
    'miss-fortune-admiral-battle-bunny',
    'miss-fortune-classic',
    'miss-fortune-broken-covenant-prestige',
    'miss-fortune-bewitching-prestige-edition',
    'miss-fortune-gun-goddess',
    'miss-fortune-ruined',
    'miss-fortune-cowgirl',
    'miss-fortune-arcade',
    'miss-fortune-battle-queen',
    'miss-fortune-broken-covenant',
    'miss-fortune-bewitching',
    'miss-fortune-pajama-guardian',
    'miss-fortune-star-guardian',
    'miss-fortune-pool-party',
    'miss-fortune-captain',
    'miss-fortune-crime-city',
    'miss-fortune-road-warrior',
    'miss-fortune-candy-cane',
    'miss-fortune-waterloo',
    'mordekaiser-project',
    'mordekaiser-old-god',
    'mordekaiser-lord',
    'mordekaiser-ashen-graveknight',
    'mordekaiser-classic',
    'mordekaiser-king-of-clubs',
    'mordekaiser-high-noon',
    'mordekaiser-dark-star',
    'mordekaiser-infernal',
    'mordekaiser-dragon-knight',
    'mordekaiser-pentakill-lost-chapter',
    'mordekaiser-pentakill',
    'morgana-bewitching',
    'morgana-sinful-succulence',
    'morgana-coven',
    'morgana-snow-moon',
    'morgana-blade-mistress',
    'morgana-majestic-empress',
    'morgana-star-nemesis',
    'morgana-classic',
    'morgana-exiled',
    'morgana-porcelain',
    'morgana-bewitching-prestige-edition',
    'morgana-dawnbringer',
    'morgana-lunar-wraith',
    'morgana-victorious',
    'morgana-ghost-bride',
    'morgana-blackthorn',
    'naafiri-soul-fighter',
    'naafiri-project',
    'naafiri-classic',
    'nami-skt-t1',
    'nami-classic',
    'nami-coven',
    'nami-space-groove-prestige',
    'nami-cosmic-destiny',
    'nami-deep-sea',
    'nami-koi',
    'nami-bewitching',
    'nami-river-spirit',
    'nami-space-groove',
    'nami-splendid-staff',
    'nami-program',
    'nami-urf-the-manatee',
    'nasus-armored-titan',
    'nasus-worldbreaker',
    'nasus-infernal',
    'nasus-pharaoh',
    'nasus-nightbringer',
    'nasus-archduke',
    'nasus-lunar-guardian',
    'nasus-classic',
    'nasus-space-groove',
    'nasus-dreadknight',
    'nasus-battlecast',
    'nasus-riot-k-9',
    'nasus-galactic',
    'nautilus-crystalis-indomitus',
    'nautilus-subterranean',
    'nautilus-astro',
    'nautilus-cosmic-paladin',
    'nautilus-classic',
    'nautilus-fright-night',
    'nautilus-shan-hai-scrolls',
    'nautilus-warden',
    'nautilus-abyssal',
    'nautilus-conqueror',
    'nautilus-worldbreaker',
    'neeko-classic',
    'neeko-bewitching',
    'neeko-winter-wonder',
    'neeko-star-guardian',
    'neeko-shan-hai-scrolls',
    'neeko-street-demons',
    'neeko-cosplayer',
    'neeko-star-guardian-prestige-edition',
    'nidalee-la-ilusion',
    'nidalee-headhunter',
    'nidalee-cosmic-huntress',
    'nidalee-classic',
    'nidalee-snow-bunny',
    'nidalee-bewitching',
    'nidalee-pharaoh',
    'nidalee-french-maid',
    'nidalee-kittalee',
    'nidalee-ocean-song',
    'nidalee-dwg',
    'nidalee-dawnbringer',
    'nidalee-super-galaxy',
    'nidalee-challenger',
    'nidalee-warring-kingdoms',
    'nidalee-leopard',
    'nilah-classic',
    'nilah-star-guardian',
    'nilah-coven',
    'nocturne-hextech',
    'nocturne-classic',
    'nocturne-old-god',
    'nocturne-haunting',
    'nocturne-eternum',
    'nocturne-void',
    'nocturne-cursed-revenant',
    'nocturne-empyrean',
    'nocturne-broken-covenant',
    'nocturne-ravager',
    'nocturne-frozen-terror',
    'nunu-amp-willump-papercraft',
    'nunu-amp-willump-grungy',
    'nunu-amp-willump-cosmic-paladins',
    'nunu-amp-willump-nunu-beelump',
    'nunu-amp-willump-fright-night',
    'nunu-amp-willump-classic',
    'nunu-amp-willump-bot',
    'nunu-amp-willump-space-groove',
    'nunu-amp-willump-workshop',
    'nunu-amp-willump-demolisher',
    'nunu-amp-willump-zombie',
    'nunu-amp-willump-tpa',
    'nunu-amp-willump-sasquatch',
    'olaf-dragonslayer',
    'olaf-brolaf',
    'olaf-skt-t1',
    'olaf-classic',
    'olaf-forsaken',
    'olaf-glacial',
    'olaf-sentinel',
    'olaf-pentakill-lost-chapter',
    'olaf-infernal',
    'olaf-marauder',
    'olaf-butcher',
    'olaf-pentakill',
    'orianna-orbeeanna',
    'orianna-dark-star',
    'orianna-t1',
    'orianna-bladecraft',
    'orianna-classic',
    'orianna-star-guardian',
    'orianna-sewn-chaos',
    'orianna-heartseeker',
    'orianna-winter-wonder',
    'orianna-pool-party',
    'orianna-tpa',
    'orianna-gothic',
    'orianna-victorious',
    'ornn-elderwood',
    'ornn-choo-choo',
    'ornn-classic',
    'ornn-space-groove',
    'ornn-thunder-lord',
    'pantheon-perseus',
    'pantheon-full-metal',
    'pantheon-classic',
    'pantheon-dragonslayer',
    'pantheon-baker',
    'pantheon-ruined',
    'pantheon-myrmidon',
    'pantheon-ascended-prestige-edition',
    'pantheon-ashen-conqueror',
    'pantheon-glaive-warrior',
    'pantheon-chosen-of-the-wolf',
    'pantheon-pulsefire',
    'pantheon-slayer',
    'pantheon-ruthless',
    'poppy-snow-fawn',
    'poppy-astronaut',
    'poppy-scarlet-hammer',
    'poppy-battle-regalia',
    'poppy-ragdoll',
    'poppy-noxus',
    'poppy-cafe-cuties',
    'poppy-hextech',
    'poppy-star-guardian',
    'poppy-lollipoppy',
    'poppy-blacksmith',
    'poppy-bewitching',
    'poppy-classic',
    'pyke-sentinel',
    'pyke-empyrean',
    'pyke-sand-wraith',
    'pyke-ashen-knight',
    'pyke-classic',
    'pyke-soul-fighter',
    'pyke-fright-night',
    'pyke-soul-fighter-prestige',
    'pyke-psyops',
    'pyke-project',
    'pyke-blood-moon',
    'qiyana-battle-queen',
    'qiyana-la-ilusion',
    'qiyana-true-damage-prestige-edition',
    'qiyana-lunar-empress',
    'qiyana-classic',
    'qiyana-battle-boss',
    'qiyana-shockblade',
    'qiyana-true-damage',
    'quinn-star-guardian',
    'quinn-classic',
    'quinn-warden',
    'quinn-woad-scout',
    'quinn-heartseeker',
    'quinn-corsair',
    'quinn-phoenix',
    'rakan-dragonmancer',
    'rakan-classic',
    'rakan-invictus-gaming',
    'rakan-dragonmancer-prestige',
    'rakan-arcana',
    'rakan-broken-covenant',
    'rakan-redeemed-star-guardian',
    'rakan-elderwood',
    'rakan-star-guardian',
    'rakan-ssg',
    'rakan-sweetheart',
    'rakan-cosmic-dawn',
    'rammus-sweeper',
    'rammus-durian-defender',
    'rammus-molten',
    'rammus-ninja',
    'rammus-full-metal',
    'rammus-astronaut',
    'rammus-guardian-of-the-sands',
    'rammus-freljord',
    'rammus-classic',
    'rammus-hextech',
    'rammus-king',
    'rammus-chrome',
    'reksai-primordian',
    'reksai-classic',
    'reksai-eternum',
    'reksai-blackfrost',
    'reksai-elderwood',
    'reksai-pool-party',
    'rell-high-noon',
    'rell-battle-queen',
    'rell-classic',
    'rell-star-guardian',
    'renata-glasc-la-ilusion-prestige',
    'renata-glasc-admiral',
    'renata-glasc-la-ilusion',
    'renata-glasc-fright-night',
    'renata-glasc-classic',
    'renekton-pool-party',
    'renekton-prehistoric',
    'renekton-dawnbringer',
    'renekton-classic',
    'renekton-bloodfury',
    'renekton-scorched-earth',
    'renekton-renektoy',
    'renekton-worlds-2023',
    'renekton-project',
    'renekton-galactic',
    'renekton-blackfrost',
    'renekton-hextech',
    'renekton-skt',
    'renekton-rune-wars',
    'renekton-outback',
    'rengar-headhunter',
    'rengar-street-demons',
    'rengar-pretty-kitty',
    'rengar-night-hunter',
    'rengar-sentinel',
    'rengar-guardian-of-the-sands',
    'rengar-classic',
    'rengar-mecha',
    'rengar-ssw',
    'riven-broken-covenant',
    'riven-battle-bunny-prime',
    'riven-valiant-sword',
    'riven-crimson-elite',
    'riven-primal-ambush',
    'riven-sentinel',
    'riven-redeemed',
    'riven-pulsefire',
    'riven-spirit-blossom',
    'riven-dragonblade',
    'riven-classic',
    'riven-championship',
    'riven-valiant-sword-prestige-edition',
    'riven-dawnbringer',
    'riven-arcade',
    'riven-battle-bunny',
    'rumble-super-galaxy',
    'rumble-classic',
    'rumble-cafe-cuties',
    'rumble-rumble-in-the-jungle',
    'rumble-badlands-baron',
    'rumble-space-groove',
    'rumble-bilgerat',
    'ryze-zombie',
    'ryze-classic',
    'ryze-championship',
    'ryze-skt',
    'ryze-dark-crystal',
    'ryze-whitebeard',
    'ryze-arcana',
    'ryze-professor',
    'ryze-guardian-of-the-sands',
    'ryze-pirate',
    'ryze-tribal',
    'ryze-triumphant',
    'ryze-uncle',
    'ryze-human',
    'samira-space-groove',
    'samira-soul-fighter',
    'samira-classic',
    'samira-high-noon',
    'samira-psyops',
    'sejuani-classic',
    'sejuani-traditional',
    'sejuani-hextech',
    'sejuani-firecracker',
    'sejuani-poro-rider',
    'sejuani-bear-cavalry',
    'sejuani-dawnchaser',
    'sejuani-victorious',
    'sejuani-solar-eclipse',
    'sejuani-project',
    'sejuani-beast-hunter',
    'sejuani-sabretusk',
    'sejuani-darkrider',
    'senna-lunar-eclipse',
    'senna-winterblessed',
    'senna-true-damage-prestige-edition',
    'senna-high-noon',
    'senna-lunar-eclipse-prestige-edition',
    'senna-true-damage',
    'senna-project',
    'senna-star-guardian',
    'senna-classic',
    'senna-bewitching',
    'seraphine-star-guardian',
    'seraphine-faerie-court',
    'seraphine-kda-all-out-indie',
    'seraphine-kda-all-out-rising-star',
    'seraphine-kda-all-out-superstar',
    'seraphine-ocean-song-prestige',
    'seraphine-graceful-phoenix',
    'seraphine-classic',
    'seraphine-battle-dove',
    'seraphine-ocean-song',
    'sett-obsidian-dragon',
    'sett-obsidian-dragon-prestige-edition',
    'sett-mecha-kingdoms',
    'sett-soul-fighter',
    'sett-spirit-blossom',
    'sett-heartsteel',
    'sett-classic',
    'sett-firecracker',
    'sett-pool-party',
    'shaco-soul-fighter',
    'shaco-asylum',
    'shaco-classic',
    'shaco-royal',
    'shaco-soul-fighter-prestige',
    'shaco-nutcracko',
    'shaco-masked',
    'shaco-arcanist',
    'shaco-crime-city-nightmare',
    'shaco-fright-night',
    'shaco-winterblessed',
    'shaco-dark-star',
    'shaco-wild-card',
    'shaco-workshop',
    'shaco-mad-hatter',
    'shen-shockblade',
    'shen-classic',
    'shen-yellow-jacket',
    'shen-psyops',
    'shen-surgeon',
    'shen-ashen-guardian',
    'shen-pulsefire',
    'shen-infernal',
    'shen-warlord',
    'shen-frozen',
    'shen-tpa',
    'shen-blood-moon',
    'shyvana-classic',
    'shyvana-immortal-journey',
    'shyvana-ironscale',
    'shyvana-super-galaxy',
    'shyvana-darkflame',
    'shyvana-ruined',
    'shyvana-championship',
    'shyvana-ice-drake',
    'shyvana-boneclaw',
    'singed-arcane-shimmer-lab',
    'singed-astronaut',
    'singed-beekeeper',
    'singed-classic',
    'singed-surfer',
    'singed-snow-day',
    'singed-riot-squad',
    'singed-mad-scientist',
    'singed-resistance',
    'singed-black-scourge',
    'singed-ssw',
    'singed-augmented',
    'singed-hextech',
    'sion-cosmic-paladin',
    'sion-barbarian',
    'sion-classic',
    'sion-high-noon',
    'sion-blackfrost',
    'sion-lumberjack',
    'sion-hextech',
    'sion-mecha-zero',
    'sion-worldbreaker',
    'sion-warmonger',
    'sivir-mythmaker-prestige',
    'sivir-odyssey',
    'sivir-cafe-cuties',
    'sivir-warrior-princess',
    'sivir-huntress',
    'sivir-classic',
    'sivir-pizza-delivery',
    'sivir-blood-moon',
    'sivir-warden',
    'sivir-spectacular',
    'sivir-ann-sivir-sary',
    'sivir-primal-ambush',
    'sivir-mythmaker',
    'sivir-solar-eclipse',
    'sivir-neo-pax',
    'sivir-victorious',
    'sivir-snowstorm',
    'sivir-pax',
    'sivir-bandit',
    'skarner-battlecast-alpha',
    'skarner-classic',
    'skarner-earthrune',
    'skarner-guardian-of-the-sands',
    'skarner-sandscourge',
    'skarner-cosmic-sting',
    'smolder-heavenscale',
    'smolder-classic',
    'sona-pentakill-lost-chapter',
    'sona-dj',
    'sona-guqin',
    'sona-pentakill',
    'sona-psyops',
    'sona-immortal-journey-prestige',
    'sona-star-guardian',
    'sona-classic',
    'sona-sweetheart',
    'sona-immortal-journey',
    'sona-arcade',
    'sona-odyssey',
    'sona-victorious',
    'sona-silent-night',
    'sona-muse',
    'soraka-spirit-blossom',
    'soraka-divine',
    'soraka-immortal-journey',
    'soraka-star-guardian-prestige-edition',
    'soraka-dawnbringer',
    'soraka-classic',
    'soraka-faerie-court',
    'soraka-nightbringer',
    'soraka-star-guardian',
    'soraka-order-of-the-banana',
    'soraka-reaper',
    'soraka-cafe-cuties',
    'soraka-winter-wonder',
    'soraka-pajama-guardian',
    'soraka-program',
    'soraka-celestine',
    'soraka-dryad',
    'swain-chosen-of-the-wolf-prestige',
    'swain-chosen-of-the-wolf',
    'swain-dragon-master',
    'swain-crystal-rose',
    'swain-classic',
    'swain-winterblessed',
    'swain-tyrant',
    'swain-hextech',
    'swain-northern-front',
    'swain-bilgewater',
    'sylas-freljord',
    'sylas-classic',
    'sylas-lunar-wraith',
    'sylas-project-prestige-edition',
    'sylas-winterblessed',
    'sylas-battle-wolf',
    'sylas-dark-star',
    'sylas-ashen-slayer',
    'sylas-project',
    'syndra-classic',
    'syndra-star-guardian-prestige-edition',
    'syndra-spirit-blossom',
    'syndra-withered-rose',
    'syndra-skt-t1',
    'syndra-atlantean',
    'syndra-pool-party',
    'syndra-snow-day',
    'syndra-bewitching',
    'syndra-justicar',
    'syndra-coven',
    'syndra-star-guardian',
    'syndra-queen-of-diamonds',
    'tahm-kench-master-chef',
    'tahm-kench-coin-emperor',
    'tahm-kench-arcana',
    'tahm-kench-shan-hai-scrolls',
    'tahm-kench-classic',
    'tahm-kench-urf',
    'tahm-kench-high-noon',
    'taliyah-crystalis-motus',
    'taliyah-classic',
    'taliyah-ssg',
    'taliyah-freljord',
    'taliyah-star-guardian',
    'taliyah-pool-party',
    'talon-withered-rose',
    'talon-enduring-sword',
    'talon-blood-moon',
    'talon-high-noon-prestige',
    'talon-dragonblade',
    'talon-primal-ambush',
    'talon-ssw',
    'talon-classic',
    'talon-crimson-elite',
    'talon-high-noon',
    'talon-blackwood',
    'talon-renegade',
    'taric-luminshield',
    'taric-pool-party',
    'taric-emerald',
    'taric-armor-of-the-fifth-age',
    'taric-space-groove',
    'taric-classic',
    'taric-bloodstone',
    'teemo-spirit-blossom',
    'teemo-super',
    'teemo-beemo',
    'teemo-omega-squad',
    'teemo-little-devil',
    'teemo-spirit-blossom-prestige-edition',
    'teemo-classic',
    'teemo-panda',
    'teemo-space-groove',
    'teemo-firecracker',
    'teemo-cottontail',
    'teemo-astronaut',
    'teemo-badger',
    'teemo-recon',
    'teemo-happy-elf',
    'thresh-dark-star',
    'thresh-lunar-emperor',
    'thresh-pulsefire-prestige-edition',
    'thresh-steel-dragon',
    'thresh-spirit-blossom',
    'thresh-classic',
    'thresh-blood-moon',
    'thresh-championship',
    'thresh-pulsefire',
    'thresh-janitor',
    'thresh-high-noon',
    'thresh-winterblessed',
    'thresh-unbound',
    'thresh-fpx',
    'thresh-ssw',
    'thresh-deep-terror',
    'tristana-faerie-court',
    'tristana-firecracker',
    'tristana-dragon-trainer',
    'tristana-buccaneer',
    'tristana-little-demon',
    'tristana-spirit-blossom',
    'tristana-guerilla',
    'tristana-riot-girl',
    'tristana-classic',
    'tristana-pengu-cosplay',
    'tristana-hextech',
    'tristana-omega-squad',
    'tristana-bewitching',
    'tristana-rocket-girl',
    'tristana-firefighter',
    'tristana-earnest-elf',
    'trundle-traditional',
    'trundle-lil-slugger',
    'trundle-fright-night',
    'trundle-worldbreaker',
    'trundle-classic',
    'trundle-esports-fan',
    'trundle-dragonslayer',
    'trundle-constable',
    'trundle-junkyard',
    'tryndamere-sultan',
    'tryndamere-highland',
    'tryndamere-blood-moon',
    'tryndamere-king',
    'tryndamere-nightbringer',
    'tryndamere-classic',
    'tryndamere-nightmare',
    'tryndamere-demonblade',
    'tryndamere-victorious',
    'tryndamere-chemtech',
    'tryndamere-beast-hunter',
    'tryndamere-warring-kingdoms',
    'tryndamere-viking',
    'twisted-fate-high-noon',
    'twisted-fate-red-card',
    'twisted-fate-pax',
    'twisted-fate-classic',
    'twisted-fate-musketeer',
    'twisted-fate-dwg',
    'twisted-fate-the-magnificent',
    'twisted-fate-crime-city-nightmare',
    'twisted-fate-odyssey',
    'twisted-fate-underworld',
    'twisted-fate-space-groove',
    'twisted-fate-blood-moon',
    'twisted-fate-tango',
    'twisted-fate-pulsefire',
    'twisted-fate-cutpurse',
    'twisted-fate-jack-of-hearts',
    'twitch-high-noon',
    'twitch-ice-king',
    'twitch-crime-city',
    'twitch-omega-squad',
    'twitch-shadowfoot',
    'twitch-classic',
    'twitch-kingpin',
    'twitch-cheddar-chief',
    'twitch-dragonslayer',
    'twitch-ssw',
    'twitch-pickpocket',
    'twitch-vandal',
    'twitch-medieval',
    'twitch-whistler-village',
    'udyr-spirit-guard',
    'udyr-definitely-not',
    'udyr-black-belt',
    'udyr-primal',
    'udyr-classic',
    'udyr-dragon-oracle',
    'udyr-inkshadow',
    'urgot-battlecast',
    'urgot-high-noon',
    'urgot-butcher',
    'urgot-giant-enemy-crabgot',
    'urgot-fright-night',
    'urgot-pajama-guardian-cosplay',
    'urgot-classic',
    'varus-infernal',
    'varus-snow-moon',
    'varus-empyrean',
    'varus-arclight',
    'varus-arctic-ops',
    'varus-cosmic-hunter',
    'varus-conqueror',
    'varus-project',
    'varus-blight-crystal',
    'varus-classic',
    'varus-high-noon',
    'varus-dark-star',
    'varus-swiftbolt',
    'varus-heartseeker',
    'vayne-vindicator',
    'vayne-soulstealer',
    'vayne-battle-bat',
    'vayne-spirit-blossom',
    'vayne-dawnbringer',
    'vayne-firecracker-prestige-edition',
    'vayne-dragonmancer',
    'vayne-classic',
    'vayne-arclight',
    'vayne-heartseeker',
    'vayne-dragonslayer',
    'vayne-fpx',
    'vayne-sentinel',
    'vayne-firecracker',
    'vayne-project',
    'vayne-skt',
    'vayne-aristocratic',
    'veigar-final-boss',
    'veigar-curling',
    'veigar-omega-squad',
    'veigar-fright-night',
    'veigar-superb-villain',
    'veigar-elderwood',
    'veigar-furyhorn-cosplay',
    'veigar-baron-von',
    'veigar-astronaut',
    'veigar-classic',
    'veigar-veigar-greybeard',
    'veigar-monster-tamer',
    'veigar-leprechaun',
    'veigar-king-beegar',
    'veigar-bad-santa',
    'veigar-white-mage',
    'velkoz-classic',
    'velkoz-blackfrost',
    'velkoz-battlecast',
    'velkoz-arclight',
    'velkoz-beekoz',
    'velkoz-definitely-not',
    'velkoz-infernal',
    'vex-dawnbringer',
    'vex-empyrean',
    'vex-classic',
    'vi-warring-kingdoms',
    'vi-arcane',
    'vi-project',
    'vi-arcane-brawler',
    'vi-demon',
    'vi-primal-ambush',
    'vi-classic',
    'vi-psyops',
    'vi-heartache',
    'vi-neon-strike',
    'vi-heartbreaker',
    'vi-debonair',
    'vi-officer',
    'viego-king',
    'viego-soul-fighter',
    'viego-edg',
    'viego-classic',
    'viego-lunar-beast',
    'viego-dissonance-of-pentakill',
    'viego-worlds-2024',
    'viktor-high-noon',
    'viktor-full-machine',
    'viktor-classic',
    'viktor-deathsworn',
    'viktor-prototype',
    'viktor-psyops',
    'viktor-arcane-savior',
    'viktor-creator',
    'vladimir-marquis',
    'vladimir-blood-lord',
    'vladimir-nightbringer',
    'vladimir-count',
    'vladimir-soulstealer',
    'vladimir-classic',
    'vladimir-cosmic-devourer',
    'vladimir-cafe-cuties',
    'vladimir-broken-covenant',
    'vladimir-dark-waters',
    'vladimir-academy',
    'vladimir-vandal',
    'vladimir-nosferatu',
    'volibear-duality-dragon-prestige-edition',
    'volibear-inkshadow',
    'volibear-classic',
    'volibear-captain',
    'volibear-duality-dragon',
    'volibear-the-thousand-pierced-bear',
    'volibear-runeguard',
    'volibear-el-rayo',
    'volibear-thunder-lord',
    'volibear-northern-storm',
    'warwick-feral',
    'warwick-classic',
    'warwick-firefang',
    'warwick-grey',
    'warwick-hyena',
    'warwick-winterblessed-prestige',
    'warwick-big-bad',
    'warwick-project',
    'warwick-winterblessed',
    'warwick-old-god',
    'warwick-urf-the-manatee',
    'warwick-marauder',
    'warwick-arcane-vander',
    'warwick-lunar-guardian',
    'warwick-tundra-hunter',
    'wukong-underworld',
    'wukong-jade-dragon',
    'wukong-classic',
    'wukong-volcanic',
    'wukong-lancer-stratus',
    'wukong-elderwood',
    'wukong-radiant',
    'wukong-battle-academia',
    'wukong-general',
    'xayah-redeemed-star-guardian',
    'xayah-ssg',
    'xayah-arcana',
    'xayah-star-guardian',
    'xayah-elderwood',
    'xayah-broken-covenant',
    'xayah-battle-bat',
    'xayah-classic',
    'xayah-brave-phoenix-prestige-edition',
    'xayah-sweetheart',
    'xayah-brave-phoenix',
    'xayah-cosmic-dusk',
    'xerath-dark-star',
    'xerath-arcana',
    'xerath-classic',
    'xerath-runeborn',
    'xerath-scorched-earth',
    'xerath-astronaut',
    'xerath-guardian-of-the-sands',
    'xerath-crystalis-indomitus',
    'xerath-battlecast',
    'xin-zhao-marauder',
    'xin-zhao-secret-agent',
    'xin-zhao-firecracker',
    'xin-zhao-dragonslayer',
    'xin-zhao-warring-kingdoms',
    'xin-zhao-cosmic-defender',
    'xin-zhao-classic',
    'xin-zhao-winged-hussar',
    'xin-zhao-viscero',
    'xin-zhao-imperial',
    'xin-zhao-commando',
    'yasuo-inkshadow-prestige',
    'yasuo-nightbringer',
    'yasuo-inkshadow',
    'yasuo-truth-dragon',
    'yasuo-high-noon',
    'yasuo-sea-dog',
    'yasuo-foreseen',
    'yasuo-blood-moon',
    'yasuo-spirit-blossom',
    'yasuo-classic',
    'yasuo-genesis-nightbringer',
    'yasuo-battle-wolf',
    'yasuo-dream-dragon',
    'yasuo-true-damage-prestige-edition',
    'yasuo-true-damage',
    'yasuo-battle-boss',
    'yasuo-odyssey',
    'yasuo-project',
    'yone-battle-academia',
    'yone-inkshadow',
    'yone-classic',
    'yone-high-noon-peacemaker',
    'yone-ocean-song',
    'yone-high-noon',
    'yone-spirit-blossom',
    'yone-dawnbringer',
    'yone-heartsteel-prestige',
    'yone-heartsteel',
    'yorick-resistance',
    'yorick-dark-star',
    'yorick-spirit-blossom',
    'yorick-classic',
    'yorick-undertaker',
    'yorick-meowrick',
    'yorick-pentakill-lost-chapter',
    'yorick-pentakill',
    'yorick-arclight',
    'yuumi-battle-principal',
    'yuumi-heartseeker',
    'yuumi-classic',
    'yuumi-shiba',
    'yuumi-yuubee',
    'yuumi-bewitching',
    'yuumi-edg',
    'yuumi-cyber-cat-prestige',
    'yuumi-cyber-cat',
    'zac-battlecast',
    'zac-empyrean',
    'zac-pool-party',
    'zac-skt-t1',
    'zac-zesty-dip',
    'zac-classic',
    'zac-special-weapon',
    'zed-championship',
    'zed-galaxy-slayer',
    'zed-blood-moon',
    'zed-shockblade',
    'zed-immortal-journey',
    'zed-project-prestige-edition',
    'zed-debonair',
    'zed-deathsworn',
    'zed-classic',
    'zed-empyrean',
    'zed-psyops',
    'zed-project',
    'zed-skt',
    'zeri-withered-rose',
    'zeri-classic',
    'zeri-immortal-journey',
    'zeri-fright-night-prestige',
    'zeri-fright-night',
    'zeri-ocean-song',
    'ziggs-battle-boss',
    'ziggs-master-arcanist',
    'ziggs-bzzziggs',
    'ziggs-snow-day',
    'ziggs-mad-scientist',
    'ziggs-major',
    'ziggs-classic',
    'ziggs-hextech',
    'ziggs-pool-party',
    'ziggs-la-ilusion',
    'ziggs-sugar-rush',
    'ziggs-odyssey',
    'zilean-winterblessed',
    'zilean-classic',
    'zilean-blood-moon',
    'zilean-sugar-rush',
    'zilean-groovy',
    'zilean-time-machine',
    'zilean-old-saint',
    'zilean-shurima-desert',
    'zoe-pool-party',
    'zoe-classic',
    'zoe-dark-star',
    'zoe-arcanist-prestige-edition',
    'zoe-winterblessed',
    'zoe-edg',
    'zoe-star-guardian',
    'zoe-cyber-pop',
    'zoe-arcanist',
    'zyra-dragon-sorceress',
    'zyra-street-demons',
    'zyra-coven',
    'zyra-crystal-rose',
    'zyra-classic',
    'zyra-haunted',
    'zyra-crime-city-nightmare',
    'zyra-blood-moon',
    'zyra-mythmaker',
    'zyra-coven-prestige-edition',
    'zyra-skt',
    'zyra-wildfire'
]
const fullListLength = fullList.length



const Player = {
    name: "Joana",
    canChange: true,
    chosenCards: [],
    chosenPositions: [],
    points: 0,
    quantityCardsSelected: 0,
    cardsRevealed: 0,
    checkCards(pos) {

        const cardsItem = Array.from(document.querySelectorAll(".card-item"))

        if (this.chosenCards.length < 2) {
            this.chosenPositions.push(pos)
            this.chosenCards.push(cardsItem[pos].getAttribute('name'))
        }

        if (this.chosenCards[0] != this.chosenCards[1] && this.chosenCards.length == 2) {
            console.log(this.chosenPositions)

            // flopCard(this.chosenPositions[0])
            // flopCard(this.chosenPositions[1])

            Game.flop(this.chosenPositions[0])
            Game.flop(this.chosenPositions[1])

            this.chosenCards = []
            this.chosenPositions = []
        }

        if (this.chosenCards[0] == this.chosenCards[1] && this.chosenCards.length == 2) {
            cardChecked(this.chosenPositions[0])
            cardChecked(this.chosenPositions[1])
            this.chosenCards = []
            this.chosenPositions = []

            this.cardsRevealed++

            console.log(this.cardsRevealed + "/" + this.quantityCardsSelected)

            if (this.cardsRevealed == this.quantityCardsSelected) {
                // new Audio('./sounds/victory.mp3').play()
                setTimeout(() => {
                    this.success()
                }, 1000)
            }
            else {
                // new Audio('./sounds/success.mp3').play()
            }
        }
    },

    success() {
        console.log('sucesso')
        this.cardsRevealed = 0
        this.chosenCards = []
        this.chosenPositions = []
        decreaseSizeCards(++this.quantityCardsSelected)
    }
}

//Game.id

const Game = {
    id: '123',
    board36: board36(),
    binary: getCardsFlipedBinary(),
    user: Player.name,

    getInfo() {
        const info = {
            id: '123',
            board36: board36(),
            // names: numbers36ToNames(board36()),
            binary: getCardsFlipedBinary(),
            user: Player.name
        }
        return info
    },

    flip(position) {
        flipCard(position)
        setTimeout(() => {
            const obj = {
                id: this.id,
                pos: position,
                binary: getCardsFlipedBinary()
            }
            socket.emit('flip', JSON.stringify(obj))
        }, 50)
    },

    flop(position) {
        flopCard(position)
        setTimeout(() => {
            const obj = {
                id: this.id,
                pos: position,
                binary: getCardsFlipedBinary()
            }
            socket.emit('flop', JSON.stringify(obj))
        }, 50)
    },

    hideAll() {
        const cardsItem = Array.from(document.querySelectorAll(".card-item"))
        const cardsFiltereds = Array.from(document.querySelectorAll(".card-item")).filter(e => e.firstChild.classList.contains('flop'))
        const positions = cardsFiltereds.map(e => cardsItem.indexOf(e))

        positions.map((e, i) => {
            setTimeout(() => {
                this.flop(e)
            }, i * 50)
        })
    }
}






// const unsort = str => str.sort(() => Math.random() - 0.5)

function getCardsFlipedBinary() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    return cardsItem.map(e => e.firstChild.classList.contains('flop')).map(e => e ? 1 : 0).join('')
    // shows which cards are face up
    // '1110101000011001'
}

function cardsFliped(listBinary) {
    // const listBinary = '1110101000011001'
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    if (listBinary.length != cardsItem.length) return "Different size"
    listBinary.split('').map((e, i) => e == 1 ? flipCard(i) : flopCard(i))
}

function unsort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

function setColumns(cols) {
    cards.style.width = (100 * cols + 20 * cols) + 'px'
}


function adjustColumns(quantity_cards) {
    const cards = document.querySelector("#cards")
    quantity_cards = cards.childElementCount / 2
    if (quantity_cards >= 2) colunas = 2
    if (quantity_cards >= 3) colunas = 3
    if (quantity_cards >= 4) colunas = 4
    if (quantity_cards >= 9) colunas = 5
    if (quantity_cards >= 11) colunas = 6
    if (quantity_cards >= 13) colunas = 7
    if (quantity_cards >= 15) colunas = 8
    if (quantity_cards >= 17) colunas = 9
    if (quantity_cards >= 25) colunas = 10
    cards.style.maxWidth = (100 * colunas + 20 * colunas) + 'px'
}


function createCard(name, revelated) {
    const cards = document.querySelector('.cards')
    const cardItem = document.createElement("div")
    const card = document.createElement("div")
    const img = new Image()
    img.src = `./imagens/png/${name}.png`
    card.appendChild(img)
    card.className = 'card'
    card.style.width = '0px'
    card.style.height = '0px'

    // if(revelated) { card.removeAttribute('style') }

    setTimeout(() => { card.removeAttribute('style') }, 10)
    // if (opacity) cardItem.style.opacity = 0;
    // if (opacity) 
    // cardItem.overflow = 'hidden'
    cardItem.style.width = 0;
    cardItem.style.height = '0px'
    // if (opacity) cardItem.style.float = 'left';
    cardItem.className = 'card-item'
    cardItem.setAttribute('name', name)
    cardItem.addEventListener('click', () => {
        const position = Array.from(cards.children).indexOf(cardItem)
        if (!cardItem.firstChild.classList.contains('flop')) {
            // flipCard(position)
            Game.flip(position)
            setTimeout(() => {
                Player.checkCards(position)
            }, 700)
        }
    })

    const r = Math.random() * 3 | 0
    const urlsound1 = `./sounds/${r}.mp3`
    const urlsound2 = `./sounds/${r}.mp3`

    cardItem.aud = new Audio()
    cardItem.aud.src = urlsound1

    cardItem.aud2 = new Audio()
    cardItem.aud2.src = urlsound2


    cardItem.appendChild(card)
    cards.appendChild(cardItem)
}

function changeChampionCard(position, newName) {
    //const position = 0
    //const newName = 'aatrox-drx'
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    cardsItem[position].setAttribute('name', newName)
    cardsItem[position].querySelector('img').src = `./imagens/png/${newName}.png`
}

function changeChampionCard(names) {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    // const names = [
    //     'sona-psyops',
    //     'sona-immortal-journey-prestige',
    //     'sona-star-guardian',
    //     'sona-classic',
    //     'sona-sweetheart'
    // ]
    function changeChampionCard(position, newName) {
        //const position = 0
        //const newName = 'aatrox-drx'
        const cardsItem = Array.from(document.querySelectorAll(".card-item"))
        cardsItem[position].setAttribute('name', newName)
        cardsItem[position].querySelector('img').src = `./imagens/png/${newName}.png`
    }

    names.map((name, position) => changeChampionCard(position, name))
}

function randomNumbers(quantity = 5, length = 100) {
    const list = []
    for (let i = 0; i < quantity; i++) {
        const n = Math.random() * length | 0
        if (list.includes(n)) {
            --i
        } else {
            list.push(n)
        }
    }
    return list
}


// changeChampionCard(0, 'aatrox-drx')

// unsort(fullList).slice(0, tamanho).forEach(createCard)

// addDeckRandom()

// lista.slice(0, tamanho).forEach(createCard)

// position 0 cards
// const cardsItem = Array.from(document.querySelectorAll(".card-item"))

// function getInfo() {
//     const info = {
//         id: Game.id,
//         board36: board36(),
//         binary: getCardsFlipedBinary(),
//         user: Player.name
//     }
//     return info
// }

function flipCard(position) {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    if (cardsItem[position] == undefined) return

    cardsItem[position].firstChild.classList.add('flop')
    cardsItem[position].removeAttribute('style')
    cardsItem[position].style.margin = '10px'
    cardsItem[position].setAttribute('pos', position)
    cardsItem[position].aud2.play()
}

function flopCard(position) {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    if (cardsItem[position] == undefined) return

    cardsItem[position].firstChild.classList.remove('flop')
    cardsItem[position].removeAttribute('style')
    cardsItem[position].style.margin = '10px'
    cardsItem[position].aud.play()
}

// function flopCard2(position) {
//     const cardsItem = Array.from(document.querySelectorAll(".card-item"))
//     cardsItem[position].firstChild.classList.remove('flop')
//     cardsItem[position].removeAttribute('style')
//     cardsItem[position].style.margin = '10px'
//     cardsItem[position].aud.play()
// }

function cardChecked(position) {
    // const position = 3
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    cardsItem[position].classList.add('checked')
}


function showAllRevelate() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    cardsItem.map((e, i) => {
        setTimeout(() => {
            flopCard(i)
            // flopCard(i)
        }, i * 50)
    })
}

function showAll() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const cardsFiltereds = Array.from(document.querySelectorAll(".card-item")).filter(e => !e.firstChild.classList.contains('flop'))
    const positions = cardsFiltereds.map(e => cardsItem.indexOf(e))
    positions.map((e, i) => {
        setTimeout(() => {
            flipCard(e)
        }, i * 50)
    })
    setTimeout(() => {
        Player.canChange = true
    }, positions.length * 50)
}

function showAll2() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const cardsFiltereds = Array.from(document.querySelectorAll(".card-item")).filter(e => !e.firstChild.classList.contains('flop'))
    const positions = cardsFiltereds.map(e => cardsItem.indexOf(e))

    positions.map((position, i) => {
        setTimeout(() => {
            const cardsItem = Array.from(document.querySelectorAll(".card-item"))
            // cardsItem[position].firstChild.classList.add('flop')
            cardsItem[position].removeAttribute('style')
            cardsItem[position].style.margin = '10px'
            cardsItem[position].setAttribute('pos', position)
            cardsItem[position].aud2.play()
        }, i * 50)
    })



    // const id = Game.id
    // if(test) socket.emit('flip', JSON.stringify({id: id, pos: position}))


    // const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    // const cardsFiltereds = Array.from(document.querySelectorAll(".card-item")).filter(e => !e.firstChild.classList.contains('flop'))
    // const positions = cardsFiltereds.map(e => cardsItem.indexOf(e))
    // positions.map((e, i) => {
    //     setTimeout(() => {
    //         flipCard(e)
    //     }, i * 50)
    // })
    // setTimeout(() => {
    //     Player.canChange = true
    // }, positions.length * 50)
}

function hideAll() {
    // const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    // const cardsItem = Array.from(document.querySelectorAll(".card-item")).filter(e=>e.firstChild.classList.contains('flop'))

    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const cardsFiltereds = Array.from(document.querySelectorAll(".card-item")).filter(e => e.firstChild.classList.contains('flop'))
    const positions = cardsFiltereds.map(e => cardsItem.indexOf(e))

    positions.map((e, i) => {
        setTimeout(() => {
            flopCard(e)
        }, i * 50)
    })

    // setTimeout(() => {
    //     console.log('fim')
    //     addCard()
    // }, positions.length * 30)



    // cardsItem.map((e, i) => {
    //     setTimeout(() => {
    //         flopCard(i)
    //     }, i * 100)
    // })
}


function deck(list) {
    list.forEach(e => {
        createCard(e)
    })
}

function createRoom() {
    setTimeout(() => {

        // second time
        if (window.location.href.includes('game')) {
            const id = Game.id
            console.log('você entrou na sala ' + id)
            return
        }

        // first time
        // const id = Date.now().toString(36)
        // const id = 123

        // const obj = {
        //     "id": Game.id,
        //     "board": board36(),
        //     "user": Player.name,
        //     "binary": getCardsFlipedBinary()
        // }

        // console.log(obj)

        socket.emit('connect room', JSON.stringify(Game.getInfo()));

        // window.history.pushState({}, '', 'game=' + id)
        // console.log(obj)

    }, 1500)
}


// fullList = [1,2,3, 5]



function addDeckRandom(number = 10, revelated = true) {
    const listDeckTemp = randomNumbers(number, fullListLength).map(e => fullList[e], fullListLength)
    const listDeckTemp2 = []
    listDeckTemp2.push(listDeckTemp)
    listDeckTemp2.push(listDeckTemp)
    const listDeckTemp3 = unsort(listDeckTemp2.flat())
    deck(listDeckTemp3)
    revelated ? showAll() : showAllRevelate()
    adjustColumns(number)
    Player.quantityCardsSelected = number
    //socket
    // const id = Game.id
    // const boardMatrix = board36()
    // const binary = getCardsFlipedBinary()
    // socket.emit('changedeck', JSON.stringify(Game.getInfo()))
}

function addDeckNormal(nameListChampions, revelated) {
    const listDeckTemp = nameListChampions
    const listDeckTemp2 = []
    listDeckTemp2.push(listDeckTemp)
    // listDeckTemp2.push(listDeckTemp)
    const listDeckTemp3 = listDeckTemp2.flat()
    deck(listDeckTemp3)
    revelated ? showAll() : showAllRevelate()
    adjustColumns(nameListChampions.length)
    Player.quantityCardsSelected = nameListChampions.length
}

function board() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const list = []
    cardsItem.map(e => list.push(e.getAttribute('name')))
    return list
}

function board36() {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const list = []
    cardsItem.map(e => list.push(e.getAttribute('name')))
    const list2 = list.map(e => {
        const num = fullList.indexOf(e)
        return num.toString(36)
    })
    return list2.join(" ")
}

function numbersRandom36(quantity = 10) {
    const list = []
    for (let i = 0; i < quantity; i++) {
        const str = parseInt(Math.random() * fullListLength)
        list.push(str.toString(36))
    }
    return list.join(" ")
    //['96', '19q', 'x9', '10h', '6d', '147', '35', '131', 'v', '37']
}

function numbers36ToNames(numbers) {
    // numbers = '20 3e md 152 sj 1gm cw 9j jt 143'
    const numbers2 = numbers.split(' ').map(e => parseInt(e, 36))
    const names = numbers2.map(e => fullList[e])
    return names
}

function removeCard(position) {
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const card = cardsItem[position]
    // card.style.overflow = 
    card.style.translate = '0 -50px'
    // card.style.transform = 'linear'

    const square = card.getBoundingClientRect()
    card.left = square.left
    card.top = square.top
    card.style.opacity = 0
    card.style.height = 0
    // card.style.overflow = 'hidden'

    setTimeout(() => {
        card.remove()
    }, 300)
}

function decreaseSizeCardsIo(number) {
    decreaseSizeCards(number)
 
    // decreaseSizeCards(3)

    setTimeout(()=>{
        socket.emit('changedeck', JSON.stringify(Game.getInfo()))
    }, 400)
}

function decreaseSizeCards(number) {

    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    const l1 = unsort(numbersRandom36(number))
    const l2 = l1 + ' ' + l1
    const l3 = unsort(l2.split(' ')).join(' ')
    console.log(l3)    
    decreaseSizeCardsNames36(l3)
 
}

function decreaseSizeCardsNames36(numbers36) {
    // decreaseSizeCardsNames36('q r2 dx 5')
    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    for (let i = cardsItem.length - 1; i >= 0; i--) {
        removeCard(i)
    }
    setTimeout(() => {
        const names = numbers36ToNames(numbers36)
        addDeckNormal(names)
        showAll()
        // adjustColumns(numbers36.split(" ").length)
    }, 400)
}


// START

if (!window.location.href.includes('game')) {
    setTimeout(() => {
        addDeckRandom(8)
        console.log(board())
        createRoom()
    }, 300)
} else {
    const id = Game.id
    fetch('./status/' + id)
        .then(e => e.json())
        .then(e => {
            console.log('status')
            console.log(e)
            // addDeckNormal(numbers36ToNames(e.board))

            // decreaseSizeCardsNames36(e.board36)
            console.log(e.board36)
            decreaseSizeCardsNames36(e.board36)

            // console.log('e.binary')
            // console.log(e.binary)

            // cardsFliped(e.binary)
            console.log(e)

            // deck(numbers36ToNames(e.board36))

            // showAll2()
            // cardsFliped(e.binary)
            // adjustColumns(cards.childElementCount / 2)

            // showAllRevelate()
            // setTimeout(()=>{
            // }, 1000)
            // binary(e.binary)
            // numbers36ToNames(e.board)
        })
}



// adjustColumns(quantity_cards)


window.addEventListener('keyup', e => {
    if (e.key == "'") {
        hideAll()
    }
    if (e.key == 'a') {
        showAll()
    }
    if (e.key == 's') {
        hideAll()
    }
    if (e.key == '3') {
        addDeckRandom()
    }
    if (e.key == 'd') {
        // hideAll()
        // decreaseSizeCards()
        // addCard()
        // hideAll()

        // setTimeout(decreaseSizeCards, 20)
        setTimeout(hideAll, 10)
        // setTimeout(addCard, 1500)
        // setTimeout(decreaseSizeCards, 11)
        // setTimeout(decreaseSizeCards, 600)
        // setTimeout(adjustColumns, 600)

        // setTimeout(() => {
        // showAll()
        // }, 700)

        // setTimeout(adjustColumns, 300)

        // decreaseSizeCards()
        // decreaseSizeCards()
        // hideAll()


        // addCard()
        // unsort(fullList).slice(0, tamanho).forEach(createCard)
    }

    if (e.key == 'z') {
        addDeckRandom()
        // addDeckRandom()

    }

})



// window.onmousemove=e=>{
// const x = e.clientX
// const y = e.clientY
// cardsItem[0].children[0].style.transform = `translate(${x}deg)`
// console.log(cardsItem[13].children[0].style.transform = `rotateY(${x}deg)`)
// console.log(cardsItem[13].children[0].style.transform = `rotateX(${y}deg) rotateY(${x}deg)`)
// }
