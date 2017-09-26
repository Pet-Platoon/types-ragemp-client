/// <reference path="../index.d.ts" />

declare interface MpBlip extends MpEntity {
    setColour(blip: MpBlip, color: number): void;
    setNameToPlayerName(blip: MpBlip, player: MpPlayer): void;
    setShowCone(blip: MpBlip, toggle: boolean): void;
    setSecondaryColour(blip: MpBlip, r: number, g: number, b: number): void;
    getNextInfoId(blip: MpBlip): MpBlip;
    getFirstInfoId(blip: MpBlip): MpBlip;
    getInfoIdDisplay(blip: MpBlip): number;
    getSprite(blip: MpBlip): number;
    setCategory(blip: MpBlip, index: MpBlipCategory | number): void;
    setAsMissionCreator(blip: MpBlip, toggle: boolean): void;
    isMissionCreator(blip: MpBlip): boolean;
    setFade(blip: MpBlip, opacity: number, duration: number): void;
    setFlashesAlternate(blip: MpBlip, toggle: boolean): void;
    setAlpha(blip: MpBlip, alpha: number): void;
    getInfoIdEntityIndex(blip: MpBlip): MpEntity | object;
    setRoute(blip: MpBlip, enabled: boolean): void;
    hideNumberOn(blip: MpBlip): void;
    getCoords(blip: MpBlip): MpVector3;
    setShowHeadingIndicator(blip: MpBlip, toggle: boolean): void;
    setAsFriendly(blip: MpBlip, toggle: boolean): void;
    getHudColour(blip: MpBlip): number;
    pulse(blip: MpBlip): void;
    addTextComponentSubstringName(blip: MpBlip): void;
    setRouteColour(blip: MpBlip, colour: number): void;
    setDisplay(blip: MpBlip, displayId: number): void;
    getAlpha(blip: MpBlip): number;
    getInfoIdPickupIndex(blip: MpBlip): MpPickup;
    showNumberOn(blip: MpBlip, number: number): void;
    isFlashing(blip: MpBlip): boolean;
    doesExist(blip: MpBlip): boolean;
    setFlashInterval(blip: MpBlip, p1: object): void;
    setCoords(blip: MpBlip, posX: number, posY: number, posZ: number): void;
    setPriority(blip: MpBlip, priority: number): void;
    setFlashes(blip: MpBlip, toggle: boolean): void;
    setBright(blip: MpBlip, toggle: boolean): void;
    endTextCommandSetName(blip: MpBlip): void;
    setAsShortRange(blip: MpBlip, toggle: boolean): void;
    getInfoIdType(blip: MpBlip): number;
    setScale(blip: MpBlip, scale: number): void;
    setFlashTimer(blip: MpBlip, duration: number): void;
    isShortRange(blip: MpBlip): boolean;
    getColour(blip: MpBlip): number;
    setSprite(blip: MpBlip, spriteId: number): void;
    setHighDetail(blip: MpBlip, toggle: boolean): void;
    isOnMinimap(blip: MpBlip): boolean;
    setNameFromTextFile(blip: MpBlip, gxtEntry: string): void;
    setRotation(blip: MpBlip, rotation: number): void;
}

declare interface MpBlipPool extends MpPool<MpBlip> {

}

declare enum MpBlipCategory {
    noTextOrDistance = 1,
    text = 2,
    noDistance = 3
}
