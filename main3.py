# defining the regular function
def welcome(message):
    return message

# defining the higher-order function.
# func parameter is for a function
# name parameter is for a string type variable
def greet(func, name):
    greeting = func("Hi, " + name + "! " + "Welcome to the playground.")
    print(greeting)

greet(welcome, "Alex")
