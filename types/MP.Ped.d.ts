/// <reference path="../index.d.ts" />

declare interface MpPed extends MpEntity {

}

declare enum MpPedTattooZoneData {
    torso = 0,
    head = 1,
    leftArm = 2,
    rightArm = 3,
    leftLeg = 4,
    rightLeg = 5,
    unknown = 6,
    none = 7
}

declare enum MpPedType {
    any = -1,
    player = 1,
    male = 4,
    female = 5,
    cop = 6,
    human = 26,
    swat = 27,
    animal = 28,
    army = 29
}

declare enum MpPedFaceType {
    maleNonDlc = 0,
    femaleNonDlc = 1,
    maleDlc = 2,
    femaleDlc = 3
}

declare enum MpPedGroupRelationship {
    companion = 0,
    respect = 1,
    like = 2,
    neutral = 3,
    dislike = 4,
    hate = 5,
    pedestrian = 255
}