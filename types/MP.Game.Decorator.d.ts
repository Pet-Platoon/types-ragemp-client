/// <reference path="../index.d.ts" />

declare interface MpGameDecorator {
    decorIsRegisteredAsType(propertyName: string, type: MpGameDecoratorType | number): boolean;
    decorRegister(propertyName: string, type: MpGameDecoratorType | number): void;
}

declare enum MpGameDecoratorType {
    float = 1,
    bool = 2,
    int = 3,
    time = 5
}
