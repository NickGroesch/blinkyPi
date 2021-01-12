sevSegMap = {
    # bitwise representation to also help me check led functionality
    # digits
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
    0: [1, 1, 1, 1, 1, 1, 0],
    # hexidecimal letters
    # A
    # b
    # c
    # d
    # E
    # F
    # other letters
    # r
    # o
    # t
}


def masker(pinList, representation):
    # masked = map(lambda x, y: x if y else None, pinList, representation)
    # print(list(masked))
    # print('wtf')
    # #filtered = [i for i in list(masked) if i]
    # filtered = list(filter(lambda x: print(x) if x else False, list(masked)))
    # newOne = [masked[i] for i in xrange(len(maksed)) if msk[i]]
    filtered = [pinList[i] for i in range(len(pinList)) if representation[i]]
    print(filtered)
    return filtered
