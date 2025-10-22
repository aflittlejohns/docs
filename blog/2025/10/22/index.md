---
slug: phase-3-day-5
title: Phase 3 - PLC Optimisation - 
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising FaultTDAlsafe
2. Updating FaultTDAlsafe block calls in
   1. AerationSIPSeq02 ...FB
   2. AerationSIPSeq03 ...FB
   3. LevelFaults ...FC
   4. OtherFaults ...FC
   5. TankPressure ...FC
   6. TT_BrokenFaults ...FC
   7. TempGuards
   8. AerationAlarms ...FC
   9. AerationProductCool ...FB
   10. AerationProductXfer ...FB
   11. AerationBarrierCool ...FB
   12. AerationSteamBarrier ...FB
3. Optimising SblResetTmpLoggData ...FC
## FBD migration Negated EN Issue
<!-- truncate -->

### The issue

Whilst writing the SCL code for the new FB LevelFaults which is to replace the original LevelFaults FC, by following the 
automatically migrated FBD code, questioned the result of the following network.

![img.png](/img/2025/10/22/img.png)

S7 classic code was this

![img1.png](/img/2025/10/22/img1.png)

Wrote SCL code as described in original S7 Classic FBD logic

![img2.png](/img/2025/10/22/img2.png)

## Optimising FaultTDAlsafe

## Update Block Calls of FaultTDAlsafe

## Optimising FaultTDAlsafe

### Method

Deleted this function as logging in not used in the project.

Plus deleted the networks where Called, in the follow blocks;
1. Sterilization
2. XferInlet1
3. Empty
4. SWFlush
5. Shutdown
6. CIP
7. Agitation
8. SteamBarriers
9. Maintenance
10. XferAFM1
11. XferAFM2
