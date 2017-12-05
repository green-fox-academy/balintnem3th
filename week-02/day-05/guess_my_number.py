from random import randint 
range1 = int(input("Range1:"))
range2 = int(input("Range2:"))
magic_number = randint(range1,range2)

def guess_game(life,guess_number):
    
    print(magic_number)
    lives = int(life)
    guess = guess_number
    while guess != magic_number or lives != 0:
        guess = input("Guess the number:("+ str(lives)+  " lives)")
        if int(guess) < magic_number:
            lives -=1
            print("Too low.You have "+ str(lives)+  " lives)")
        if int(guess) > magic_number:
            lives -=1 
            print("Too high.You have "+ str(lives)+  " lives)")
        if int(guess) == magic_number:
            print("Congratulations. You won!")
            break
        if lives == 0:
            print("You have 0 lives .Game Over!")
            break            
def restart():
    print("You can start over the game ")
    lives= input("How many lives you want to play with? ")
    return lives
        
guess_game(5,magic_number)
bonus_life = restart()
guess_game(bonus_life,magic_number)