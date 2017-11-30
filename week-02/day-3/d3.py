accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

# Create function that returns the name and balance of cash on an account

# Create function that transfers an amount of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - amount to transfer
#
# Print "404 - account not found" if any of the account numbers don't exist

def get_info(akkont):
    infok = []
    for x in accounts:
        if x['account_number'] == akkont:
            infok.append(x['client_name'])
            infok.append(x['balance'])
    return infok
    
#print(get_info(11234543))

def transfer(from_akk,to_akk,amount):
    akk1_amount = 0
    akk2_amount = 0
    hiba1 = True
    hiba2 = True
    for x in accounts:
        if x['account_number'] == from_akk:
            akk1_amount = x['balance']
            hiba1 = False
        if x['account_number'] == to_akk:
            akk2_amount = x['balance']
            hiba1 = False
    if hiba1 == False or hiba2 == False:
        print("404 - account not found if any of the account numbers don't exist")  
    akk1_amount-=amount
    akk2_amount+=amount

transfer(1123443,43546731,7000000)



























#transfer(11234543)
