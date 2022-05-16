
def subStringFunc(word, subString) :
    counter = 0 
    l = len(subString)
    for i in range(len(word)) :
        s = word[i : i+l]
        if s == subString:
            counter+=1
    return counter

word = input('masukan kata : ')
subString = input('Masukan subkata : ')
print(subStringFunc(word, subString))




