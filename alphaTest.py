import blinkFuncs as bF
import sevSegMaps as sSM
pinList = [37, 35, 33, 31, 40, 38, 36]

bF.setup(bF.pinList, None)

for digit, representation in sSM.sevSegMap.items():
    print(digit, representation)
    print(sSM.masker(pinList, representation))
    bF.blinkMe(representation, 5)

bF.shutdown()
