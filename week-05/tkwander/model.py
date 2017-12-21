import os
from tkinter import *
from random import randint


class Map(object):
    def __init__(self,canvas):
        self.canvas = canvas
        self.cell_size = 72
        self.image = "" 
        self.map_size = 10
        self.floor_img =PhotoImage(file='img/floor.png')
        self.wall_img  =PhotoImage(file='img/wall.png')
        self.empty_floor = (0,0)
        self.map_grid = [
            [0,0,0,1,0,0,0,0,0,0,],  
            [0,0,0,1,0,1,0,1,1,0,],
            [0,0,0,0,0,1,0,1,1,0,],
            [0,0,0,0,0,1,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,],
            [0,1,0,1,0,0,0,0,1,0,],
            [0,1,0,1,0,1,1,0,1,0,],
            [0,0,0,0,0,1,1,0,1,0,],
            [0,1,1,1,0,0,1,0,1,0,],
            [0,1,1,1,0,0,0,0,0,0,]] 
        self.empty_floor_list=self.create_empty_floor()
        
       

    def draw_map(self):
        for i in range( self.map_size):
            for j in range( self.map_size):
                if self.map_grid[i][j] == 0:
                    self.canvas.create_image ((self.cell_size/2)+ self.cell_size*j, (self.cell_size/2)+ self.cell_size*i,image=self.floor_img)
                elif self.map_grid[i][j] == 1:
                    self.canvas.create_image( (self.cell_size/2)+ self.cell_size*j,(self.cell_size/2)+ self.cell_size*i,image=self.wall_img)

    def create_empty_floor(self):
        list_floor = []
        for index in range(1, self.map_size):
            for index2 in range(1, self.map_size):
                if self.map_grid[index][index2] == 0:
                    self.empty_floor=(index,index2)
                    list_floor.append(self.empty_floor)
        return list_floor
                 

class Character:
    def __init__(self):
        self.cor_x = 0
        self.cor_y = 0
        self.grid_pos_x = 0
        self.grid_pos_y = 0
        self.image = ""

    def move_up(self):
        self.grid_pos_y -=1
        self.cor_y -= 72
        
    def move_down(self):
        self.cor_y += 72
        self.grid_pos_y += 1
    
    def move_right(self):
        self.cor_x += 72
        self.grid_pos_x += 1
    
    def move_left(self):
        self.cor_x -= 72
        self.grid_pos_x -= 1


class Hero(Character,Map):
    def __init__(self,canvas):
        super().__init__()
        self.canvas = canvas
        self.look_up = PhotoImage(file='img/hero-up.png')
        self.look_down = PhotoImage(file='img/hero-down.png')
        self.look_left = PhotoImage(file='img/hero-left.png')
        self.look_right = PhotoImage(file='img/hero-right.png')
        self.cor_x = 36
        self.cor_y = 36

    def draw_up(self):
        self.canvas.create_image(self.cor_x, self.cor_y, image=self.look_up)

    def draw_down(self):
         self.canvas.create_image(self.cor_x, self.cor_y, image=self.look_down)

    def draw_left(self):
         self.canvas.create_image(self.cor_x, self.cor_y, image=self.look_left)
    
    def draw_right(self):
         self.canvas.create_image(self.cor_x, self.cor_y, image=self.look_right)

class Skeleton(Map):
    def __init__(self,canvas):
          super().__init__(self)
          self.canvas = canvas
          self.empty_floor_list = Map.create_empty_floor(self)
          self.image = PhotoImage(file='img/skeleton.png')  
          self.random1 = randint(0,len(self.empty_floor_list))
          self.cor_x_1 = self.empty_floor_list[self.random1][0]
          self.cor_y_1 = self.empty_floor_list[self.random1][1]
          self.grid_pos_x_1 = self.cor_x_1
          self.grid_pos_y_1 = self.cor_y_1
         
    def draw_skeleton(self):
         self.canvas.create_image(36+self.cor_y_1*72,36+self.cor_x_1*72, image=self.image)
         
    def move_skeleton(self):
        rand_way = 1
        if rand_way == 1:
            if self.map_grid[self.grid_pos_y_1][self.grid_pos_x_1+1] != 1 and self.cor_x_1 < 684:
                 self.cor_x_1 += 72
                 self.grid_pos_x_1 += 1
        self.canvas.create_image(36+self.cor_y_1*72,36+self.cor_x_1*72, image=self.image)

   


