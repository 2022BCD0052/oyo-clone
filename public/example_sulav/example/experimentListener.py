# Generated from experiment.g by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .experimentParser import experimentParser
else:
    from experimentParser import experimentParser

# This class defines a complete listener for a parse tree produced by experimentParser.
class experimentListener(ParseTreeListener):

    # Enter a parse tree produced by experimentParser#start.
    def enterStart(self, ctx:experimentParser.StartContext):
        pass

    # Exit a parse tree produced by experimentParser#start.
    def exitStart(self, ctx:experimentParser.StartContext):
        pass


    # Enter a parse tree produced by experimentParser#Expr.
    def enterExpr(self, ctx:experimentParser.ExprContext):
        pass

    # Exit a parse tree produced by experimentParser#Expr.
    def exitExpr(self, ctx:experimentParser.ExprContext):
        pass


    # Enter a parse tree produced by experimentParser#Num.
    def enterNum(self, ctx:experimentParser.NumContext):
        pass

    # Exit a parse tree produced by experimentParser#Num.
    def exitNum(self, ctx:experimentParser.NumContext):
        pass



del experimentParser