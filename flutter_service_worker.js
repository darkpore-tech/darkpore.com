'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "12e0eee5418aa271aeb37fea1c1f107e",
".git/COMMIT_EDITMSG": "d2c9493958df4a002f2e4c399e1f5e4a",
".git/config": "9877d7a7ff4cbe1bfeac2ba2c2d8b588",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f148430c60ad8351e0e1ecc68146a13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b2269090fdf4a04198eb534ad9310138",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df9f60f97c7499937e7ac29c130c5c89",
".git/logs/refs/heads/main": "035d6d026da80deb671af6a9b016b754",
".git/logs/refs/remotes/origin/main": "1ea8a4b6067c1e3d4657d18a12364e45",
".git/MERGE_HEAD": "e661fafb5c61429bf9d2ce28be0665c1",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "c2507e2f81ecec9c68f76749dd42d94a",
".git/objects/00/9ad1d80a1d8add6a5944fba6d2b7a9b0767783": "87042e26b92a11ffde8794bc89b74e32",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/ca58f7559e33a136aee6e3b94727b0b6576012": "dab013a6ba3bb99bc88bbe3402c05c3d",
".git/objects/06/276e3ceed352cdb3816c394a22bc5e47e7ca73": "1111926952deb3644fa0a11366d01129",
".git/objects/08/0496c5e502b346a79144a3c1949a114fd8e774": "f306f7c2e1ef7b2688327f3b44dd2f66",
".git/objects/0b/f224a188bcb4c9bc34ee811f32836fdaa9fc65": "1b4eb69eb904e6c16c4c04b3052473c6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/384841eb6cd095ec2a6b0b7aa1877e5d032362": "dabecdec47fa53c943438e082d6dc2ac",
".git/objects/16/743fa6db3d1ce53f2f9b8098e3bb89f964d399": "27eab7bf479efa6103ee544d6f4cde33",
".git/objects/16/8a66d25f2af53cd2f34a9b15374a0e84c5df93": "5c80993736ac8b574daf941bd1041f81",
".git/objects/19/3407dc2553235ec7f19ae59a52b8551213e42b": "b72f4f9d10e4d3444056718e7e8c15ae",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/07d8e86e259a53e0228c8aa0217291471a0aab": "c75f7df5b383d0ecd0af05b5b3da0449",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/386da0218b9237c748347095a73921dc4f3faa": "8d66d0383c909aede18de4ba72b26657",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/2a/fb360f508d93f1b58c95c933e34b99072c01ea": "beee389595375b6c8f74b94a939567f2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/80e3977a6a89dd11aa74691fcdbbf24efb947b": "3bcfb960dd112ea507b970e132e137a5",
".git/objects/32/d52f430cb7dbadd98b7c46ff629ac34504cf6d": "cb54c65c54c3febb99638ec349b44765",
".git/objects/33/13a6cf36a447638e4939560900a00596cb8f30": "36ec508e58f271cd7469a520e7f6d36f",
".git/objects/34/43660d99c3689a3eb62313a5730ae28785f32b": "a1106cd1d00a6b0d2e7aeee289728515",
".git/objects/37/80b985b8e0a357a1d58ce5e34f793ec22a147c": "457d03469fff3ae16c9186948e81a70d",
".git/objects/3a/8a2f3bf2e5eabebb2177575913af3b3aba7dcc": "bb2caf1762ecfcc71c974f03ee315f84",
".git/objects/3b/2e744d67f9e1576569fc838d07a329bc790c83": "0c552600bf27385c94f098daccc4088d",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3d/72c9e5f76b5ff9a84935dc0cd98afb10422905": "42efdf9e4a8dc768d4e50ac5a6a26b91",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/e1d204be8244a033730f2a324cadd7e9f75ac8": "9ff1a0ccce496281a45cb4e8cbf54b68",
".git/objects/42/6a218004028d50b235fd67d8ef57733ebc908a": "2fc416ee835453328b9744fff819cf5f",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/6d4c892b43fdd24578982593c712243dbab722": "a2d99a9e3134a9b00c0da642388ca869",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/d9e78a792df991d38c011414fea12051cc3f71": "b73efd9d54a43c6f877788742988a384",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/10e8929272ca3c95be304e27950bcbd10af11f": "a7b276920c63312a8851974e948abff2",
".git/objects/69/7430597d7e57cd926af2ddfbef9c252f146a77": "a823a10c073f58296b3f652dc0db54e5",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/8c1fd2e3d4efe99d9219b588c5a849098086f0": "7bf4add066d58e43f877afec63e3d128",
".git/objects/6b/6880a31d222b8504e1245d6f4433b70dd711bf": "94ceb33b72a691762c9fe3a818e62212",
".git/objects/6d/e6f83fec2307156287599c84f0b7af31836dad": "40fd0ea37c636dcbf1ca60ad15639fef",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/a05ab276802e9be9fa02904360b94cb61f585b": "99035a4a26ba6bebbb3b76de206251c1",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/66633384f9e61c67d6245dfd99c02a1a4d9e34": "2fa303ffdebc9159ec8bfa104b5e2664",
".git/objects/7b/3b49801163e7f6169933775459f541e8992010": "0dfde457e3737252051885edee4a7e25",
".git/objects/7b/83cbe49c40c401e61009f235c14f4d56757cb6": "736918fb6b2a6e3bc18905838c04b1b0",
".git/objects/7b/e7555c460d1747b347df5d87cc50a0f6bf7132": "2c87f6c25303c2210c4a4f166f7c61fb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ee0d51b6bdf7f7c56b82e54d674da8a3522942": "95e63b6ec02e31ea062b76de9d381267",
".git/objects/82/b3f03eaece0d99a66abd715f8d619b7841231e": "1c1c43f6e0483c4cfe44a4b1c508ff6e",
".git/objects/85/caf341605e6757658ee7a69bdc9374eb1964fe": "62b7bcf077baef3eadcdf9f74d5a8744",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2a64f2d0f293997570164fd87e6fd4c048210c": "327a266c5e0674f42639bc67ce0e879d",
".git/objects/89/4a887550455016ee9f718c35c77d509983207e": "804e699f42bc210f7df30b950955eccc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/91/f0ee3ef7f0796a19fc4e98e49c96cdf837eaa9": "c921d92c78da45d76695bdaeb7965d82",
".git/objects/92/c32030caa58553538828d2c078dcb275321a21": "4ce7d1c7414ce8ced44ad4605f7f3e40",
".git/objects/95/d8f4e05b7fa8ddaa88dc210978128db27a1223": "b05287984d4306fae07024613b779df2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/bedea2d773c0cbbd679d2d1440db3c8021b3df": "305b61ca037ddbd9f04f243bcae17067",
".git/objects/9d/a271c69bfc3813ebb01216938d86be0d2385b9": "90ffb8b7a71c235d21a500405f635b69",
".git/objects/a0/07e016b56f0b97c012c20076fabef1263e74c8": "dc9c4c00496b2f521cdd09e0ad8d370e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/d14ebc52b6dae8ba104b19a29877e3f979ab45": "bdd1bc9743b3d3d7d78df3af29c239d7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/7feba383c603546823e9ff763d91934b5eff9e": "60c15cf1fed6e436905429210ba36a04",
".git/objects/ae/a7dde9540c779901ccb95ad0ba1a188d1f3904": "35fe6b93ab1f12df5e8cb472f51105c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/194ca24796d73e16fb19e0dcfac41e66ef2a86": "54013157ba2ece6479a41ae660d50ef4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/1047174511fccff87c9f4162b0fa1b971b5bd5": "3a12787cbb36d1214cd95048d65cc78e",
".git/objects/c6/f8a0a857f3fb41e731368153d5406432f914ad": "170716b3005dbc7b05ecade25c4f1d16",
".git/objects/ca/743c9f01d6d835ac46f11a919898d03f0ee073": "5771a80c0992e1f146f8c8b70316c538",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/893f90fe32c6b961cc21261bcdd079a02031b9": "d28562a962c28e6d4892868c4a5b6d7d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d3/49e0cdb0139fc61728536ab5afc5a765b2febc": "76b838037d6ff23fbf56ce3750f59610",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/fc6f32d6ae4b805bbe3a1342441d8b7bd1f815": "e47a5286279bb9f91321e423941d7a14",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/d615687c06d26ec4f9600eed280fc2f6dc6474": "f594cd176ecf4b8c4e5c79972f78c31d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/f5b261e6968655a420486e95d95685f1f964d7": "88fa0c1618e0da32fdbb52a2c496990d",
".git/objects/e4/dbd838469314780066b81708c7493ad320b633": "c766f47a99a1754e38a3903e27bb67db",
".git/objects/e4/fe24939c704fdbc66d56eda0ddd9b3f6b00a1d": "51aef704aa8e80f38eeac7a89eb8cc17",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/75fc0e0320fdb1858adb2c6ef8ad47ca266970": "f5d9ead312ef3550619b03f8d543009f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/df511d6cc5c65f65cbdc113abdae5b88debcca": "bf921460500dce51b14fd66d940fb15b",
".git/objects/f0/4a57233bbf3a2f470348a736509e0ecfe04cea": "edaa354ba05e9b26e75e2ddbd8f28219",
".git/objects/f1/f09f74abb542474580abe2eec2f1ed9093f65c": "2a5871b9b799927a61696c259aad6f5a",
".git/objects/f9/8bdd8ec0b24142441174e4965e1f346c46ebef": "393dfe36223d012a6190087fce2a5f5c",
".git/objects/fb/83ca2a1af90f0f4d886b89082571636d2f5735": "44a96edf6dd2feeee9bc5daaef98c938",
".git/ORIG_HEAD": "4ea38bd626f73be687a6d356f3d90c4a",
".git/refs/heads/main": "4ea38bd626f73be687a6d356f3d90c4a",
".git/refs/remotes/origin/main": "e661fafb5c61429bf9d2ce28be0665c1",
"assets/AssetManifest.json": "233cfffd316fc1f832530851e06f7f1b",
"assets/assets/apple.png": "2a57bfd60c21d9933150f19aff387e79",
"assets/assets/darkpore.png": "8f33398725d48caa29849528e441c7cd",
"assets/assets/food.png": "24df31b69df11246240479eac60c1f17",
"assets/assets/hope.jpg": "c6d7c1136f7de04b72535dfc2744ebf0",
"assets/assets/house.jpg": "b3ef41a9d79cd696b89edf20ed68c223",
"assets/assets/house1.jpg": "54ccb059572e9eed193c23514b4d5377",
"assets/assets/man.png": "3ee1d4af3abfb66d79ca61455f2f1c9d",
"assets/assets/mansuit.png": "795f5f6c425e5bc44107c44d7dafa4e4",
"assets/assets/plate.png": "3de1573436db765c3573a87b76f7d7ed",
"assets/assets/podcast.jpg": "24df31b69df11246240479eac60c1f17",
"assets/assets/tesla4.jpg": "54ccb059572e9eed193c23514b4d5377",
"assets/assets/tesla5.jpg": "d6064e54e304907a12eb42acddc34b90",
"assets/assets/tesla6.jpg": "8f33398725d48caa29849528e441c7cd",
"assets/assets/tesla7.jpg": "b3ef41a9d79cd696b89edf20ed68c223",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9abad77d39907f60e506db3c5110269e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "271b3cf088f6bd190f6eadecef17d691",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "5377d16db4b183c714830336d30b278c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae4332176e9c1c568c1c75e6581abb08",
"/": "ae4332176e9c1c568c1c75e6581abb08",
"main.dart.js": "fd9ac8e1facb5245526a329960db0099",
"manifest.json": "7e7b34343b57b6b28497909b985a7327",
"version.json": "4f5f03294ad601c373a37e7510719c5d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
