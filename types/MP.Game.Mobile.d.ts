/// <reference path="../index.d.ts" />

declare interface MpGameMobile {
    getMobilePhoneRotation(rotation: MpVector3, p1: object): MpVector3;
    setPhoneLean(toggle: boolean): void;
    getMobilePhonePosition(position: MpVector3): MpVector3;
    setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
    moveFinger(direction: number): void;
    createMobilePhone(phoneType: MpGameMobilePhoneType): void;
    getMobilePhoneRenderId(renderId: number): number;
    setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: object): void;
    setMobilePhoneScale(scale: number): void;
    scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
    cellCamActivate(p0: boolean, p1: boolean): void;
}

declare enum MpGameMobilePhoneType {
    michaelsPhone = 0,
    trevorsPhone = 1,
    franklinsPhone = 2,
    prologuePhone = 4
}
