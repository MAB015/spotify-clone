import React from 'react'
import { Pause, Play } from '@/components/Player'

export function CardPlayBottom ({ id }) {
    return (
        <div
            className="card-play-bottom rounded-full bg-green-500 p-4"
        >
            <Play />
        </div>
    )
}
