/// <reference path="../index.d.ts" />

declare interface MpCamera extends MpEntity {
    getDirection(): MpVector3;
    setActive(active: boolean): void;
    isRendering(): boolean;
    isInterpolating(): boolean;
    setUseShallowDofMode(toggle: boolean): void;
    setDebugName(name: string): void;
    getFarDof(): number;
    setDofMaxNearInFocuxDistanceBlendLevel(p0: number): void;
    setDofPlanes(p0: number, p1: number, p2: number, p3: number): void;
    setNearDof(nearDof: number): void;
    setAnimCurrentPhase(phase: number): void;
    setInheritRollVehicle(p1: boolean): void;
    setCoord(posX: number, posY: number, posZ: number): void;
    pointAt(entity: MpEntity, offsetX: number, offsetY: number, offsetZ: number, p4: boolean): void;
    setDofStrength(dofStrength: number): void;
    attachToPedBone(ped, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
    pointAtPedBone(ped, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
    shake(type: MpCameraShake | string, amplitude: number): void;
    isShaking(): boolean;
    setMotionBlurStrength(strength: number): void;
    getRot(p0: object): MpVector3;
    setDofFnumberOfLens(p1: number): void;
    setRot(rotX: number, rotY: number, rotZ: number, p3: number): void;
    destroy(destroy?: boolean): void;
    setAffectsAiming(toggle: boolean): void;
    playAnim(animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: object, p9: number): void;
    setActiveWithInterp(camFrom: MpCamera, duration: number, easeLocation: number, easeRotation: number): void;
    getAnimCurrentPhase(): number;
    animatedShake(p0: string, p1: string, p2: string, p3: number): void;
    detach(): void;
    doesExist(): boolean;
    setFarClip(farClip: number): void;
    setFov(fieldOfView: number): void;
    getSplinePhase(): number;
    getFarClip(): number;
    getCoord(): MpVector3;
    stopShaking(p0: boolean): void;
    setParams(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, duration: number, p8: object, p9: object, p10: object): void;
    getFov(): number;
    setDofMaxNearInFocusDistance(p0: number): void;
    getNearClip(): number;
    setDofFocusDistanceBias(p0: number): void;
    setNearClip(nearClip: number): void;
    isPlayingAnim(animName: string, animDictionary: string): boolean;
    setShakeAmplitude(amplitude: number): void;
    isActive(): boolean;
    setFarDof(farDof: number): void;
    stopPointing(): void;
    pointAtCoord(x: number, y: number, z: number): void;
    attachTo(entity: MpEntity | object, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
}

declare interface MpCameraPool extends MpPool<MpCamera> {

}

declare enum MpCameraName {
    defaultScriptedCamera = 'DEFAULT_SCRIPTED_CAMERA',
    defaultAnimatedCamera = 'DEFAULT_ANIMATED_CAMERA',
    defaultSplineCamera = 'DEFAULT_SPLINE_CAMERA',
    defaultScriptedFlyCamera = 'DEFAULT_SCRIPTED_FLY_CAMERA',
    timedSplinedCamera = 'TIMED_SPLINE_CAMERA'
}

declare enum MpCameraShake {
    deathFailInEffectShake = 'DEATH_FAIL_IN_EFFECT_SHAKE',
    drunkShake = 'DRUNK_SHAKE',
    family5DrugTripShake = 'FAMILY5_DRUG_TRIP_SHAKE',
    handShake = 'HAND_SHAKE',
    joltShake = 'JOLT_SHAKE',
    largeExplosionShake = 'LARGE_EXPLOSION_SHAKE',
    mediumExplosionShake = 'MEDIUM_EXPLOSION_SHAKE',
    smallExplosionShake = 'SMALL_EXPLOSION_SHAKE',
    roadVibrationShake = 'ROAD_VIBRATION_SHAKE',
    skyDivingShake = 'SKY_DIVING_SHAKE',
    vibrateShake = 'VIBRATE_SHAKE'
}

declare enum MpCameraView {
    thirdPersonClose = 0,
    thirdPersonMid = 1,
    thirdPersonFar = 2,
    firstPerson = 3
}
