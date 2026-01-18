---

title: Phase 6 - Build HMI
authors: [ aflittlejohns ]
tags: [ Log Book, Ignition-edge]
---

## Today's Tasks

1. Replace usage of direct access tags with OPC UA tags.

<!-- truncate -->

##  Replace usage of direct access tags with OPC UA tags.

Copied gateway (gw) project to development environment.

Cleared most issues with

- Replace in files;
  - "DataBlocksGlobal/" 
- with; 
  - ""
Copied back updated views folder back to gw and found issue with tag binding of V427 in the
"Force IO" view.

Found that the S7 symbol was V184 and not V427, as expected. As any reference to this 
tag would be absolute, decided to change the symbol of this DB variable to V427 (DB659,DBW130)

Also found the item selection id numbers in the comments of this DB "ForceIndications". Compiled with no issues.

On the ignition gw deleted ForceIndications/V184 tag and imported ForceIndications/V427