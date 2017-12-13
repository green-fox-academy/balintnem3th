class Garden(object):
    
    def __init__(self):
        self._tree_list = []
        self._flower_list = []

    def push_flower(self,flower):
        self._flower_list.append(flower)
    
    def push_tree(self,tree):
        self._tree_list.append(tree)

    def show_info(self):

        for i in self._flower_list:
            if i._water_amount<5:
                print("The {} flower  needs water".format(i._color) )
            else:
                 print("The {} flower doesnt need water".format(i._color) )

        print('\n')

        for i in self._tree_list:
            if i._water_amount<10:
                print("The {} tree  needs water".format(i._color) )
            else:
                 print("The {} tree doesnt need water".format(i._color) )

    def watering(self,water_number):

        flower_counter =0

        for i in self._flower_list:
            if i._water_amount<5:
                flower_counter += 1
            else:
                pass
        
        tree_counter = 0

        for i in self._tree_list:
            if i._water_amount<10:
                tree_counter += 1
            else:
                pass

        all_counter = flower_counter + tree_counter
        how_much_water = water_number/all_counter

        for i in self._flower_list:
            if i._water_amount<5:
                i._water_amount += (how_much_water * 0.75)
        
        for i in self._tree_list:
            if i._water_amount<10:
                i._water_amount += (how_much_water * 0.4)



class Flower(object):
    
    def __init__(self,color,water_amount):
        self._water_amount = water_amount
        self._color = color


class Tree(object):
    
    def __init__(self,color,water_amount):
        self._water_amount = water_amount
        self._color = color



kert = Garden()

rozsa = Flower('piros',1)
tulipan = Flower('kek',1)
virag = Flower('valami',3)
virag1 = Flower('valami',3)
virag2 = Flower('valami',3)
virag3 = Flower('valami',3)
virag4 = Flower('valami',3)

kert.push_flower(rozsa)
kert.push_flower(tulipan)
kert.push_flower(virag)
kert.push_flower(virag1)
kert.push_flower(virag2)
kert.push_flower(virag3)
kert.push_flower(virag4)

alma = Tree('piros',5)
korte = Tree('sarga',9)
barack = Tree('narancs',2)
barack1 = Tree('narancs',2)
barack2 = Tree('narancs',2)
barack3 = Tree('narancs',2)
barack4 = Tree('narancs',2)
barack5 = Tree('narancs',2)

kert.push_tree(alma)
kert.push_tree(korte)
kert.push_tree(barack)
kert.push_tree(barack1)
kert.push_tree(barack2)
kert.push_tree(barack3)
kert.push_tree(barack4)
kert.push_tree(barack5)

kert.show_info()
print('----------40 water locsolás után-----------------')
kert.watering(40)
kert.show_info()
print('----------70 locsolás után-------------------')
kert.watering(70)
kert.show_info()
