/// <reference path="../index.d.ts" />

declare interface MpGameDecisionevent {
    isShockingEventInSphere(type: MpGameDecisioneventShockingEventType | number, x: number, y: number, z: number, radius: number): boolean;
    removeShockingEvent(event: MpGameScript): boolean;
    suppressShockingEvent(type: MpGameDecisioneventShockingEventType | number): void;
    clearDecisionMakerEventResponse(name: string | number, type: MpGameDecisioneventShockingEventType | number): void;
    addShockingEventForEntity(type: MpGameDecisioneventShockingEventType | number, entity: MpEntity | object, duration: number): MpGameScript;
    unblockDecisionMakerEvent(name: string | number, type: MpGameDecisioneventShockingEventType | number): void;
    addShockingEventAtPosition(type: MpGameDecisioneventShockingEventType | number, x: number, y: number, z: number, duration: number): MpGameScript;
    blockDecisionMakerEvent(name: string | number, type: MpGameDecisioneventShockingEventType | number): void;
    removeAllShockingEvents(p0: boolean): void;
}

declare enum MpGameDecisioneventShockingEventType {
    deadBody = 82,
    explosion = 86,
    fire = 87,
    shootingFireExtinguisher = 88,
    shooting = 89,
    pedUsingHorn = 93,
    pedReceivingMelee = 95,
    livingPedReceivingShot = 102,
    playerThrownGrenade = 104,
    playerDroppingJerryCanGasoline = MpGameDecisioneventShockingEventType.playerThrownGrenade,
    meleeAgainstVeh = 105,
    playerRunning = 106,
    vehicleTheft = 108,
    meleeAttack = 112,
    vehRolloverPed = 113,
    deadPedReceivingShot = 114,
    aimingAtPed = 116,
    armed = 121
}
