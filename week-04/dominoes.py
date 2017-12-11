
class Domino(object):
    def __init__(self, value_a, value_b):
        self.values = [value_a, value_b]

    def __repr__(self):
        return '[{}, {}]'.format(self.values[0], self.values[1])


def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(1, 5))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(7, 1))
    return dominoes



dominoes = initialize_dominoes()
orderd_dominoes=[]

orderd_dominoes.append(dominoes[0])
while len(orderd_dominoes) != len(dominoes):
    for x in dominoes:
        if orderd_dominoes[-1].values[1] == x.values[0]:
            orderd_dominoes.append(x) 

for x in orderd_dominoes:
    print(x)







       




