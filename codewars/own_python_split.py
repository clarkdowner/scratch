"""
Quite recently it happened to me to join some recruitment interview, where my first task was to write own implementation
of built-in split function. It's quite simple, is it not?

However, there were the following conditions:

the function cannot use, in any way, the original split or rsplit functions,
the new function must be a generator,
it should behave as the built-in split, so it will be tested that way -- think of split() and split('')
This Kata will control if the new function is a generator and if it's not using the built-in split method, so you may
try to hack it, but let me know if with success, or if something would go wrong!

Enjoy!
"""


def my_very_own_split(string, delimiter=None):

    if delimiter == '':
        raise ValueError

    if delimiter is None:
        string = string.replace('\t', ' ')
        while '  ' in string:
            string = string.replace('  ', ' ')
        delimiter = ' '

    last, l = 0, len(delimiter)
    for i in range(len(string)):
        if string[i:i+l] == delimiter:
            yield string[last:i]
            last = i+l
    yield string[last:]
