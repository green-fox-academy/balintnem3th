class Person(object):

    def __init__(self, name='John Doe',age=30,gender='female'):
        self._name = name
        self._age = age
        self._gender = gender

    def introduce(self):
        return print("Hi, I'm  {} a {} year old {} ".format( self._name ,self._age,self._gender) )

    def get_goal(self):
        return print("My goal is: Live for the moment!")



class Student(Person):

    def __init__(self, name='John Doe',age=30,gender='female',previous_organization= 'The School of Life',skipped_days=0):
        super().__init__(name,age,gender)
        self._previous_organization = previous_organization
        self._skipped_days = skipped_days

    def get_goal(self):
        return print( "Be a junior software developer.")

    def skip_days(self,days_of_number):
        self._skipped_days += days_of_number
        return self._skipped_days

    def introduce(self):
        return print("Hi, I'm  {} a {} year old {} from {}  who skipped {} days from the course already. ".format( self._name ,self._age,self._gender,self._previous_organization,self._skipped_days) )



class Mentor(Person):

     def __init__(self, name='John Doe',age=30,gender='female',level='intermediate'):
        super().__init__(name,age,gender)
        self._level = level

     def get_goal(self):
        return print( "Educate brilliant junior software developers.")

     def introduce(self):
        return print("Hi, I'm  {} a {} year old {}  {} level mentor".format( self._name ,self._age,self._gender,self._level) )
    

        
class Sponsor(Person):

    def __init__(self, name='John Doe',age=30,gender='female',company = "Google", hired_students=0):
        super().__init__(name,age,gender)
        self._company = company
        self._hired_students = hired_students

    def introduce(self):
        return print("Hi, I'm  {} a {} year old {} who represents {} and hired {} students so far.".format( self._name ,self._age,self._gender,self._company,self._hired_students) )

    def hire(self):
        self._hired_students += 1
        return self._hired_students
        
    def get_goal(self):
        return print("Hire brilliant junior software developers.")

class PallidaClass(object):

    def __init__(self, class_name):    
        self._class_name = class_name
        self._student_list = []
        self._mentor_list = []

    def add_student(self,student):
        self._student_list.append(student)
        return self._student_list
    
    def add_mentor(self,mentor):
        self._mentor_list.append(mentor)
        return self._mentor_list
        
    def info(self):
        return print("Pallida {} class has {} students and {} mentors.".format(self._class_name,len(self._student_list),len(self._mentor_list)))





people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
people.append(elon)
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()

badass = PallidaClass('BADA55')
badass.add_student(student);
badass.add_student(john);
badass.add_mentor(mentor);
badass.add_mentor(gandhi);
badass.info();