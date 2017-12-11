class Student(object):
    def __init__(self, content="I'm a student"):
        self.content = content

    def learn(self):
        self.content += ' I have learned something new'
        return self.content

    def question(self,answer):
        self.content += answer
        return self.content

class Teacher(object):
    def __init__(self, content="I'm a teacher"):
        self.content = content

    def teach(self,learn):
        self.content += learn
        return self.content

    def answer(self):
        self.content += 'I teach'
        return self.content

me = Student()

print(me.question("uj"))