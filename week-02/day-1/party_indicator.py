girls = input("Number of the girls ")
boys = input("Number of the boys ")

if (int(girls) == int(boys)) &  ((int(girls)+ int(boys)) > 20):
    print("The party is exellent!")
elif int(girls) != int(boys) & ( (int(girls)+ int(boys)) > 20):
    print(" Quite cool party!")
elif int(girls)<=0:
    print( "Sausage party")
elif (int(girls)+ int(boys)) < 20:
    print(" Average party...")
