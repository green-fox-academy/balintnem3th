from random import *


class Deck():
    def __init__(self):
        self.values = ['1','2','3','4','5','6','7','8','9','T','J','Q','K','A']
        self.colors = ['C','D','H','S']
        self.is_unique = False
        self.deck = []
        self.hand = []
       

    def create_deck(self):
        for value in self.values:
            for color in self.colors:
                self.deck.append(value + color)
        return self.deck

    def draw_5(self):
        for i in range(5):
            random_index = randrange(0,len(self.deck))
            self.hand.append(self.deck[random_index])
        return self.hand
    
    def draw_is_unique(self):       
        for index in range(len(self.hand)):
            if (self.hand[index]) in self.deck:
                self.is_unique = True
            else:
                self.is_unique = False
        return self.is_unique

    def get_highest_value(self):
        max_value = 0 
        card_value = 0
        for card in self.hand:
            card_value = self.values.index(card[0])+1
            if card_value> max_value:
                max_value = card_value
        return max_value

    def count_equal_cards(self):
        equal_cards = []
        card_counter = 1
        for index1 in range(len(self.hand)):
            print(str(self.hand[index1][0]))
            for index2 in range(len(self.hand)):
                if self.hand[index1][0] == self.hand[index2][0]:
                    card_counter +=1
            equal_cards.append(card_counter)
        print('                 ')
        for i in equal_cards:
            print(str(i))



        


game = Deck()
white = Deck()
black = Deck()
black.create_deck()
black.draw_5()
black.count_equal_cards()
#print(game.create_deck()) 

