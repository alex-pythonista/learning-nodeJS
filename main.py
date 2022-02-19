# # write a program to calculate the area of a circle

# def chksum(data):
#     return (255 - sum(data)) % 256

# print(chksum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

def lhdPositionCode(posStrList):
    code = 0
    for i, p in enumerate(posStrList):
        if p == "li": code = code + 2**(2*i)
        if p == "re": code += 2**(2*i+1)
    return code

#python
# Python program to illustrate
# enumerate function
l1 = ["eat","sleep","repeat"]
s1 = "geek"



# creating enumerate objects
obj1 = enumerate(l1)
obj2 = enumerate(s1)

print ("Return type:",type(obj1))
print (list(enumerate(l1)))

# changing start index to 2 from 0
print (list(enumerate(s1,2)))
