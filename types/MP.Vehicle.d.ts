/// <reference path="../index.d.ts" />

declare interface MpVehicle extends MpEntity {
    gear: number;
    steeringAngle: number;
    rpm: number;

    removeHighDetailModel(): void;
    setCreatesMoneyPickupsWhenExploded(toggle: boolean): void;
    steerUnlockBias(toggle: boolean): void;
    getTrainCarriage(cariage: number): MpEntity | object;
    setRudderBroken(p0: boolean): void;
    detachFromCargobob(cargobob: MpVehicle | object): void;
    getWindowTint(): MpVehicleWindowTint | number;
    setFixed(): void;
    areAllWindowsIntact(): boolean;
    doesExtraExist(extraId: number): boolean;
    isInBurnout(): boolean;
    isAttachedToTowTruck(vehicle: MpVehicle | object): boolean;
    setSearchlight(toggle: boolean, canBeUsedByAI: boolean): void;
    setTrainCruiseSpeed(speed: number): void;
    isCargobobHookActive(): boolean;
    setFrictionOverride(friction: number): void;
    getVehicleTrailer(vehicle: MpVehicle): MpVehicle;
    getTrailer(vehicle: MpVehicle): MpVehicle;
    isHighDetail(): boolean;
    setModKit(modKit: number): void;
    setExtraColours(pearlescentColor: number, wheelColor: number): void;
    getPedUsingDoor(doorIndex: MpVehicleDoorIndex | number): MpPed | object;
    resetWheels(toggle: boolean): void;
    setReduceGrip(toggle: boolean): void;
    isSeatFree(seatIndex: number): boolean;
    disablePlaneAileron(p0: boolean, p1: boolean): void;
    setEngineOn(value: boolean, instantly: boolean, otherwise: boolean): void;
    getNumberOfPassengers(): number;
    getDoorLockStatus(): number;
    doesHaveWeapon(): boolean;
    setHalt(distance: number, killEngine: boolean, unknown: boolean): void;
    getBoatAnchor(): boolean;
    getLayoutHash(): string | number;
    getClass(): MpVehicleVehicleClass | number;
    isStoppedAtTrafficLights(): boolean;
    attachToTowTruck(vehicle: MpVehicle | object, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
    setWheelsCanBreak(enabled: boolean): void;
    toggleMod(modType: number, toggle: boolean): void;
    setNeonLightEnabled(index: MpVehicleNeonIndex | number, toggle: boolean): void;
    setHasBeenOwnedByPlayer(owned: boolean): void;
    getLivery(): number;
    isAnySeatEmpty(): boolean;
    setTimedExplosion(ped: MpPed | object, toggle: boolean): void;
    setDoorBreakable(doorIndex: MpVehicleDoorIndex | number, isBreakable: boolean): void;
    setCanBeUsedByFleeingPeds(toggle: boolean): void;
    canShuffleSeat(p0: object): boolean;
    setRenderTrainAsDerailed(toggle: boolean): void;
    setIsConsideredByPlayer(toggle: boolean): void;
    setColourCombination(numCombos: number): void;
    getNumModKits(): number;
    setLights(state: number): void;
    closeBombBayDoors(): void;
    setCustomSecondaryColour(r: number, g: number, b: number): void;
    setCanBeTargetted(state: boolean): void;
    setDisablePetrolTankDamage(toggle: boolean): void;
    setPaintFade(fade: number): void;
    getNumberOfColours(): number;
    getExtraColours(pearlescentColor: number, wheelColor: number): {
        readonly pearlescentColor: number;
        readonly wheelColor: number;
    };
    attachToTrailer(trailer: MpVehicle, radius: number): void;
    setStrong(toggle: boolean): void;
    wasCounterActivated(p0: object): boolean;
    attachToCargobob(cargobob: MpVehicle | object, p1: number, x: number, y: number, z: number): void;
    isModel(model: string | number): boolean;
    setSteerBias(value: number): void;
    isAlarmActivated(): boolean;
    setModColor1(paintType: MpVehiclePaintType | number, color: number, p2: number): void;
    releasePreloadMods(): void;
    setEngineHealth(health: number): void;
    setDisablePetrolTankFires(toggle: boolean): void;
    isBumberBrokenOff(front: boolean): boolean;
    isWindowIntact(windowIndex: number): boolean;
    setWheelType(wheelType: MpVehicleWheelType | number): void;
    getModColor2TextLabel(): string;
    setOnGroundProperly(): boolean;
    isStolen(): boolean;
    isDriveable(p0: boolean): boolean;
    setCanBeVisiblyDamaged(state: boolean): void;
    isSirenOn(): boolean;
    getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): MpVector3;
    setColours(colorPrimary: number, colorSecondary: number): void;
    setDoorsLockedForPlayer(player: MpPlayer, toggle: boolean): void;
    getModSlotName(modType: number): string;
    setCanRespray(state: boolean): void;
    isAConvertible(p0: boolean): boolean;
    getSuspensionHeight(): number;
    clearCustomPrimaryColour(): void;
    isStopped(): boolean;
    setPedEnabledBikeRingtone(p0: object): boolean;
    setWindowTint(tint: MpVehicleWindowTint | number): void;
    doesHaveStuckVehicleCheck(): boolean;
    setMissionTrainCoords(x: number, y: number, z: number): void;
    setTaxiLight(state: boolean): void;
    setCanBreak(toggle: boolean): void;
    setProvidesCover(toggle: boolean): void;
    setAllowNoPassengersLockon(toggle: boolean): void;
    getAcceleration(): number;
    getIsLeftHeadlightDamaged(): boolean;
    clearCustomSecondaryColour(): void;
    rollUpWindow(windowIndex: MpVehicleWindowIndex | number): void;
    setLivery(livery: number): void;
    getModKit(): number;
    trackVisibility(): void;
    getTyresCanBurst(): boolean;
    isStuckTimerUp(p0: number, p1: number): boolean;
    setIsStolen(isStolen: boolean): void;
    setHandbrake(toggle: boolean): void;
    getColourCombination(): number;
    setMod(modType: MpVehicleModType | number, modIndex: number, customTires: boolean): void;
    detachWindscreen(): void;
    setHelicopterRollPitchYawMult(multiplier: number): void;
    isCargobobMagnetActive(): boolean;
    setTyreFixed(tyreIndex: MpVehicleTyreIndex | number): void;
    setPetrolTankHealth(fix: number): void;
    setCustomPrimaryColour(r: number, g: number, b: number): void;
    setExplodesOnHighExplosionDamage(toggle: boolean): void;
    isTaxiLightOn(): boolean;
    setBoatAnchor(toggle: boolean): void;
    getNeonLightsColour(r: number, g: number, b: number): {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    fixWindow(index: MpVehicleWindowIndex | number): void;
    getMod(modType: MpVehicleModType | number): number;
    setDoorsShut(closeInstantly: boolean): void;
    explodeInCutscene(p0: boolean): void;
    setDirtLevel(dirtLevel: number): void;
    rollDownWindow(windowIndex: MpVehicleWindowIndex | number): void;
    enableCargobobHook(state: MpVehicleCargobobHookState | number): void;
    setDoorOpen(doorIndex: MpVehicleDoorIndex | number, loose: boolean, openInstantly: boolean): void;
    getNumberPlateText(): string;
    getPetrolTankHealth(): number;
    setExtra(extraId: number, toggle: boolean): void;
    getModColor2(paintType: MpVehiclePaintType | number, color: number): {
        readonly paintType: MpVehiclePaintType | number;
        readonly color: number;
        readonly p2: number;
    };
    setModColor2(paintType: MpVehiclePaintType | number, color: number): void;
    getCustomSecondaryColour(r: number, g: number, b: number): {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    getLastPedInSeat(seatIndex: number): MpPed | object;
    isToggleModOn(modType: MpVehicleModType | number): boolean;
    rollDownWindows(): void;
    getAttachedToCargobob(): MpVehicle | object;
    getLiveryCount(): number;
    openBombBayDoors(): void;
    getModTextLabel(modType: MpVehicleModType | number, modValue: number): string;
    setGravity(toggle: boolean): void;
    setUndriveable(toggle: boolean): void;
    doesHaveRoof(): boolean;
    setFullbeam(toggle: boolean): void;
    setAutomaticallyAttaches(p0: object, p1: object): void;
    isNeaonLightEnabled(index: MpVehicleNeonIndex | number): boolean;
    setNeonLightsColour(r: number, g: number, b: number): void;
    getDirtLevel(): number;
    getOwner(entity: MpEntity | object): boolean;
    raiseConvertibleRoof(instantlyRaise: boolean): void;
    detachFromTrailer(): void;
    setNumberPlateTextIndex(plateIndex: MpVehicleNumberPlateTextIndex | number): void;
    getModModifierValue(modType: MpVehicleModType | number, modIndex: number): void;
    getIsSecondaryColourCustom(): boolean;
    setBreakLights(toggle: boolean): void;
    removeMod(modType: MpVehicleModType | number): void;
    setHasStrongAxles(toggle: boolean): void;
    setEnginePowerMultiplier(value: number): void;
    setLodMultiplier(multiplier: number): void;
    setDoorShut(doorIndex: MpVehicleDoorIndex | number, closeInstantly: boolean): void;
    setDeformationFixed(): void;
    setNumberPlateText(plateText: string): void;
    retractCargobobHook(): void;
    setEngineCanDegrade(toggle: boolean): void;
    cargobobMagnetGrab(toggle: boolean): void;
    getLandingGearState(): MpVehicleLandingGearState;
    startHorn(duration: number, model: MpVehicleHornMode | string | number, forever: boolean): void;
    getPlateType(): MpVehicleNumberPlateTextIndex | number;
    setBikeLeanAngle(x: number, y: number): void;
    setSilent(toggle: boolean): void;
    smashWindow(index: MpVehicleWindowIndex | number): void;
    isBig(): boolean;
    getMaxTraction(): number;
    setHeliBladesFullSpeed(): void;
    getColours(colorPrimary: number, colorSecondary: number): {
        readonly colorPrimary: number;
        readonly colorSecondary: number;
    };
    setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p5: boolean): void;
    setDoorsLockedForAllPlayers(toggle: boolean): void;
    setWheelsCanBreakOffWhenBlowUp(toggle: boolean): void;
    setCeilingHeight(p0: number): void;
    setPlaybackToUseAi(flag: number): void;
    setDoorLatched(doorIndex: MpVehicleDoorIndex | number, p1: boolean, p2: boolean, p3: boolean): void;
    requestHighDetailModel(): void;
    removeWindow(windowIndex: MpVehicleWindowIndex | number): void;
    getMaxNumberOfPassengers(): number;
    getIsRightHeadlightDamaged(): boolean;
    getPaintFade(): number;
    isVisible(): boolean;
    setTrainSpeed(speed: number): void;
    setForwardSpeed(speed: number): void;
    getHeliEngineHealth(): number;
    getMaxBreaking(): number;
    detachFromAnyCargobob(): boolean;
    getIsEngineRunning(): boolean;
    getHeliTailRotorHealth(): number;
    isOnAllWheels(): boolean;
    setLightMultiplier(multiplier: number): void;
    getModVariation(modType: MpVehicleModType | number): boolean;
    getWheelType(): MpVehicleWheelType | number;
    getModColor1TextLabel(p0: boolean): string;
    isStuckOnRoof(): boolean;
    getLiveryName(liveryIndex: number): string;
    setEngineTorqueMultiplier(value: number): void;
    setTyreSmokeColor(r: number, g: number, b: number): void;
    setExclusiveDriver(ped: MpPed | object, p1: number): void;
    isSirenSoundOn(): boolean;
    setIndicatorLights(turnSignal: MpVehicleTurnSignal | number, toggle: boolean): void;
    getTyreSmokeColor(r: number, g: number, b: number): {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    getCustomPrimaryColour(r: number, g: number, b: number): {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    setDoorsLocked(doorLockStatus: MpVehicleDoorLockStatus | number): void;
    addUpsidedownCheck(): void;
    setBodyHealth(value: number): void;
    setDoorsLockedForTeam(team: number, toggle: boolean): void;
    setPlaneMinHeightAboveGround(height: number): void;
    isDoorDamaged(doorId: MpVehicleDoorIndex | number): boolean;
    getBodyHealth2(): number;
    setJetEngineOn(toggle: boolean): void;
    startAlarm(): void;
    getLightsState(lightsOn: boolean, highbeamsOn: boolean): {
        readonly lightsOn: boolean;
        readonly highbeamsOn: boolean;
    };
    isTyreBurst(wheelId: MpVehicleTyreIndex | number, completely: boolean): boolean;
    explode(isAudible: boolean, isInvisble: boolean): void;
    getPedInSeat(index: number): MpPed | object;
    setInteriorLight(toggle: boolean): void;
    isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
    isDamaged(): boolean;
    setPlayersLast(): void;
    setPedTargettableDestory(vehicleComponent: number, destroyType: number): void;
    setNameDebug(name: string): void;
    isSearchlightOn(): boolean;
    detachFromTowTruck(vehicle: MpVehicle | object): void;
    getEngineHealth(): number;
    removeUpsidedownCheck(): void;
    jitter(p0: boolean, yaw: number, pitch: number, roll: number): void;
    getCargobobHookPosition(): MpVector3;
    setAlarm(state: boolean): void;
    setLandingGear(state: MpVehicleLandingGearState | number): void;
    detachFromAnyTowTruck(): boolean;
    isExtraTurnedOn(extraId: number): boolean;
    isAttachedToCargobob(vehicleAttached: MpVehicle | object): boolean;
    setDoorBroken(doorIndex: MpVehicleDoorIndex | number, createDoorObject: boolean): void;
    resetStuckTimer(reset: boolean): void;
    disableImpactExplosionActivation(toggle: boolean): void;
    lowerConvertibleRoof(instantlyLower: boolean): void;
    setAllsSpawns(p0: boolean, p1: boolean, p2: boolean): void;
    ejectJb700Roof(x: number, y: number, z: number): void;
    getNumMods(modType: MpVehicleModType | number): number;
    getCauseOfDestruction(): string | number;
    getHeliMainRotorHealth(): number;
    isAttachedToTrailer(): boolean;
    getModColor1(paintType: MpVehiclePaintType | number, color: number, p2: number): {
        readonly paintType: MpVehiclePaintType | number;
        readonly color: number;
        readonly p2: number;
    };
    setTyresCanBurst(toggle: boolean): void;
    setTyreBurst(tyreIndex: MpVehicleTyreIndex | number, onRim: boolean, p2: number): void;
    getAttachedToTowTruck(): MpEntity | object;
    getIsPrimaryColourCustom(): boolean;
    getNumberPlateTextIndex(): MpVehicleNumberPlateTextIndex;
    setOutOfControl(killDriver: boolean, explodeOnImpact: boolean): void;
    getBodyHealth(): number;
    setDoorControl(doorIndex: MpVehicleDoorIndex, speed: number, angle: number): void;
    setConvertibleRoof(p0: boolean): void;
    getColor(r: number, g: number, b: number): {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    setSiren(toggle: boolean): void;
    getDoorsLockedForPlayer(player: MpPlayer): boolean;
    setIsWanted(state: boolean): void;
    getConvertibleRoofState(): MpVehicleConvertibleRoofState;
    setBurnout(toggle: boolean): void;
    setNeedsToBeHotwired(toggle: boolean): void;
    getModKitType(): number;
    setHeliBladeSpeed(speed: number): void;
    getDoorAngleRatio(door: MpVehicleDoorIndex | number): number;
    setTowTruckCraneHeight(height: number): void;
}

declare interface MpVehiclePool extends MpPool<MpVehicle> {

}

declare enum MpVehicleConvertibleRoofState {
    up = 0,
    loweringDown = 1,
    down = 2,
    raisingUp = 3
}

declare enum MpVehicleDoorLockStatus {
    none = 0,
    unlocked = 1,
    locked = 2,
    lockoutPlayerOnly = 3,
    lockedPlayerInside = 4,
    lockedInitially = 5,
    forceShutDoors = 6,
    lockedButCanSeeDamaged = 7
}

declare enum MpVehicleTurnSignal {
    right = 0,
    left = 1
}

declare enum MpVehicleHornMode {
    normal = 'NORMAL',
    heldDown = 'HELDDOWN'
}

declare enum MpVehicleLandingGearState {
    deployed = 0,
    closing = 1,
    opening = 2,
    retracted = 3
}

declare enum MpVehicleNumberPlateTextIndex {
    blueWhite = 0,
    yellowBlack = 1,
    yellowBlue = 2,
    blueWhite2 = 3,
    blueWhite3 = 4,
    yankton = 5
}

declare enum MpVehicleCargobobHookState {
    hook = 0,
    magnet = 1
}

declare enum MpVehicleTyreIndex {
    leftFront = 0,
    rightFront = 1,
    leftMiddle = 2,
    rightMiddle = 3,
    leftRear = 4,
    rightRear = 5,
    trailerLeftMiddle = 45,
    trailerRIghtMiddle = 47
}

declare enum MpVehicleModType {
    spoiler = 0,
    frontBumber = 1,
    rearBumber = 2,
    sideSkirt = 3,
    exhaust = 4,
    frame = 5,
    grille = 6,
    hood = 7,
    fender = 8,
    rightFender = 9,
    roof = 10,
    engine = 11,
    brakes = 12,
    transmission = 13,
    horns = 14,
    suspension = 15,
    armor = 16,
    frontWheels = 23,
    backWheels = 24,
    plateHolders = 25,
    trimDesign = 27,
    ornaments = 28,
    dialDesign = 30,
    steeringWheel = 33,
    shifterLeavers = 34,
    plaques = 35,
    hydraulics = 38,
    livery = 48
}

declare enum MpVehicleWindowIndex {
    frontRight = 0,
    frontLeft = 1,
    backRight = 2,
    backLeft = 3
}
declare enum MpVehicleWindowTint {
    none = 0,
    pureBlack = 1,
    darkSmoke = 2,
    lightSmoke = 3,
    stock = 4,
    limo = 5,
    green = 6
}

declare enum MpVehicleWheelType {
    sport = 0,
    muscle = 1,
    lowrider = 2,
    suv = 3,
    offroad = 4,
    tuner = 5,
    bikeWheels = 6,
    highend = 7
}

declare enum MpVehiclePaintType {
    normal = 0,
    metallic = 1,
    pearl = 2,
    matte = 3,
    metal = 4,
    chrome = 5
}

declare enum MpVehicleDoorIndex {
    frontLeft = 0,
    fronRight = 1,
    backLeft = 2,
    backRight = 3,
    hood = 4,
    trunk = 5,
    trunk2 = 6
}

declare enum MpVehicleNeonIndex {
    left = 0,
    right = 1,
    front = 2,
    back = 3
}

declare enum MpVehicleVehicleClass {
    compact = 0,
    sedan = 1,
    suv = 2,
    coupe = 3,
    muscle = 4,
    sportClassic = 5,
    sport = 6,
    'super' = 7,
    motorcycles = 8,
    offroad = 9,
    industrial = 10,
    utility = 11,
    van = 12,
    cycle = 13,
    boat = 14,
    helicopter = 15,
    plane = 16,
    service = 17,
    emergency = 18,
    military = 19,
    commercial = 20,
    train = 21
}
