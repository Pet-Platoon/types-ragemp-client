/// <reference path="../index.d.ts" />

declare interface MpEvents {
    add(events: object): void;
    add(eventName: MpEventName | string, func: (player: MpPlayer, ...args: any[]) => void): void;
    call(eventName: string, ...args: any[]): void;
    addCommand(commandName: string, handlerFunction: (player: MpPlayer, fullText: string, ...args: any[]) => void): void;
    callRemote(eventName: string, ...args: any[]): void;
}

declare enum MpEventName {
    playerJoin = 'playerJoin',
    playerQuit = 'playerQuit',
    playerDeath = 'playerDeath',
    playerSpawn = 'playerSpawn',
    playerResurrect = 'playerResurrect',
    playerChat = 'playerChat',
    playerCommand = 'playerCommand',
    playerWeaponShoot = 'playerWeaponShoot',
    playerRuleTriggered = 'playerRuleTriggered',
    entityStreamIn = 'entityStreamIn',
    entityStreamOut = 'entityStreamOut',
    vehicleDeath = 'vehicleDeath',
    playerEnterCheckpoint = 'playerEnterCheckpoint',
    playerExitCheckpoint = 'playerExitCheckpoint',
    playerEnterColshape = 'playerEnterColshape',
    playerExitColshape = 'playerExitColshape'
}
