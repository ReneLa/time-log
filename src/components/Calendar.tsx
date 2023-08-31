import React from 'react'
import dayjs from 'dayjs'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from '@/lib/utils';

export default function Calendar() {

    const getDateInMonth = (year = dayjs().year(), month = dayjs().month()) => {
        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf("month");

        const datesArray = [];

        for (let i = startDate.date(); i <= endDate.date(); i++) {
            datesArray.push(startDate.date(i).format('YYYY-MM-DD'));
        }
        // console.log(datesArray);
        return datesArray;
    }

    const getColors = (value: number) => {
        if (value === 0) {
            return "bg-gray-100"
        } else if (value < 5) {
            return "bg-green-100"
        } else if (value < 10) {
            return "bg-green-300"
        } else {
            return "bg-green-500"
        }

    }

    const hour = 14;
    return (
        <div className='border border-dashed flex flex-wrap gap-2 p-10 justify-center rounded-md'>
            {getDateInMonth().map((value, idx) => {
                return (
                    <HoverCard key={idx}>
                        <HoverCardTrigger>
                            <div className={cn('h-5 w-5 bg-gray-100 rounded-sm cursor-pointer', getColors(hour || 0))} >
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            {hour || 0} hours on {value}
                        </HoverCardContent>
                    </HoverCard>
                )
            })}
        </div >
    )
}
