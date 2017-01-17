import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Cell from './../Cell/App.js';
import HeroStats from './../HeroStats/App.js';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCount: 3750,
      mapWidth: 75,
      cells: [],
      darkness: true,
      message: '',
      hero: {
        'level': 1,
        'xp': 0,
        'hp': 10,
        'weapon': 0,
        'location': 380
      }
    };
  }

  // SETUP MAP
  componentDidMount() {
    var counter = 0;
    var cells = [];
    var current = {};
    while (counter < this.state.cellCount) {
      current = {
        'id': counter,
        'wall': false,
        'monster': false,
        'monsterType': 1,
        'potion': false,
        'weapon': false,
        'hero': false,
        'hidden': false
      }
      var wallCells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,233,234,235,253,254,255,267,268,269,279,280,281,297,298,299,300,301,302,308,309,310,328,329,330,342,343,344,354,355,356,372,373,374,375,376,377,383,384,385,403,404,405,417,418,419,429,430,431,447,448,449,450,451,452,464,465,466,478,479,480,492,493,494,498,499,500,504,505,506,522,523,524,525,526,527,539,540,541,553,554,555,567,568,569,573,574,575,579,580,581,585,586,587,597,598,599,600,601,602,614,615,616,628,629,630,642,643,644,648,649,650,654,655,656,660,661,662,672,673,674,675,676,677,683,684,685,689,690,691,703,704,705,717,718,719,723,724,725,735,736,737,747,748,749,750,751,752,758,759,760,764,765,766,778,779,780,792,793,794,798,799,800,810,811,812,822,823,824,825,826,827,833,834,835,839,840,841,853,854,855,867,868,869,873,874,875,885,886,887,888,889,890,891,892,897,898,899,900,901,902,903,904,905,906,907,908,909,910,914,915,916,928,929,930,942,943,944,948,949,950,960,961,962,963,964,965,966,967,972,973,974,975,976,977,978,979,980,981,982,983,984,985,989,990,991,1003,1004,1005,1017,1018,1019,1023,1024,1025,1035,1036,1037,1038,1039,1040,1041,1042,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1064,1065,1066,1078,1079,1080,1098,1099,1100,1110,1111,1112,1122,1123,1124,1125,1126,1127,1139,1140,1141,1153,1154,1155,1173,1174,1175,1185,1186,1187,1197,1198,1199,1200,1201,1202,1214,1215,1216,1228,1229,1230,1248,1249,1250,1260,1261,1262,1272,1273,1274,1275,1276,1277,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1347,1348,1349,1350,1351,1352,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1422,1423,1424,1425,1426,1427,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1497,1498,1499,1500,1501,1502,1514,1515,1516,1539,1540,1541,1572,1573,1574,1575,1576,1577,1589,1590,1591,1614,1615,1616,1647,1648,1649,1650,1651,1652,1664,1665,1666,1689,1690,1691,1722,1723,1724,1725,1726,1727,1739,1740,1741,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1764,1765,1766,1770,1771,1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1797,1798,1799,1800,1801,1802,1814,1815,1816,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1839,1840,1841,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859,1860,1861,1862,1872,1873,1874,1875,1876,1877,1889,1890,1891,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1914,1915,1916,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1947,1948,1949,1950,1951,1952,1970,1971,1972,1983,1984,1985,1989,1990,1991,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2045,2046,2047,2058,2059,2060,2064,2065,2066,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2120,2121,2122,2133,2134,2135,2139,2140,2141,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190,2191,2195,2196,2197,2208,2209,2210,2214,2215,2216,2220,2221,2222,2223,2224,2225,2226,2227,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,2266,2270,2271,2272,2283,2284,2285,2289,2290,2291,2295,2296,2297,2298,2299,2300,2301,2302,2310,2311,2312,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2345,2346,2347,2358,2359,2360,2364,2365,2366,2370,2371,2372,2373,2374,2375,2376,2377,2385,2386,2387,2397,2398,2399,2400,2401,2402,2414,2415,2416,2420,2421,2422,2439,2440,2441,2445,2446,2447,2460,2461,2462,2472,2473,2474,2475,2476,2477,2489,2490,2491,2495,2496,2497,2514,2515,2516,2520,2521,2522,2535,2536,2537,2547,2548,2549,2550,2551,2552,2564,2565,2566,2570,2571,2572,2589,2590,2591,2595,2596,2597,2610,2611,2612,2622,2623,2624,2625,2626,2627,2639,2640,2641,2645,2646,2647,2658,2659,2660,2664,2665,2666,2670,2671,2672,2685,2686,2687,2697,2698,2699,2700,2701,2702,2714,2715,2716,2720,2721,2722,2733,2734,2735,2739,2740,2741,2745,2746,2747,2760,2761,2762,2772,2773,2774,2775,2776,2777,2789,2790,2791,2795,2796,2797,2808,2809,2810,2814,2815,2816,2820,2821,2822,2835,2836,2837,2847,2848,2849,2850,2851,2852,2870,2871,2872,2883,2884,2885,2889,2890,2891,2895,2896,2897,2910,2911,2912,2922,2923,2924,2925,2926,2927,2945,2946,2947,2958,2959,2960,2964,2965,2966,2970,2971,2972,2985,2986,2987,2997,2998,2999,3000,3001,3002,3020,3021,3022,3033,3034,3035,3039,3040,3041,3045,3046,3047,3060,3061,3062,3072,3073,3074,3075,3076,3077,3089,3090,3091,3095,3096,3097,3098,3102,3103,3104,3105,3106,3107,3108,3109,3110,3114,3115,3116,3120,3121,3122,3135,3136,3137,3147,3148,3149,3150,3151,3152,3164,3165,3166,3170,3171,3172,3173,3177,3178,3179,3180,3181,3182,3183,3184,3185,3189,3190,3191,3195,3196,3197,3210,3211,3212,3222,3223,3224,3225,3226,3227,3239,3240,3241,3245,3246,3247,3248,3252,3253,3254,3255,3256,3257,3258,3259,3260,3264,3265,3266,3270,3271,3272,3285,3286,3287,3297,3298,3299,3300,3301,3302,3314,3315,3316,3345,3346,3347,3372,3373,3374,3375,3376,3377,3389,3390,3391,3420,3421,3422,3447,3448,3449,3450,3451,3452,3464,3465,3466,3495,3496,3497,3522,3523,3524,3525,3526,3527,3528,3529,3530,3531,3532,3533,3534,3535,3536,3537,3538,3539,3540,3541,3542,3543,3544,3545,3546,3547,3548,3549,3550,3551,3552,3553,3554,3555,3556,3557,3558,3559,3560,3561,3562,3563,3564,3565,3566,3567,3568,3569,3570,3571,3572,3573,3574,3575,3576,3577,3578,3579,3580,3581,3582,3583,3584,3585,3586,3587,3588,3589,3590,3591,3592,3593,3594,3595,3596,3597,3598,3599,3600,3601,3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3612,3613,3614,3615,3616,3617,3618,3619,3620,3621,3622,3623,3624,3625,3626,3627,3628,3629,3630,3631,3632,3633,3634,3635,3636,3637,3638,3639,3640,3641,3642,3643,3644,3645,3646,3647,3648,3649,3650,3651,3652,3653,3654,3655,3656,3657,3658,3659,3660,3661,3662,3663,3664,3665,3666,3667,3668,3669,3670,3671,3672,3673,3674,3675,3676,3677,3678,3679,3680,3681,3682,3683,3684,3685,3686,3687,3688,3689,3690,3691,3692,3693,3694,3695,3696,3697,3698,3699,3700,3701,3702,3703,3704,3705,3706,3707,3708,3709,3710,3711,3712,3713,3714,3715,3716,3717,3718,3719,3720,3721,3722,3723,3724,3725,3726,3727,3728,3729,3730,3731,3732,3733,3734,3735,3736,3737,3738,3739,3740,3741,3742,3743,3744,3745,3746,3747,3748,3749];
      var hero = this.state.hero.location;
      // if (counter <= 227 ||
      //     counter >= 3522 ||
      //     (counter - 2) % 75 === 0 ||
      //     (counter - 1) % 75 === 0 ||
      //     (counter) % 75 === 0 ||
      //     (counter + 1) % 75 === 0 ||
      //     (counter + 2) % 75 === 0 ||
      //     (counter + 3) % 75 === 0) {
      if (wallCells.indexOf(counter) >= 0) {
        current.wall = true;
      } else if (counter === hero) {
        current.hero = true;
      } else if (Math.random() > 0.95) {
        current.monster = true;
        var rand = Math.random();
        if (rand < 0.25) {
          current.monsterType = 1;
        } else if (rand < 0.5) {
          current.monsterType = 2;
        } else if (rand < 0.75) {
          current.monsterType = 3;
        } else {
          current.monsterType = 4;
        }
      } else if (Math.random() > 0.98) {
        current.potion = true;
      } else if (Math.random() > 0.99) {
        current.weapon = true;
      }
      if (counter === hero ||
          counter === hero + 1 ||
          counter === hero + 2 ||
          counter === hero + 3 ||
          counter === hero - 1 ||
          counter === hero - 2 ||
          counter === hero - 3 ||
          counter === hero + 72 ||
          counter === hero + 73 ||
          counter === hero + 74 ||
          counter === hero + 75 ||
          counter === hero + 76 ||
          counter === hero + 77 ||
          counter === hero + 78 ||
          counter === hero + 148 ||
          counter === hero + 149 ||
          counter === hero + 150 ||
          counter === hero + 151 ||
          counter === hero + 152 ||
          counter === hero + 224 ||
          counter === hero + 225 ||
          counter === hero + 226 ||
          counter === hero - 72 ||
          counter === hero - 73 ||
          counter === hero - 74 ||
          counter === hero - 75 ||
          counter === hero - 76 ||
          counter === hero - 77 ||
          counter === hero - 78 ||
          counter === hero - 148 ||
          counter === hero - 149 ||
          counter === hero - 150 ||
          counter === hero - 151 ||
          counter === hero - 152 ||
          counter === hero - 224 ||
          counter === hero - 225 ||
          counter === hero - 226) {
        current.hidden = false;
      } else if (this.state.darkness) {
        current.hidden = true;
      }
      cells.push(current);
      counter++;
    }
    this.setState({cells: cells});

    // var _this = this;
    // var gameLoop = setInterval(() => {
    //   _this.moveMonsters();
    // }, 2000);
    // this.setState({gameLoop: gameLoop});
  }

  // LISTEN FOR KEY EVENTS
  handleKeyDown(e) {
    var hero = this.state.hero;
    var oldCell = hero.location;
    var newCell;
    if (e.keyCode === 38) { // UP
      newCell = oldCell - 75;
      this.moveHero(oldCell, newCell, 'up');
    } else if (e.keyCode === 40) { // DOWN
      newCell = oldCell + 75;
      this.moveHero(oldCell, newCell, 'down');
    } else if (e.keyCode === 39) { // RIGHT
      newCell = oldCell + 1;
      this.moveHero(oldCell, newCell, 'right');
    } else if (e.keyCode === 37) { // LEFT
      newCell = oldCell - 1;
      this.moveHero(oldCell, newCell, 'left');
    }
  }

  // HANDLE MOVEMENT
  moveHero(oldCell, newCell, direction) {
    this.setState({message: ''});
    var allCells = this.state.cells;
    if (allCells[newCell].wall === false) {
      allCells[oldCell].hero = false;
      allCells[newCell].hero = true;

      if (allCells[newCell].monster) {
        this.fight(newCell);
      }

      if (allCells[newCell].potion) {
        this.getHealth(newCell);
      }

      if (allCells[newCell].weapon) {
        this.getWeapon(newCell);
      }

      if (this.state.darkness) {
        allCells.forEach((cell) => {
          if (cell.id === newCell ||
            cell.id === newCell - 3 ||
            cell.id === newCell - 2 ||
            cell.id === newCell - 1 ||
            cell.id === newCell + 1 ||
            cell.id === newCell + 2 ||
            cell.id === newCell + 3 ||
            cell.id === newCell - 78 ||
            cell.id === newCell - 77 ||
            cell.id === newCell - 76 ||
            cell.id === newCell - 75 ||
            cell.id === newCell - 74 ||
            cell.id === newCell - 73 ||
            cell.id === newCell - 72 ||
            cell.id === newCell + 72 ||
            cell.id === newCell + 73 ||
            cell.id === newCell + 74 ||
            cell.id === newCell + 75 ||
            cell.id === newCell + 76 ||
            cell.id === newCell + 77 ||
            cell.id === newCell + 78 ||
            cell.id === newCell - 152 ||
            cell.id === newCell - 151 ||
            cell.id === newCell - 150 ||
            cell.id === newCell - 149 ||
            cell.id === newCell - 148 ||
            cell.id === newCell + 148 ||
            cell.id === newCell + 149 ||
            cell.id === newCell + 150 ||
            cell.id === newCell + 151 ||
            cell.id === newCell + 152 ||
            cell.id === newCell - 226 ||
            cell.id === newCell - 225 ||
            cell.id === newCell - 224 ||
            cell.id === newCell + 224 ||
            cell.id === newCell + 225 ||
            cell.id === newCell + 226) {
            cell.hidden = false;
          } else {
            cell.hidden = true;
          }
        });
      }
      var xPos, yPos;
      var element = ReactDOM.findDOMNode(this.refs.map);
      if (direction === 'up') {
        yPos = window.getComputedStyle(element).getPropertyValue("top");
        yPos = yPos.replace('px', '');
        yPos = parseInt(yPos, 10) + 20;
        element.style.top = yPos + 'px';
      } else if (direction === 'down') {
        yPos = window.getComputedStyle(element).getPropertyValue("top");
        yPos = yPos.replace('px', '');
        yPos = parseInt(yPos, 10) - 20;
        element.style.top = yPos + 'px';
      } else if (direction === 'right') {
        xPos = window.getComputedStyle(element).getPropertyValue("left");
        xPos = xPos.replace('px', '');
        xPos = parseInt(xPos, 10) - 20;
        element.style.left = xPos + 'px';
      } else if (direction === 'left') {
        xPos = window.getComputedStyle(element).getPropertyValue("left");
        xPos = xPos.replace('px', '');
        xPos = parseInt(xPos, 10) + 20;
        element.style.left = xPos + 'px';
      }

      var hero = this.state.hero;
      hero.location = newCell;
      this.setState({hero: hero});
      this.setState({cells: allCells});
    }
  }

  // HANDLE COMBAT
  fight(location) {
    var hero = this.state.hero;
    var damage = 1;
    hero.hp -= damage;
    hero.xp += 10;
    if (hero.xp >= 100) {
      this.levelUp();
      this.setState({message: 'Congratulations! You defeated the beast and leveled up!'});
    } else {
      this.setState({message: 'You defeated the beast!'});
    }
    var allCells = this.state.cells;
    allCells[location].monster = false;

    this.setState({hero: hero});
    this.setState({cells: allCells});
  }

  // HANDLE HEALTH SPOTS
  getHealth(location) {
    var hero = this.state.hero;
    if (hero.hp < 5) {
      hero.hp += 5;
    } else {
      hero.hp = 10;
    }
    var allCells = this.state.cells;
    allCells[location].potion = false;
    this.setState({hero: hero});
    this.setState({cells: allCells});
    this.setState({message: 'You feel revitalized as you drink the healing potion!'});
  }

  // HANDLE WEAPON UPGRADES
  getWeapon(location) {
    var hero = this.state.hero;
    hero.weapon ++;
    var allCells = this.state.cells;
    allCells[location].weapon = false;
    this.setState({hero: hero});
    this.setState({cells: allCells});
    this.setState({message: 'You feel stronger as you upgrade your weapon!'});
  }

  // HANDLE LEVELING UP
  levelUp() {
    var hero = this.state.hero;
    hero.level ++;
    hero.xp = 0;
    this.setState({hero: hero});
  }

  playGame(event) {
    event.stopPropagation();
    var _this = this;
    var gameLoop = setInterval(() => {
      _this.moveMonsters();
    }, 2000);
    this.setState({gameLoop: gameLoop});
  }

  pauseGame(event) {
    event.stopPropagation();
    var gameLoop = this.state.gameLoop;
    clearInterval(gameLoop);
  }

  toggleOverlay(event) {
    event.stopPropagation();
    var allCells = this.state.cells;
    var newValue = !this.state.darkness;
    allCells.forEach((cell) => {
      cell.hidden = newValue;
    });
    this.setState({cells: allCells});
    this.setState({darkness: newValue});
  }

  // HANDLE MONSTER MOVEMENT
  moveMonsters() {
    var allCells = this.state.cells;
    var newCells = this.state.cells;
    allCells.forEach((cell) => {
      if (cell.monster) {
        var oldLocation = cell.id;
        var newLocation;
        var rand = Math.floor(Math.random()*5);
        if (rand === 0) { //UP
          newLocation = oldLocation - 75;
        } else if (rand === 1) { //DOWN
          newLocation = oldLocation + 75;
        } else if (rand === 2) { //RIGHT
          newLocation = oldLocation + 1;
        } else if (rand === 3) { //LEFT
          newLocation = oldLocation - 1;
        }
        if (oldLocation >= 0 && newLocation >= 0 && oldLocation <= 3749 && oldLocation <= 3749) {
          newCells[oldLocation].monster = false;
          newCells[newLocation].monster = true;
        }
      }
    });
    this.setState({cells: newCells});
  }

  showHistory(event) {
    event.stopPropagation();
    this.refs.titleScreen.style.opacity = 0;
    var _this = this;
    setTimeout(() => {
      _this.refs.history.style.top = '-2050px';
    }, 1000);
    setTimeout(() => {
      _this.refs.screen.style.opacity = 0;
    }, 22000);
    setTimeout(() => {
      _this.refs.screen.style.display = 'none';
    }, 24000);
  }

  // showGame(event) {
  //   event.stopPropagation();
  //   this.refs.screen.style.opacity = 0;
  //   var _this = this;
  //   setTimeout(() => {
  //     _this.refs.screen.style.display = 'none';
  //   }, 2000);
  // }

  skipIntro(event) {
    event.stopPropagation();
    this.refs.screen.style.opacity = 0;
    var _this = this;
    setTimeout(() => {
      _this.refs.screen.style.display = 'none';
    }, 2000);
  }

  render() {
    return (
      <div>
        <div id='window' tabIndex='0' onKeyDown={this.handleKeyDown.bind(this)}>
          <div ref={'map'} id='map'>
            {this.state.cells.map((thisCell, index) => {
              return (
                <Cell
                  key={index}
                  id={index}
                  cell={thisCell}
                  cells={this.state.cells}
                />
              );
            }, this)}
          </div>
          <HeroStats
            hero={this.state.hero}
            message={this.state.message}
          />
          <div ref={'screen'} id='screen'>
            <div ref={'titleScreen'} id='titleScreen'>
              <h1>Witch of the Woods</h1>
              <h3>Will you make it out alive?</h3>
              <div className='startBtn' onClick={this.showHistory.bind(this)}>
                PLAY
              </div>
              <div className='startBtn' onClick={this.skipIntro.bind(this)}>
                <span className='small'>[skip intro]</span>
              </div>
            </div>
            <div ref={'history'} id='history'>
              <p>You awaken to find yourself lost in the dark, misty Wyrd Wood. The thick brush and darkness prevent you from seeing more than a few feet in any direction. You recall the Evil Enchantress, who you thought to be only a myth, attacking your village with the woodland creatures she bewitched. You stand and begin searching for the way home, hoping you do not encounter the Enchantress along the way...</p>
              {/*<div className='startBtn' onClick={this.showGame.bind(this)}>
                BEGIN YOUR ADVENTURE
              </div>*/}
            </div>
          </div>
        </div>
        {/*}<div className='btn' id='playBtn' onClick={this.playGame.bind(this)}>PLAY</div>
        <div className='btn' id='pauseBtn' onClick={this.pauseGame.bind(this)}>PAUSE</div>
        <div className='btn' id='toggleOverlayBtn' onClick={this.toggleOverlay.bind(this)}>TOGGLE DARKNESS</div>*/}
      </div>
    );
  }
}
