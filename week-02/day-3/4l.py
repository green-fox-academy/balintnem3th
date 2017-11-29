shop_items = ["Cupcake", 2, "Brownie", False]

# Accidentally we added "2" and "false" to the list. 
# Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
# No, don't just remove the items :)

for x in shop_items:
    if type(x) == type(42):
        shop_items[x-1]= ("Croissant")
    if type(x) == type(False):
        shop_items[x-1]= ("Ice cream")
print(shop_items)