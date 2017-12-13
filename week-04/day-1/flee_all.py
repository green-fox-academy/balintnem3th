class Fleet(object):
    def __init__(self):
        self.things = []

    def add(self, thing):
        self.things.append(thing)

    def __str__(self):
        result = ""
        for i in range(0, len(self.things)):
            result += str(i+1) + ". " + self.things[i].__str__() + "\n"
        return result

class Thing:
    def __init__(self, name):
        self.name = name
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        return ("[x] " if self.completed else "[ ] ") + self.name

fleet = Fleet()
# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch
thing = Thing("Get Milk")
thing2 = Thing("Remove the obstacles")
thing3 = Thing("Stand Up")
thing3.complete()
thing4 = Thing("Eat Lunch")
thing4.complete()

fleet.add(thing)
fleet.add(thing2)
fleet.add(thing3)
fleet.add(thing4)


print(fleet)