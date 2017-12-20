from model import *
import os
from tkinter import *

root = Tk()
canvas = Canvas(root, width=720, height=720 )
map= Map(canvas)
map.draw_map()
hero=Hero(canvas)
skeleton = Skeleton(canvas)
skeleton.draw_skeleton()
hero.draw_down()
grid = map.map_grid

def on_key_press(e):
    if e.keycode == 40 and hero.cor_y < 684 :
        map.draw_map()
        skeleton.draw_skeleton()
        if(grid[hero.grid_pos_y+1][hero.grid_pos_x] != 1):
            hero.move_down()
            hero.draw_down()
        else:
            hero.draw_down()
    elif e.keycode == 38 and hero.cor_y > 36:
        map.draw_map()
        skeleton.draw_skeleton()
        if(grid[hero.grid_pos_y-1][hero.grid_pos_x] != 1):
            hero.move_up()
            hero.draw_up()
        else:
            hero.draw_up()
    elif e.keycode == 37 and hero.cor_x > 36:
        map.draw_map()
        skeleton.draw_skeleton()
        if(grid[hero.grid_pos_y][hero.grid_pos_x-1] != 1):
            hero.move_left()
            hero.draw_left()
        else:
            hero.draw_left()
    elif e.keycode == 39 and hero.cor_x < 684:
        map.draw_map()
        skeleton.draw_skeleton()
        if(grid[hero.grid_pos_y][hero.grid_pos_x+1] != 1):
            hero.move_right()
            hero.draw_right()
        else:
            hero.draw_right()
  

canvas.bind("<KeyPress>", on_key_press)
canvas.pack()
canvas.focus_set()

root.mainloop()