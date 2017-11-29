students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def more_candies(lista):
        whos_got = ' '
        for x in lista:
                if x['candies']>4:
                    whos_got += x['name'] + ' '
        print(whos_got)

def how_many_candies(lista):
        total_candies = 0
        total_ppl = 0
        for x in lista:
            total_candies+=x['candies']
            total_ppl += 1
               
        print(total_candies/total_ppl)
        

more_candies(students)
how_many_candies(students)