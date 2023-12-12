'use client'
import { useEffect } from 'react'

export const GooglePageViewTrigger = () => {
    useEffect(() => {
        gtag('event', 'page_view', {
            page_title: 'Catalog2',
            page_location: '/catalog2'
        });
    }, [])
    return null
}
