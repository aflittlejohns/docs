---
slug: 2025-10-28

title: Phase 3 - PLC Optimisation -
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising "ALS Compare2RealArea"
2. Optimising 



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