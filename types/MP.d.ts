/// <reference path="../index.d.ts" />

declare interface ScriptContext {
    players: MpPlayerPool;
    vehicles: MpVehiclePool;
    objects: MpObjectPool;
    pickups: MpPickupPool;
    blips: MpBlipPool;
    markers: MpMarkerPool;
    checkpoints: MpCheckpointPool;
    cameras: MpCameraPool;
    browsers: MpBrowserPool;
    colshapes: MpColshapePool;
    events: MpEvents;
    game: MpGame;
}
