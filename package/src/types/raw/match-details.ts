import { Region } from "../general";

interface PartyRRPenalties {
    [key: string]: number;
}

interface MatchInfo {
    matchId: string;
    mapId: string;
    gamePodId: string;
    gameLoopZone: string;
    gameServerAddress: string;
    gameVersion: string;
    gameLengthMillis: number;
    gameStartMillis: number;
    provisioningFlowID: string;
    isCompleted: boolean;
    customGameName: string;
    forcePostProcessing: boolean;
    queueID: string;
    gameMode: string;
    isRanked: boolean;
    isMatchSampled: boolean;
    seasonId: string;
    completionState: string;
    platformType: string;
    partyRRPenalties: PartyRRPenalties;
    shouldMatchDisablePenalties: boolean;
}

interface PlatformInfo {
    platformType: string;
    platformOS: string;
    platformOSVersion: string;
    platformChipset: string;
}

interface AbilityCasts {
    grenadeCasts: number;
    ability1Casts: number;
    ability2Casts: number;
    ultimateCasts: number;
}

interface Stats {
    score: number;
    roundsPlayed: number;
    kills: number;
    deaths: number;
    assists: number;
    playtimeMillis: number;
    abilityCasts: AbilityCasts;
}

interface RoundDamage {
    round: number;
    receiver: string;
    damage: number;
}

interface XpModification {
    Value: number;
    ID: string;
}

interface BehaviorFactors {
    afkRounds: number;
    collisions: number;
    damageParticipationOutgoing: number;
    friendlyFireIncoming: number;
    friendlyFireOutgoing: number;
    mouseMovement: number;
    stayedInSpawnRounds: number;
}

interface BaseAction {
    idleTimeMillis: number;
    objectiveCompleteTimeMillis: number;
}

interface AdaptiveBots extends BaseAction {
    adaptiveBotAverageDurationMillisAllAttempts: number;
    adaptiveBotAverageDurationMillisFirstAttempt: number;
    killDetailsFirstAttempt?: any;
}

interface DefendBombSite extends BaseAction {
    success: boolean;
}

interface SettingStatus {
    isMouseSensitivityDefault: boolean;
    isCrosshairDefault: boolean;
}

interface NewPlayerExperienceDetails {
    basicMovement: BaseAction;
    basicGunSkill: BaseAction;
    adaptiveBots: AdaptiveBots;
    ability: BaseAction;
    bombPlant: BaseAction;
    defendBombSite: DefendBombSite;
    settingStatus: SettingStatus;
}

interface Player {
    subject: string;
    gameName: string;
    tagLine: string;
    platformInfo: PlatformInfo;
    teamId: string;
    partyId: string;
    characterId: string;
    stats: Stats;
    roundDamage: RoundDamage[];
    competitiveTier: number;
    playerCard: string;
    playerTitle: string;
    preferredLevelBorder: string;
    accountLevel: number;
    sessionPlaytimeMinutes: number;
    xpModifications: XpModification[];
    behaviorFactors: BehaviorFactors;
    newPlayerExperienceDetails: NewPlayerExperienceDetails;
}

interface Team {
    teamId: string;
    won: boolean;
    roundsPlayed: number;
    roundsWon: number;
    numPoints: number;
}

interface Location {
    x: number;
    y: number;
}

interface PlantPlayerLocation {
    subject: string;
    viewRadians: number;
    location: Location;
}

interface DefusePlayerLocation {
    subject: string;
    viewRadians: number;
    location: Location;
}

interface PlayerLocation {
    subject: string;
    viewRadians: number;
    location: Location;
}

interface FinishingDamage {
    damageType: string;
    damageItem: string;
    isSecondaryFireMode: boolean;
}

interface Kill {
    gameTime: number;
    roundTime: number;
    killer: string;
    victim: string;
    victimLocation: Location;
    assistants: string[];
    playerLocations: PlayerLocation[];
    finishingDamage: FinishingDamage;
}

interface MatchKill extends Kill {
    round: number;
}

interface Damage {
    receiver: string;
    damage: number;
    legshots: number;
    bodyshots: number;
    headshots: number;
}

interface Economy {
    loadoutValue: number;
    weapon: string;
    armor: string;
    remaining: number;
    spent: number;
}

interface AbilityEffects {
    grenadeEffects?: any;
    ability1Effects?: any;
    ability2Effects?: any;
    ultimateEffects?: any;
}

interface PlayerStat {
    subject: string;
    kills: Kill[];
    damage: Damage[];
    score: number;
    economy: Economy;
    ability: AbilityEffects;
    wasAfk: boolean;
    wasPenalized: boolean;
    stayedInSpawn: boolean;
}

interface PlayerEconomy {
    subject: string;
    loadoutValue: number;
    weapon: string;
    armor: string;
    remaining: number;
    spent: number;
}

interface PlayerScore {
    subject: string;
    score: number;
}

interface RoundResult {
    roundNum: number;
    roundResult: string;
    roundCeremony: string;
    winningTeam: string;
    plantRoundTime: number;
    plantPlayerLocations: PlantPlayerLocation[];
    plantLocation: Location;
    plantSite: string;
    defuseRoundTime: number;
    defusePlayerLocations: DefusePlayerLocation[];
    defuseLocation: Location;
    playerStats: PlayerStat[];
    roundResultCode: string;
    playerEconomies: PlayerEconomy[];
    playerScores: PlayerScore[];
    bombPlanter: string;
    bombDefuser: string;
}

export interface RawMatchDetailsResponse {
    matchInfo: MatchInfo;
    players: Player[];
    bots: any[];
    coaches: any[];
    teams: Team[];
    roundResults: RoundResult[];
    kills: MatchKill[];
    region: Region;
}
