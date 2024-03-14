from antlr4 import *
from experimentLexer import experimentLexer
from experimentParser import experimentParser
from visitor import Visitor

input_stream = InputStream(input('Enter your expression : '))

lexer = experimentLexer(input_stream)
token_stream = CommonTokenStream(lexer)
parser = experimentParser(token_stream)
tree = parser.start()

print(tree.toStringTree(recog=parser))
print('\n')
visitor = Visitor()
print(visitor.visitStart(tree))