class Aircraft(object):

    def __init__(self,name):
        self._name = name
        self._max_ammo = 0
        self._base_dmg = 0
        self._ammo = 0

    def init_type(self):
        if self._name == "F16":
            self._max_ammo = 8
            self._base_dmg = 16
        else:
            self._max_ammo = 12
            self._base_dmg = 50

    def fight(self):
        dmg_dealt = ammo * base_dmg
        return dmg_dealt

    def show_info(self):
        return print('Base_dmg : {} max_ammo : {}'.format(self._base_dmg,self._max_ammo))
    
  
F16 = Aircraft("F16")
F16.init_type()
F16.show_info()
    
        
    