---
title: Phase 3 - PLC Optimisation -
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising "ALS Compare2RealArea"
2. Optimising "ALS_StepEngine"



<!-- truncate -->

## ALS Compare2RealArea

This function is used to compare the parameter values of two arrays of the Real data type.

### Method

Deleted the original function and created a new function in SCL

```text
FUNCTION "ALS Compare2RealArea" : Void

{ S7_Optimized_Access := 'TRUE' }
VERSION : 0.1
VAR_INPUT
  enable : Bool;
  indexRecipe1 : DInt;
  indexRecipe2 : DInt;
END_VAR

VAR_OUTPUT
  out : Bool;
END_VAR

VAR_IN_OUT
  recipes1 : Array[*] OF "_USR_Recipe";
  recipes2 : Array[*] OF "_USR_Recipe";
END_VAR

VAR_TEMP
  tempLowerBoundRecipe1 : DInt;
  tempLowerBoundRecipe2 : DInt;
  tempUpperBoundRecipe1 : DInt;
  tempUpperBoundRecipe2 : DInt;
  tempLimitedIndex1 : DInt;
  tempLimitedIndex2 : DInt;
END_VAR

VAR CONSTANT

END_VAR


BEGIN
	#tempLowerBoundRecipe1 := LOWER_BOUND(ARR := #recipes1, DIM := 1);
	#tempUpperBoundRecipe1 := UPPER_BOUND(ARR := #recipes1, DIM := 1);
	#tempLowerBoundRecipe2 := LOWER_BOUND(ARR := #recipes2, DIM := 1);
	#tempUpperBoundRecipe2 := UPPER_BOUND(ARR := #recipes2, DIM := 1);
	
	IF #enable THEN
	  // Limit index within array bounds
	  #tempLimitedIndex1 :=
	  LIMIT_DINT(MN := #tempLowerBoundRecipe1, IN := #indexRecipe1, MX := #tempUpperBoundRecipe1);
	  #tempLimitedIndex2 :=
	  LIMIT_DINT(MN := #tempLowerBoundRecipe2, IN := #indexRecipe2, MX := #tempUpperBoundRecipe2);
	  
	  #out := #recipes1[#tempLimitedIndex1] <> #recipes2[#tempLimitedIndex2];
	  
	ELSE
	  #out := FALSE;
	END_IF;
END_FUNCTION

```

## ALS StepEngine

:::danger
Search project for "Commented Out to Compile"
:::

This function takes in, on it's `Steps` formal parameter, various UDT's or Array of bools of various length and modifies a bit within the given structure
depending on a given `stepNumber`

Pointers were used in the original classic program which aren't suitable for optimization. To resolve the issue it is
intended to replace the UDT of bool's for each Step bit to an UDT containing an array of bools representing where each
bit represents a sequence. For readability the boolean arrays with start and end at an index value which represents both
the phase and step of that phase.

For example, take the `Sterilization` phase. Step numbers and therefore array index number are in the range 100 to 199.