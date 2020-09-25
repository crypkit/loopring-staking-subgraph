import {
    LRCRewarded,
    LRCStaked,
    LRCWithdrawn
} from "../generated/UserStakingPool/UserStakingPool";
import {LRCEvent,} from "../generated/schema";
import {ethereum} from "@graphprotocol/graph-ts/chain/ethereum"

export function handleLRCRewarded(event: LRCRewarded): void {
    let lrcEvent = new LRCEvent(event.transaction.hash.toHex())
    lrcEvent.eventType = "REWARD"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

export function handleLRCStaked(event: LRCStaked): void {
    let lrcEvent = new LRCEvent(event.transaction.hash.toHex())
    lrcEvent.eventType = "STAKE"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

export function handleLRCWithdrawn(event: LRCWithdrawn): void {
    let lrcEvent = new LRCEvent(event.transaction.hash.toHex())
    lrcEvent.eventType = "WITHDRAWAL"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

function setPropertiesAndSave(event: ethereum.Event, lrcEvent: LRCEvent): void {
    lrcEvent.user = event.transaction.from
    lrcEvent.blockNumber = event.block.number
    lrcEvent.blockTimestamp = event.block.timestamp
    lrcEvent.save()
}