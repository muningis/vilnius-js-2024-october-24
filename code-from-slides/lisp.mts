type Code = `
  (Def x "Hello")
  (Def y "World")
  (Join x " " y)
`;
// Tokenize
type Tokens = Tokenize<Code>;
// Parse
type Parsed = Parse<Tokens>;
// Analyze
type Analyzed = AnalyzeSequence<Parsed>;
// Final result
type Result = EvalAndReturnLast<{}, Analyzed>; // "Hello World"