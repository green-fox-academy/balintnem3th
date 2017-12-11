class Station(object):
    def __init__(self,gas_amount):
        self.gas_amount = gas_amount

    def refill(self,capacity):
        self.gas_amount -= capacity
        kocsi.gas_amount += capacity


class Car(object):
    def __init__(self,gas_amount=0,capacity=100):
        self.gas_amount = gas_amount
        self.capacity = capacity

kocsi = Car()
allomas = Station(1000)
print(allomas.gas_amount)
print(kocsi.gas_amount)
print(kocsi.capacity)


allomas.refill(5)


print(allomas.gas_amount)
print(kocsi.gas_amount)
print(kocsi.capacity)