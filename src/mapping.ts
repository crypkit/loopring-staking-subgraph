import {
    LRCRewarded,
    LRCStaked,
    LRCWithdrawn
} from "../generated/UserStakingPool/UserStakingPool";
import {LrcEvent,} from "../generated/schema";
import {ethereum} from "@graphprotocol/graph-ts/chain/ethereum"

export function handleLRCRewarded(event: LRCRewarded): void {
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let lrcEvent = new LrcEvent(id)
    lrcEvent.txHash = event.transaction.hash
    lrcEvent.eventType = "REWARD"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

export function handleLRCStaked(event: LRCStaked): void {
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let lrcEvent = new LrcEvent(id)
    lrcEvent.txHash = event.transaction.hash
    lrcEvent.eventType = "STAKE"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

export function handleLRCWithdrawn(event: LRCWithdrawn): void {
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let lrcEvent = new LrcEvent(id)
    lrcEvent.txHash = event.transaction.hash
    lrcEvent.eventType = "WITHDRAWAL"
    lrcEvent.amount = event.params.amount
    setPropertiesAndSave(event, lrcEvent)
}

function setPropertiesAndSave(event: ethereum.Event, lrcEvent: LrcEvent): void {
    lrcEvent.user = event.transaction.from
    lrcEvent.blockNumber = event.block.number
    lrcEvent.blockTimestamp = event.block.timestamp
    lrcEvent.save()
}