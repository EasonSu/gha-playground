console.log( `echo "::error file=js/src/app.js,line=7,endLine=7,col=8,endColumn=22::[no-unused-vars] 'unusedVariable' is assigned a value but never used."` );
console.log( `echo "::error file=js/src/app.js,line=7,endLine=7,col=25,endColumn=30::[prettier/prettier] Replace \`"hey"\` with \`'hey'\`"` );
console.log( `echo "::error file=js/src/app.js,line=9,endLine=9,col=7,endColumn=8::[no-undef] 'a' is not defined."` );
console.log( `echo "::error file=js/src/app.js,line=9,endLine=9,col=9,endColumn=11::[eqeqeq] Expected '===' and instead saw '=='."` );
console.log( `echo "::error file=js/src/app.js,line=10,endLine=10,col=3,endColumn=14::[no-console] Unexpected console statement."` );
console.log( `echo "::warning file=/Users/eason/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/google-listings-and-ads/js/src/app.js,line=18,endLine=18,col=5,endColumn=14::[react-hooks/exhaustive-deps] React Hook useMemo has a missing dependency: 'newValue'. Either include it or remove the dependency array."` );
