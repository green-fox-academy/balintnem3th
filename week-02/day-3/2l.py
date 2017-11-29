# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"]
boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"]
order=''
#order = zip (girls,boys)
#print(list(order)) 
for x in range(len(girls)):
    order+=girls[x] + ' '+ boys[x]+ ' '
lista= [order]

print(lista)

