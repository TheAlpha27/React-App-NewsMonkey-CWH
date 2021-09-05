import React from 'react'
import loading from './spinner.gif'
export default function Spinner () {
        return (
            <div className="spin">
                <img src={loading} alt="loading" />
            </div>
        )
    }