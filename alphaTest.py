import blinkFuncs as bF
import sevSegMaps as sSM
DURATION = 2


def alphaTest():
    for digit, representation in sSM.sevSegMap.items():
        print(digit, representation)
        bF.blinkMe(sSM.masker(bF.pinList, representation), DURATION)


def spellItOut(messageString):
    for char in split(messageString):
        # print(char)
        # print(sSM.sevSegMap[char])
        bF.blinkMe(sSM.masker(bF.pinList, sSM.sevSegMap[char]), DURATION)


def split(string):
    return [char for char in string]


bF.setup(bF.pinList, None)
spellItOut("there once was a buffi from nantucket buffi")

bF.shutdown()
