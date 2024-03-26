import os
files = [f for f in
         os.listdir("/Users/amine/Documents/projet/links_project/Ninks/front/src/assets/icons")]

def kebab_to_camel(kebab_string):
    words = kebab_string.split('-')
    camel_string = words[0] + ''.join(word.capitalize() for word in words[1:])
    return camel_string

for f in files:
    splitedNames = f.split('/')[0].split(".")[0].capitalize()
    iconName = kebab_to_camel(splitedNames)
    #print(iconName)
    print(f'{iconName}:lazy(async () => await import("@assets/icons/{f}")),')






