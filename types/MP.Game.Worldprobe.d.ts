/// <reference path="../index.d.ts" />

declare interface MpGameWorldprobe {
    startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: MpGameWorldprobeProbeFlag, ignoreEntity: MpEntity, p9: number): number;
    castRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: MpGameWorldprobeRayCastFlag, ignoreEntity: MpEntity, p8: number): number;
    getShapeTestResult(rayHandle: number, hit: boolean, endCoords: MpVector3, surfaceNormal: MpVector3, entityHit: MpEntity): {
        readonly hit: boolean;
        readonly endCoords: MpVector3;
        readonly surfaceNormal: MpVector3;
        readonly entityHit: MpEntity;
    };
    getShapeTestResultEx(rayHandle: number, hit: boolean, endCoords: MpVector3, surfaceNormal: MpVector3, _materialHash: number, entityHit: MpEntity): {
        readonly hit: boolean;
        readonly endCoords: MpVector3;
        readonly surfaceNormal: MpVector3;
        readonly _materialHash: number;
        readonly entityHit: MpEntity;
    };
    startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: MpGameWorldprobeProbeFlag, ignoreEntity: MpEntity, p8: number): number;
    startShapeTestBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: object, p10: object, ignoreEntity: MpEntity, p12: object): number;
}

declare enum MpGameWorldprobeRayCastFlag {
    intersectWithMap = 1,
    intersectWithVehicles = 2,
    intersectWithPeds = 4,
    intersectWithObjects = 16,
    unknown = 32,
    unknown2 = 64,
    unknown3 = 128,
    intersectWithVegetation = 256
}

declare enum MpGameWorldprobeProbeFlag {
    vehicles = 10,
    peds = 12
}
