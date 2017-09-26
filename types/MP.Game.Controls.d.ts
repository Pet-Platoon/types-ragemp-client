/// <reference path="../index.d.ts" />

declare interface MpGameControls {
    getControlActionName(inputGroup: MpGameControlsInputGroup, control: number, p2: boolean): string;
    getDisabledControlNormal(inputGroup: MpGameControlsInputGroup, control: number): number;
    isInputJustDisabled(inputGroup: MpGameControlsInputGroup): boolean;
    isControlEnabled(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    isDisabledControlJustReleased(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    enableControlAction(inputGroup: MpGameControlsInputGroup, control: number, enable: boolean): void;
    stopPadShake(p0: object): void;
    setPadShake(p0: number, duration: number, frequency: number): void;
    isControlJustReleased(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    isControlJustPressed(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    disableAllControlActions(inputGroup: MpGameControlsInputGroup): void;
    isControlReleased(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
    isDisabledControlJustPressed(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    isInputDisabled(inputGroup: MpGameControlsInputGroup): boolean;
    enableAllControlActions(inputGroup: MpGameControlsInputGroup): void;
    getControlValue(inputGroup: MpGameControlsInputGroup, control: number): number;
    isControlPressed(inputGroup: MpGameControlsInputGroup, control: number): boolean;
    setControlNormal(inputGroup: MpGameControlsInputGroup, control: number, amount: number): boolean;
    getControlNormal(inputGroup: MpGameControlsInputGroup, control: number): number;
    setInputExclusive(inputGroup: MpGameControlsInputGroup, control: number): void;
    disableControlAction(inputGroup: MpGameControlsInputGroup, control: number, disable: boolean): void;
}

declare enum MpGameControlsInputGroup {
    move = 0,
    look = 1,
    wheel = 2,
    cellphoneNavigate = 3,
    cellphoneNavigateUd = 4,
    cellphoneNavigateLr = 5,
    frontendDpadAll = 6,
    frondentDpadUd = 7,
    frontendDpadLr = 8,
    frontendLstickAll = 9,
    frontendRstickAll = 10,
    frontendGenericUd = 11,
    frontendGenericLr = 12,
    frontendGenericAll = 13,
    frontendBumbers = 14,
    frontendTriggers = 15,
    frontendSticks = 16,
    scriptDpadAll = 17,
    scriptDpadUd = 18,
    scriptDpadLr = 19,
    scriptLstickAll = 20,
    scriptRstickAll = 21,
    scriptBumbers = 22,
    scriptTriggers = 23,
    weaponWheelCycle = 24,
    fly = 25,
    sub = 26,
    vehMoveAll = 27,
    cursor = 28,
    cursorScroll = 29,
    sniperZoomSecondary = 30,
    vehHydraulicsControl = 31,
    max = 32,
    invalid = 33
}
