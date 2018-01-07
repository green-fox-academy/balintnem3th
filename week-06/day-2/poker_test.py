import unittest
from poker import *
class TestStringMethods(unittest.TestCase):

    
    def test_create_deck(self):
        self.assertEqual(game.create_deck(), ['1C', '1D', '1H', '1S', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', 'TC', 'TD', 'TH', 'TS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS', 'AC', 'AD', 'AH', 'AS'],'not working')

    def test_draw_5(self):
        self.assertEqual(len(game.draw_5()),5,'not working')

    def test_draw_5_is_in_deck(self):
        game.draw_5()
        self.assertEqual(game.draw_is_unique(),True,'not working')
    
    def test_highest_value_1(self):
        game.hand = ['2H', '3D', '5S', '9C', 'KD']
        self.assertEqual(game.get_highest_value(),13,'not working')

    def test_highest_value_2(self):
        game.hand = ['2H', '4S', '4C', '2D', '4H' ]
        self.assertEqual(game.get_highest_value(),4,'not working') 
    
    def test_which_hand_has_higher_value(self):
        white.hand = ['1S','2S','3S','4S','5S']
        black.hand = ['1S','2S','3S','4S','6S']
        self.assertEqual(white.get_highest_value()<black.get_highest_value(),True,'not working') 

if __name__ == '__main__':
    unittest.main()     