from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/envelope-star/r2.png]

def q1_eye_lash(z1,z2,z3,z4):
    center_line = canvas.create_line(z1,z2,z3,z4,fill="green")


for x in range(15):   
    z1 = x*10
    z2 = 150
    z3 = 150-x/20
    z4 = 150-x*10
    q1_eye_lash(z1,z2,z3,z4)

for x in range(15):   
    z1 = 150-x*10
    z2 = 150
    z3 = 150+x/20
    z4 = 300-x*10
    q1_eye_lash(z1,z2,z3,z4)

for x in range(15):   
    z1 = 150+x*10
    z2 = 150
    z3 = 150-x/20
    z4 = 300-x*10
    q1_eye_lash(z1,z2,z3,z4)

for x in range(16):   
    z1 = 300-x*10
    z2 = 150
    z3 = 150-x/20
    z4 = 150-x*10
    q1_eye_lash(z1,z2,z3,z4)


root.mainloop()