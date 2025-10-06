---
slug: phase-1-investigation-day-4
title: Phase 1 - Investigation - Migrating PLC
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal ]
---

## Today's Tasks
1. Raise PO for HMI and Firewall
2. [Remove Know-How protection from S7 Classic Blocks and re-migrate](https://github.com/pfAuto/project-uni/issues/16)
<!-- truncate -->
## Raise PO for HMI and Firewall

:::info
Received acknowledgement from vendor, of order receipt for firewall
:::

## Unlock Know-How protected blocks

Research SiePortal only found how to unlock when you knew the original password. Google search found this youtube video
[Unlock protected block in simatic manager using Microsoft Access](https://www.youtube.com/watch?v=YI8S2n8A_j4)

### Warnings after S7-300 migration into TIA

- FB768: Block 'DB485' is unknown.,10/6/2025,8:03:45 PM,,
- FC248: The block was created with "Load from device" or with STEP 7 V5.0 SP2 or earlier. This can result in unpredictable behavior.,10/6/2025,8:03:45 PM,,
- FC458: Block 'DB81' is unknown.,10/6/2025,8:03:45 PM,,
- FC459: Block 'DB61' is unknown.,10/6/2025,8:03:45 PM,,
- FC460: Block 'DB7' is unknown.,10/6/2025,8:03:45 PM,,
- CONT_C [FB41] 1.4: The library element is not supported in TIA Portal. It will be migrated as know-how protected user block "CONT_C_LF".,10/6/2025,8:03:48 PM,,
- CPU 317-2 PN/DP\FC346: The corresponding SCL source is missing. The block is migrated with know-how protection.,10/6/2025,8:03:51 PM,,
- CPU 317-2 PN/DP\FC248: The corresponding SCL source is missing. The block is migrated with know-how protection.,10/6/2025,8:03:54 PM,,
- CPU 317-2 PN/DP\FC250: The corresponding SCL source is missing. The block is migrated with know-how protection.,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k1'" is not unique. Label renamed to "'k1_Mig'".,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k2'" is not unique. Label renamed to "'k2_Mig'".,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k3'" is not unique. Label renamed to "'k3_Mig'".,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k4'" is not unique. Label renamed to "'k4_Mig'".,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k5'" is not unique. Label renamed to "'k5_Mig'".,10/6/2025,8:04:06 PM,,
- CPU 317-2 PN/DP\FC340:The label name  "'k6'" is not unique. Label renamed to "'k6_Mig'".,10/6/2025,8:04:06 PM,,

### Method incorporate previous migration interation progress into tia-v0.0.3
1. Opened tia-v0.0.2 as a reference project and copied FC851 and the new inst... datablock and pasted into tia-v0.0.3
2. Compiled without error.
3. Rebuild all software
4. Right-click on s7-300 station and select "migrate to 1500"
5. Selected the appropriate CPU, start migration after ack'ing info messaging regarding fully testing the migrated program.
6. Archived tia-v0.0.3 and pre-released to gh
7. Further 3 issues;
- [#17](https://github.com/pfAuto/project-uni/issues/17), 
- [#18](https://github.com/pfAuto/project-uni/issues/18), 
- [#19](https://github.com/pfAuto/project-uni/issues/19)

created to resolve errors in migration.