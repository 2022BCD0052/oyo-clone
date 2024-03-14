grammar experiment;

start: expression EOF;

expression: IDENTIFIER '(' (expression) (',' expression)* ')' 						#Expr
			| NUMBER							#Num
			;

NUMBER: [+-]?([0-9]+([.][0-9]*)?|[.][0-9]+);
IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;
WS   : [ \t\r\n]+ -> skip;