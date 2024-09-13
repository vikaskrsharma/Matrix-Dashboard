// 'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const CategorySelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-[130px] text-[#64748b]">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="steel">Steel</SelectItem>
                <SelectItem value="bitumen">Bitumen</SelectItem>
                <SelectItem value="polymer">Polymer</SelectItem>
            </SelectContent>
        </Select>

    )
}

export default CategorySelect