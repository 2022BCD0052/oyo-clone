# Generated from experiment.g by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .experimentParser import experimentParser
else:
    from experimentParser import experimentParser

# This class defines a complete generic visitor for a parse tree produced by experimentParser.

class experimentVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by experimentParser#start.
    def visitStart(self, ctx:experimentParser.StartContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by experimentParser#Expr.
    def visitExpr(self, ctx:experimentParser.ExprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by experimentParser#Num.
    def visitNum(self, ctx:experimentParser.NumContext):
        return self.visitChildren(ctx)



del experimentParser