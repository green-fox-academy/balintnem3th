def controll():
    def on_key_press(e):
        if e.keycode == 40 and hero.cor_y < 684 :
            map.draw_map()
            if(grid[hero.grid_pos_y+1][hero.grid_pos_x] != 1):
                hero.grid_pos_y += 1
                hero.cor_y = hero.cor_y + 72
                hero.draw_down()
            else:
                hero.draw_down()
        elif e.keycode == 38 and hero.cor_y > 36:
            map.draw_map()
            if(grid[hero.grid_pos_y-1][hero.grid_pos_x] != 1):
                
                hero.grid_pos_y -=1
                hero.cor_y -= 72
                hero.draw_up()
            else:
                hero.draw_up()
        elif e.keycode == 37 and hero.cor_x > 36:
            map.draw_map()
            if(grid[hero.grid_pos_y][hero.grid_pos_x-1] != 1):
                hero.grid_pos_x -=1
                hero.cor_x -= 72
                hero.draw_left()
            else:
                hero.draw_left()
        elif e.keycode == 39 and hero.cor_x < 684:
            map.draw_map()
            if(grid[hero.grid_pos_y][hero.grid_pos_x+1] != 1):
                hero.grid_pos_x +=1
                hero.cor_x += 72
                hero.draw_right()
            else:
                hero.draw_right()
        
    
