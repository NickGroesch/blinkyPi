import blinkFuncs as bF
import sevSegMaps as sSM
DURATION = 2


def alphaTest():
    for digit, representation in sSM.sevSegMap.items():
        print(digit, representation)
        bF.blinkMe(sSM.masker(bF.pinList, representation), DURATION)


def spellItOut(messageString):
    for char in split(messageString):
        print(char)
        print(sSM.sevSegMap[char])


def split(string):
    return [char for char in string]


spellItOut("there once was a man from nantucket")

bF.setup(bF.pinList, None)

bF.shutdown()
