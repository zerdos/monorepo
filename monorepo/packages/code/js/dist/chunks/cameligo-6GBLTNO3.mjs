import{a as e}from"./chunk-XIWW5LMR.mjs";import"./chunk-YUH35O52.mjs";e();var n={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'},{open:"(*",close:"*)"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'},{open:"(*",close:"*)"}]},s={defaultToken:"",tokenPostfix:".cameligo",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["abs","assert","block","Bytes","case","Crypto","Current","else","failwith","false","for","fun","if","in","let","let%entry","let%init","List","list","Map","map","match","match%nat","mod","not","operation","Operation","of","record","Set","set","sender","skip","source","String","then","to","true","type","with"],typeKeywords:["int","unit","string","tz","nat","bool"],operators:["=",">","<","<=",">=","<>",":",":=","and","mod","or","+","-","*","/","@","&","^","%","->","<-","&&","||"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\(\*]+/,"comment"],[/\*\)/,"comment","@pop"],[/\(\*/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}};export{n as conf,s as language};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
