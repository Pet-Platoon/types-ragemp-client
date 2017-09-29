/// <reference path="../index.d.ts" />

declare interface MpEvents {
    add(events: object): void;
    add(eventName: string, func: (player: MpPlayer, ...args: any[]) => void): void;
    call(eventName: string, ...args: any[]): void;
    addCommand(commandName: string, handlerFunction: (player: MpPlayer, fullText: string, ...args: any[]) => void): void;
    callRemote(eventName: string, ...args: any[]): void;
}
