from experimentVisitor import experimentVisitor
from calc_solver import solver

conversion_dict = {
    'multiply': '*',
    'add': '+',
    'subtract': '-',
    'divide': '/'
}

# add(1,4) --> (1+4)


class Visitor(experimentVisitor):
    def visitStart(self, ctx):
        for item in ctx.getChildren():
            if item.getText() == "<EOF>":
                break
            else:
                exp = self.visit(item)
        return solver(exp)

    def visitStr(self, ctx):
        l = list(ctx.getChildren())
        return l[0].getText()

    def visitExpr(self, ctx):
        exp = []
        for item in ctx.getChildren():
            if conversion_dict.get(item.getText(), None):
                exp.append(conversion_dict[item.getText()])

            elif item.getText() in ['(', ')', ',']:
                continue
            else:
                exp.append(self.visit(item))
        return exp

    def visitNum(self, ctx):
        l = list(ctx.getChildren())
        return l[0].getText()

    def visitId(self, ctx):
        l = list(ctx.getChildren())
        return l[0].getText()
