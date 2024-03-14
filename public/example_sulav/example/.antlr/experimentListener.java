// Generated from c://JavaLib//example//experiment.g by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link experimentParser}.
 */
public interface experimentListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link experimentParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(experimentParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link experimentParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(experimentParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Expr}
	 * labeled alternative in {@link experimentParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpr(experimentParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Expr}
	 * labeled alternative in {@link experimentParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpr(experimentParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Num}
	 * labeled alternative in {@link experimentParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNum(experimentParser.NumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Num}
	 * labeled alternative in {@link experimentParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNum(experimentParser.NumContext ctx);
}