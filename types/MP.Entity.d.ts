/// <reference path="../index.d.ts" />

declare interface MpEntity {
    readonly id: number;
    dimension: number;
    readonly type: string;
    position: MpVector3;
    model: number;
    alpha: number;
    readonly handle: object;

    destroy(): void;

    hasClearLosToInFront(entity: MpEntity | object): boolean;
    getPedIndexFromIndex(): MpPed | object;
    doesHaveDrawable(): boolean;
    setCoords(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
    setRecordsCollisions(toggle: boolean): void;
    getForwardVector(): MpVector3;
    isAMission(): boolean;
    setLoadCollisionFlag(toggle: boolean): void;
    setMaxSpeed(speed: number): void;
    isTouchingModel(modelHash: string | number): boolean;
    isStatic(): boolean;
    getMaxHealth(): number;
    setMaxHealth(value: number): void;
    setDynamic(toggle: boolean): void;
    setCanBeDamaged(toggle: boolean): void;
    isTouching(targetEntity: MpEntity | object): boolean;
    getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): MpVector3;
    applyForceToCenterOfMass(forceType: number, x: number, y: number, z: number, p4: boolean, isRel: boolean, highForce: boolean, p7: boolean): void;
    setCollision(toggle: boolean, keepPhysics: boolean): void;
    setVelocity(x: number, y: number, z: number): void;
    isUpsidedown(): boolean;
    getHeightAboveGround(): number;
    isPlayingAnim(animDict: string, animName: string, p2: number): boolean;
    isAtCoord(xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p6: boolean, p7: boolean, p8: number): boolean;
    hasAnimFinished(animDict: string, animName: string, p2: number): boolean;
    getRotationVelocity(): MpVector3;
    getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): MpVector3;
    setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number): void;
    isAttachedToAnyVehicle(): boolean;
    stopAnim(animation: string, animGroup: string, p2: number): void;
    setAnimSpeed(animDict: string, animName: string, speedMultiplier: number): void;
    setMotionBlur(toggle: boolean): void;
    getAnimCurrentTime(animDict: string, animName: string): number;
    setInvincible(toggle: boolean): void;
    getCoords(alive: boolean): MpVector3;
    forceAiAndAnimationUpdate(): void;
    getLodDist(): number;
    freezePosition(toggle: boolean): void;
    stopSynchronizedAnim(p0: number, p1: boolean): boolean;
    setAnimCurrentTime(animDict: string, animName: string, time: number): void;
    setAlpha(alphaLevel: string, skin: boolean): void;
    getWorldPositionOfBone(boneIndex: number): MpVector3;
    isVisible(): boolean;
    getVelocity(): MpVector3;
    getAttachedTo(): MpEntity | object;
    setHasGravity(toggle: boolean): void;
    getVehicleIndexFromIndex(): MpVehicle | object;
    getNearestPlayerToOnTeam(team: number): MpPlayer;
    getAnimTotalTime(animDict: string, animName: string): number;
    isInAngledArea(originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p7: boolean, p8: boolean, p9: object): boolean;
    isAPed(): boolean;
    isUpright(angle: number): boolean;
    isInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: object): boolean;
    setTrafficlightOverride(state: number): void;
    setLodDist(value: number): void;
    getAlpha(): number;
    getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
    getLastMaterialHitBy(): string | number;
    isDead(): boolean;
    hasBeenDamagedByAnyPed(): boolean;
    setCoords2(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number, clearArea: boolean): void;
    isAVehicle(): boolean;
    setHealth(health: number): void;
    attachTo(entity: MpEntity | object, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p8: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void;
    setOnlyDamagedByRelationshipGroup(p0: boolean, p1: object): void;
    getNearestPlayerTo(): MpPlayer;
    doesExist(): boolean;
    setRenderScorched(toggle: boolean): void;
    isAt(entity: MpEntity | object, xSize: number, ySize: number, zSize: number, p4: boolean, p5: boolean, p6: number): boolean;
    setQuaternion(x: number, y: number, z: number, w: number): void;
    setOnlyDamagedByPlayer(toggle: boolean): void;
    getQuaternion(x: number, y: number, z: number, w: number): MpQuaternion;
    setLights(toggle: boolean): void;
    playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number, bitset: object): boolean;
    getRoll(): number;
    getPhysicsHeading(): number;
    setRotation(pitch: number, roll: number, yaw: number, rotationOrder: number, p4: boolean): void;
    getForwardY(): number;
    isInAir(): boolean;
    getType(): MpEntityType | number;
    hasCollidedWithAnything(): boolean;
    getForwardX(): number;
    isAnObject(): boolean;
    setHeading(heading: number): void;
    hasBeenDamagedByAnyObject(): boolean;
    getUprightValue(): number;
    detach(p0: boolean, collision: boolean): void;
    getSpeedVector(relative: boolean): MpVector3;
    resetAlpha(): void;
    getModel(): string | number;
    setNoCollision(entity: MpEntity | object, collision: boolean): void;
    getScript(script: MpGameScript): MpGameScript;
    clearLastDamage(): void;
    setAlwaysPrerender(toggle: boolean): void;
    setAsMission(p0: boolean, byThisScript: boolean): void;
    getRotation(rotationOrder: number): MpVector3;
    isAttachedToAnyPed(): boolean;
    isAttached(): boolean;
    isInZone(zone: string): boolean;
    attachToPhysically(entity: MpEntity | object, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p14: boolean, collision: boolean, p16: boolean, p17: number): void;
    applyForceTo(forceType: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, boneIndex: number, isRel: number, p9: boolean, highForce: boolean, p11: boolean, p12: boolean): void;
    playSynchronizedAnim(syncedScene: number, animation: string, propName: string, p3: number, p4: number, p5: object, p6: number): boolean;
    hasBeenDamagedBy(entity: MpEntity | object, p1: boolean): boolean;
    isCollisonDisabled(): boolean; // TODO: Is this correct?
    isAttachedToAnyObject(): boolean;
    isInWater(): boolean;
    isWaitingForWorldCollision(): boolean;
    setCanBeTargetedWithoutLos(toggle: boolean): void;
    getPitch(): number;
    getSpeed(): number;
    isVisibleToScript(): boolean;
    getObjectIndexFromIndex(): MpObject | object;
    doesHavePhysics(): boolean;
    doesBelongToThisScript(p0: boolean): boolean;
    hasBeenDamagedByAnyVehicle(): boolean;
    setCanBeDamagedByRelationshipGroup(p0: boolean, p1: object): void;
    isOccluded(): boolean;
    getCollisionNormalOfLastHitFor(): MpVector3;
    isOnScreen(): boolean;
    getSubmergedLevel(): number;
    getHeading(): number;
    hasCollisionLoadedAround(): boolean;
    setIsTargetPriority(p0: boolean, p1: number): void;
    setVisible(toggle: boolean, p1: boolean): void;
    hasAnimEventFired(actionHash: string | number): boolean;
    getMatrix(rightVector: MpVector3, forwardVector: MpVector3, upVector: MpVector3, position: MpVector3): {
        readonly rightVector: MpVector3;
        readonly forwardVector: MpVector3;
        readonly upVector: MpVector3;
        readonly position: MpVector3;
    };
    getHealth(): number;
    isAttachedTo(to: MpEntity | object): boolean;
    processAttachments(): void;
    getPopulationType(): number;
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p5: boolean, p6: boolean, drownProof: boolean): void;
    getBoneIndexByName(boneName: MpVehicleBones | string): number;
    hasClearLosTo(entity: MpEntity | object, traceType: number): boolean;
}

declare enum MpEntityType {
    none = 0,
    ped = 1,
    vehicle = 2,
    object = 3
}

declare enum MpVehicleBones {
    chassis = 'chassis',
    windscreen = 'windscreen',
    seat_pside_r = 'seat_pside_r',
    seat_dside_r = 'seat_dside_r',
    bodyshell = 'bodyshell',
    suspension_lm = 'suspension_lm',
    suspension_lr = 'suspension_lr',
    platelight = 'platelight',
    attach_female = 'attach_female',
    attach_male = 'attach_male',
    bonnet = 'bonnet',
    boot = 'boot',
    chassis_dummy = 'chassis_dummy',	//Center of the dummy
    chassis_Control = 'chassis_Control',	//Not found yet
    door_dside_f = 'door_dside_f',	//Door left, front
    door_dside_r = 'door_dside_r',	//Door left, back
    door_pside_f = 'door_pside_f',	//Door right, front
    door_pside_r = 'door_pside_r',	//Door right, back
    Gun_GripR = 'Gun_GripR',
    windscreen_f = 'windscreen_f',
    VFX_Emitter = 'VFX_Emitter',
    window_lf = 'window_lf',	//Window left, front
    window_lr = 'window_lr',	//Window left, back
    window_rf = 'window_rf',	//Window right, front
    window_rr = 'window_rr',	//Window right, back
    engine = 'engine',	//Position of the engine
    gun_ammo = 'gun_ammo',
    ROPE_ATTATCH = 'ROPE_ATTATCH',	//Not misspelled. In script 'finale_heist2b.c4'.
    wheel_lf = 'wheel_lf',	//Wheel left, front
    wheel_lr = 'wheel_lr',	//Wheel left, back
    wheel_rf = 'wheel_rf',	//Wheel right, front
    wheel_rr = 'wheel_rr',	//Wheel right, back
    exhaust = 'exhaust',	//Exhaust. shows only the position of the stock-exhaust
    overheat = 'overheat',	//A position on the engine(not exactly sure, how to name it)
    misc_e = 'misc_e',	//Not a car-bone.
    seat_dside_f = 'seat_dside_f',	//Driver-seat
    seat_pside_f = 'seat_pside_f',	//Seat next to driver
    Gun_Nuzzle = 'Gun_Nuzzle',
    seat_r = 'seat_r'
}
