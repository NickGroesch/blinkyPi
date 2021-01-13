sevSegMap = {
    # bitwise representation to also help me check led functionality
    # digits
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],  # FIXED?
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
    0: [1, 1, 1, 1, 1, 1, 0],
    # hexidecimal letters
    "A": [1, 1, 1, 0, 1, 1, 1],
    "b": [0, 0, 1, 1, 1, 1, 1],
    "c": [0, 0, 0, 1, 1, 0, 1],
    "d": [0, 1, 1, 1, 1, 0, 1],
    "E": [1, 1, 0, 1, 1, 0, 1],
    "F": [1, 0, 0, 1, 1, 1, 1],
    # other letters
    # g=> 9
    "h": [0, 0, 1, 0, 1, 1, 1],
    "i": [0, 0, 0, 0, 1, 0, 0],
    "J": [0, 1, 1, 1, 0, 0, 0],
    # K=> X
    "L": [0, 0, 0, 1, 1, 1, 0],
    "M": [1, 0, 1, 0, 1, 0, 1],
    "n": [0, 0, 1, 0, 1, 0, 1],
    "o": [0, 0, 1, 1, 1, 0, 1],
    "P": [1, 1, 0, 0, 1, 1, 1],
    # Q=> 9 TODO: figure it out
    "r": [0, 0, 0, 0, 1, 0, 1],
    # S=> 5
    "t": [0, 0, 0, 1, 1, 1, 1],
    "U": [0, 1, 1, 1, 1, 1, 0],
    "v": [0, 0, 1, 1, 1, 0, 0],
    "w": [0, 1, 0, 1, 0, 1, 1],
    "X": [0, 1, 1, 0, 1, 1, 1],  # looks like h
    "Y": [0, 1, 1, 1, 0, 1, 1],
    # Z=>2
}
sevSegMap["g"] = sevSegMap[9]
sevSegMap["K"] = sevSegMap["X"]
sevSegMap["S"] = sevSegMap[5]
sevSegMap["Z"] = sevSegMap[2]
sevSegMap["a"] = sevSegMap["A"]
sevSegMap["B"] = sevSegMap["b"]
sevSegMap["C"] = sevSegMap["c"]
sevSegMap["D"] = sevSegMap["d"]
sevSegMap["e"] = sevSegMap["E"]
sevSegMap["f"] = sevSegMap["F"]
sevSegMap["G"] = sevSegMap[9]
sevSegMap["H"] = sevSegMap["h"]
sevSegMap["I"] = sevSegMap["i"]
sevSegMap["j"] = sevSegMap["J"]
sevSegMap["k"] = sevSegMap["X"]
sevSegMap["l"] = sevSegMap["L"]
sevSegMap["m"] = sevSegMap["M"]
sevSegMap["N"] = sevSegMap["n"]
sevSegMap["O"] = sevSegMap["o"]
sevSegMap["p"] = sevSegMap["P"]
# TODO:Q
sevSegMap["R"] = sevSegMap["r"]
sevSegMap["s"] = sevSegMap[5]
sevSegMap["T"] = sevSegMap["T"]
sevSegMap["u"] = sevSegMap["U"]
sevSegMap["V"] = sevSegMap["v"]
sevSegMap["W"] = sevSegMap["w"]
sevSegMap["x"] = sevSegMap["X"]
sevSegMap["y"] = sevSegMap["Y"]
sevSegMap["z"] = sevSegMap[2]
# TODO Do I need symbols?


def masker(pinList, representation):
    filtered = [pinList[i] for i in range(len(pinList)) if representation[i]]
    return filtered
