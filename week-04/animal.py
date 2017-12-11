class Animal(object):
    def __init__(self,hunger=50,thirst=50):
        self.hunger = hunger
        self.thirst = thirst

    def eat(self):
        self.hunger -= 1
        return self.hunger

    def drink(self):
        self.thirst -= 1
        return self.thirst

    def play(self):
        self.hunger += 1
        self.thirst += 1
        return self.thirst,self.hunger

maci = Animal()

print(maci.play())