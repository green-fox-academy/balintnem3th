from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]





def q1_eye_lash(z1,z2,z3,z4):
    center_line = canvas.create_line(z1,z2,z3,z4,fill="red")



for x in range(16):   
    z1 = x*10
    z2 = 150
    z3 = x/20
    z4 = x*10
    q1_eye_lash(z1,z2,z3,z4)

for x in range(16):   
    z1 = 300-(x*10)
    z2 = 150
    z3 = 300-x/20
    z4 = x*10
    q1_eye_lash(z1,z2,z3,z4)

for x in range(16):   
    z1 = 150+(x*10)
    z2 = 150
    z3 = 300-(x/20)
    z4 = 150+(x*10)
    q1_eye_lash(z1,z2,z3,z4)

for x in range(16):   
    z1 = 150-(x*10)
    z2 = 150
    z3 = (x/20)
    z4 = 150+(x*10)
    q1_eye_lash(z1,z2,z3,z4)

root.mainloop()