from tkinter import *
import os
root = Tk()
canvas = Canvas(root, width=720, height=720 )
map_size = 10
grid =  [[0,0,0,1,0,0,0,0,0,0,],
        [0,0,0,1,0,1,0,1,1,0,],
        [0,1,1,1,0,1,0,1,1,0,],
        [0,0,0,0,0,1,0,0,0,0,],
        [1,1,1,1,0,1,1,1,1,1,],
        [0,1,0,1,0,0,0,0,1,0,],
        [0,1,0,1,0,1,1,0,1,0,],
        [0,0,0,0,0,1,1,0,1,0,],
        [0,1,1,1,0,0,1,0,1,0,],
        [0,1,1,1,0,0,1,0,0,0,]] 
class Hero(object):
    def __init__(self):
        self.canvas = canvas
        self.look_down = PhotoImage(file='hero-down.png')
        self.cor_x = 36
        self.cor_y = 36
        self.cor_wall = grid[ self.cor_y //72 - 1][ self.cor_x//72] == '1'

    def draw_up(self):
        self.canvas.create_image(self.cor_x, self.cor_y, image=self.look_down)

alma = Hero()


cell_size = 72

floor_img = PhotoImage(file='floor.png')
wall_img  = PhotoImage(file='wall.png')

def draw_map():
    for i in range( map_size):
        for j in range( map_size):
       
            if grid[i][j] == 0:
                canvas.create_image ((cell_size/2)+ cell_size*j, (cell_size/2)+ cell_size*i,image=floor_img)
            elif grid[i][j] == 1:
                canvas.create_image( (cell_size/2)+ cell_size*j,(cell_size/2)+ cell_size*i,image=wall_img)



def drawn_together():
    draw_map()
  



def on_key_press(e):
    # When the keycode is 111 (up arrow) we move the position of our box higher
    if e.keycode == 40 :
        print(alma.cor_wall)
        draw_map()
        alma.cor_y = alma.cor_y + 72
        alma.draw_up()
    elif e.keycode == 38:
        draw_map()
        alma.cor_y -= 72
        alma.draw_up()
    elif e.keycode == 37:
        draw_map()
        alma.cor_x -= 72
        alma.draw_up()
    elif e.keycode == 39:
        draw_map()
        alma.cor_x += 72
        alma.draw_up()
    # and lower if the key that was pressed the down arrow
    # draw the box again in the new position
    alma.draw_up()

# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()







drawn_together()             
#draw_map()
#draw_hero()
canvas.pack()

root.mainloop()







