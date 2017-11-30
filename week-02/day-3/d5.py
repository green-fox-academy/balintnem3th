# Create a function that prints the ingredient list of dictionaries to the console in the following format:
#
# +--------------------+---------------+----------+
# | Ingredient         | Needs cooling | In stock |
# +--------------------+---------------+----------+
# | vodka              | Yes           | 1        |
# | coffee_liqueur     | Yes           | -        |
# | fresh_cream        | Yes           | 1        |
# | captain_morgan_rum | Yes           | 2        |
# | mint_leaves        | No            | -        |
# +--------------------+---------------+----------+
#
# OPTIONAL:
# The frist columns should be automatically as wide as the longest key

ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": True },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": True },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": True },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": True },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": False },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": False },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": True },
	{ "name": "soda", "in_stock": 0, "needs_cooling": True }
]

def draw_table(dictionary):
    longest_length=0
    for i in dictionary:
        if len(i['name'])>longest_length:
            longest_length=len(i['name'])
        
    print(longest_length)

    print('+' + ('-' * (longest_length)) + '+' + '-' * 14 + '-+'+ ('-'*9)+ '+' )
    print('|' +' '*(int((longest_length/2))-5) + 'Ingredient' +' '*(int((longest_length/2))-5)+'| ' + 'Needs cooling | In sock |' )
    print('+' + ('-' * (longest_length)) + '+' + '-' * 14 + '-+'+ ('-'*9)+ '+' )
    for i in dictionary:
        valtozo = len(i['name'])
        print('|' + i['name'] +' '*(18-valtozo)+ '|' ,end="")
        if i['needs_cooling'] == True:
            if i['in_stock'] == 0 :
                 print(' YES' + (' '*10)+ ' |' + ' '+ '-'+ ' '*7+ '|')
            else:
                 print(' YES' + (' '*10)+ ' |' + ' '+ str(i['in_stock'])+ ' '*7+ '|')
        else:
            if i['in_stock'] == 0 :
                 print(' NO'+ (' '*11)+ ' |' + ' '+ '-'+ ' '*7+ '|')
            else:
                 print(' NO'+ (' '*11)+ ' |' + ' '+ str(i['in_stock'])+ ' '*7+ '|')
    print('+' + ('-' * (longest_length)) + '+' + '-' * 14 + '-+'+ ('-'*9)+ '+' )


draw_table(ingredients)

