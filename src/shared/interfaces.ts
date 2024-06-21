export interface ImgName {
    name: string,
    img: string
}
// Interfaces del router
interface History {
    length: number;
    action: 'POP' | 'PUSH' | 'REPLACE'; // Si hay otros posibles valores para 'action', agrégalos aquí
    location: Location;
}

interface Location {
    pathname: string;
    search: string;
    hash: string;
}

interface Match {
    path: string;
    url: string;
    params: Record<string, string>;
    isExact: boolean;
}

export interface Routing {
    history: History;
    location: Location;
    match: Match;
}
// Interfaces de champs
interface ChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfo;
    image: ChampionImage;
    tags: string[];
    partype: string;
    stats: ChampionStats;
}

//Interfaz para items
interface ItemImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface ItemGold {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}

interface ItemMaps {
    [mapId: string]: boolean;
}

interface ItemStats {
    FlatMovementSpeedMod: number;
}

export interface Item {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: ItemImage;
    gold: ItemGold;
    tags: string[];
    maps: ItemMaps;
    stats: ItemStats;
}

//Interfaz para infouser

export interface SummonerInfo {
    summonerInfo: {
      id: string;
      accountId: string;
      puuid: string;
      profileIconId: number;
      revisionDate: number;
      summonerLevel: number;
    };
    summonerIdentity: {
      puuid: string;
      gameName: string;
      tagLine: string;
    };
    rankInfo: {
      leagueId: string;
      queueType: string;
      tier: string;
      rank: string;
      summonerId: string;
      leaguePoints: number;
      wins: number;
      losses: number;
      veteran: boolean;
      inactive: boolean;
      freshBlood: boolean;
      hotStreak: boolean;
    }[];
  }