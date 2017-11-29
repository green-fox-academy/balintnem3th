watchlist = []



queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

# Queue of festival goers at entry
# no. of alcohol units 
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

def security_check(qui):
    security_alcohol_loot = 0
    for x in qui:
        if x['guns']>0 :
            watchlist.append(x['name'])
            del x["name"]
            x['guns'] = 0
        if x['alcohol']>0:
            security_alcohol_loot+=x['alcohol']
            x['alcohol'] = 0
    #print (qui)
    #print(security_alcohol_loot)
    #print(watchlist)


security_check(queue)
    




