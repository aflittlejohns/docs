---
slug: phase-1-investigation-day-6
title: Phase 1 - Investigation - Migrating PLC
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal ]
---

## Today's Tasks
1.  Begin creation of SCL functions which didn't migrate.
    1. [Is _STD_DB_BUFFER [DB190] actually employed?](https://github.com/pfAuto/project-uni/issues/26) ✅ 
    2. [Create replacement for "SBL Reset Tmp Logg Data"](https://github.com/pfAuto/project-uni/issues/22) ✅
    3. [Investigate Danfoss VLT [FC2007]](https://github.com/pfAuto/project-uni/issues/18) ✅
<!-- truncate -->
## Is _STD_DB_BUFFER [DB190] actually employed?
### Method
1. Investigated the sql `TPM database` for table names which included the word "log" and viewed the top 1000 rows from each.
2. Investigated the `TPOperatorDB` for table with log in their name and queried, ordering by date in descending order to get the most recent entries.
3. __WW tags of interest__ in investigation of WW SCADA app.
- MemM_OPLoggerItem
- STD_MemM_OperLogging
- STD_MemM_ForceLog
- STD_MemM_ForceLogging
- STD_MemM_ParLog
- STD_MemM_ParLogging
- MemM_OPLoggerItem
- STD_MemM_LogStepDesc
### Results
1. _TPM_
- There were no data records in the observed database tables.

2. _TPOperatorDB_
- There are recent entries in this table, warranting further investigation into the data source.

### Conclusion
- The SCADA system is not storing data from "_STD_DB_BUFFER"
- PLC - Cannot find evidence of DB190 access from SCADA/HMI. However, the contents of DB190 maybe mapped to another location, via methods which don't show  in a Cross-Ref. Considering time required for further investigation , decided to not define a new UDT190
to enable slice operations, but instead to employ a non-optimised block interface and employ the AT instruction to enable access to W0 of the String variables, [String0 , String1]

## Create replacement for "SBL Reset Tmp Logg Data"

created "SblResetTmpLoggData"

```
FUNCTION "SblResetTmpLoggData" : Void
{ S7_Optimized_Access := 'FALSE' }
VERSION : 0.1
   VAR_OUTPUT 
      LoggData : "_STD_LOG_Data";
   END_VAR

   VAR_TEMP 
      string0 : String[30];
      string0Word AT string0 : Array[0..15] of Word;
      string1 : String[20];
      string1Word AT string1 : Array[0..10] of Word;
   END_VAR


BEGIN
	#LoggData.I1 := l#0;
	#LoggData.I2 := l#0;
	#LoggData.I4 := l#0;
	#LoggData.I5 := l#0;
	#LoggData.I6 := l#0;
	#LoggData.I7 := l#0;
	#LoggData.I8 := l#0;
	#LoggData.I9 := l#0;
	#LoggData.I10 := l#0;
	#LoggData.I11 := l#0;
	#LoggData.I12 := l#0;
	#LoggData.I13 := l#0;
	#LoggData.I14 := l#0;
	#LoggData.I15 := l#0;
	#LoggData.I16 := l#0;
	#LoggData.I17 := l#0;
	#LoggData.I18 := l#0;
	#LoggData.I19 := l#0;
	
	#LoggData.Real0 := 0.0;
	#LoggData.Real1 := 0.0;
	#LoggData.Real2 := 0.0;
	#LoggData.Real3 := 0.0;
	#LoggData.Real4 := 0.0;
	
	#string0Word[0] := W#16#1E00;
	#string1Word[0] := W#16#1400;
	
	#LoggData.String0 := #string0;
	#LoggData.String1 := #string1;
	
	
	
	
END_FUNCTION

```

See [Replace usage of SBL Reset Tmp Logg Data](https://github.com/pfAuto/project-uni/issues/25) for details.

## Investigate Danfoss VLT 
Viewing the classic program on-line revealed that the all drives had a comms fault and the comms fault was not used.

See :- [Investigate Danfoss VLT](https://github.com/pfAuto/project-uni/issues/18)

## Compile Error: _STD_LogCopyToBuffer

### F1 help
```text
Help on message 604:4549 
Description

The error occurred because you are using an instruction that accesses the DB or
 DI register. However, you did not load a DB to the register beforehand.

Examples of instructions that access the DB/DI register are:

L DBNO

The instruction loads the number of a global data block opened via the data 
block register into accumulator 1.

L DINO

The instruction loads the number of an instance data block opened via the data 
block register into accumulator 1.

Partially qualified addressing

The addressing of DB tags without specification of the DB name or DB number is
 referred to as partially qualified addressing (for example, L %DBW0). 
 The program accesses the data block that is currently in the DB or DI 
 register. 

Resolution 

You have the following options to remedy the error:

Enter a fully qualified address. Fully qualified addresses include the 
specification of a data block (e.g. L %DB1.DBW0 or L "Motor".Value).

Load a DB to the DB register with the instruction OPN or OPN DI.

Note 

Parameter passing via registers

On S7-1500 CPUs, the values from the registers, accumulators and the status 
word are generally never transferred to called blocks. The instructions "CC"
and "UC" are the only exceptions. If you use "UC" or "CC" and want to pass the 
parameters to the called block by using registers, the status word or 
accumulators, you have to select the "Parameter passing via registers" option
in the properties of the called block. Note that this option is only available
for STL blocks with standard access and the block can have no formal 
parameters.
 


For additional information, refer to "See also".


--------------------------------------------------------------------------------

See also 

Migration of STL programs to S7-1500 (S7-1500) 


```

## References