# Generated from experiment.g by ANTLR 4.13.1
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO

def serializedATN():
    return [
        4,1,6,23,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,13,
        8,1,10,1,12,1,16,9,1,1,1,1,1,1,1,3,1,21,8,1,1,1,0,0,2,0,2,0,0,22,
        0,4,1,0,0,0,2,20,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,6,1,1,0,0,0,7,8,
        5,5,0,0,8,9,5,1,0,0,9,14,3,2,1,0,10,11,5,2,0,0,11,13,3,2,1,0,12,
        10,1,0,0,0,13,16,1,0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,17,1,0,0,
        0,16,14,1,0,0,0,17,18,5,3,0,0,18,21,1,0,0,0,19,21,5,4,0,0,20,7,1,
        0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,2,14,20
    ]

class experimentParser ( Parser ):

    grammarFileName = "experiment.g"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'('", "','", "')'" ]

    symbolicNames = [ "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "NUMBER", "IDENTIFIER", "WS" ]

    RULE_start = 0
    RULE_expression = 1

    ruleNames =  [ "start", "expression" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    T__2=3
    NUMBER=4
    IDENTIFIER=5
    WS=6

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.13.1")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class StartContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self):
            return self.getTypedRuleContext(experimentParser.ExpressionContext,0)


        def EOF(self):
            return self.getToken(experimentParser.EOF, 0)

        def getRuleIndex(self):
            return experimentParser.RULE_start

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterStart" ):
                listener.enterStart(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitStart" ):
                listener.exitStart(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitStart" ):
                return visitor.visitStart(self)
            else:
                return visitor.visitChildren(self)




    def start(self):

        localctx = experimentParser.StartContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_start)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 4
            self.expression()
            self.state = 5
            self.match(experimentParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ExpressionContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return experimentParser.RULE_expression

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)



    class ExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a experimentParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def IDENTIFIER(self):
            return self.getToken(experimentParser.IDENTIFIER, 0)
        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(experimentParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(experimentParser.ExpressionContext,i)


        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterExpr" ):
                listener.enterExpr(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitExpr" ):
                listener.exitExpr(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitExpr" ):
                return visitor.visitExpr(self)
            else:
                return visitor.visitChildren(self)


    class NumContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a experimentParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def NUMBER(self):
            return self.getToken(experimentParser.NUMBER, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterNum" ):
                listener.enterNum(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitNum" ):
                listener.exitNum(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitNum" ):
                return visitor.visitNum(self)
            else:
                return visitor.visitChildren(self)



    def expression(self):

        localctx = experimentParser.ExpressionContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_expression)
        self._la = 0 # Token type
        try:
            self.state = 20
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [5]:
                localctx = experimentParser.ExprContext(self, localctx)
                self.enterOuterAlt(localctx, 1)
                self.state = 7
                self.match(experimentParser.IDENTIFIER)
                self.state = 8
                self.match(experimentParser.T__0)

                self.state = 9
                self.expression()
                self.state = 14
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                while _la==2:
                    self.state = 10
                    self.match(experimentParser.T__1)
                    self.state = 11
                    self.expression()
                    self.state = 16
                    self._errHandler.sync(self)
                    _la = self._input.LA(1)

                self.state = 17
                self.match(experimentParser.T__2)
                pass
            elif token in [4]:
                localctx = experimentParser.NumContext(self, localctx)
                self.enterOuterAlt(localctx, 2)
                self.state = 19
                self.match(experimentParser.NUMBER)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx





