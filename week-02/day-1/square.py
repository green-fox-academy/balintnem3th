user_input= int(input("Give me a number:"))

print('%'* user_input)
for index in range(1,user_input-1):
    print('%'+ ((user_input-2)* ' ') + '%')
print('%'* user_input)