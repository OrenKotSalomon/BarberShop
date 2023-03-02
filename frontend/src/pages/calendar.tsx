import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Calendar } from 'react-calendar';

export function CalendarSpot() {
    const [value, onChanger] = useState<Date>(new Date());

    const navigate = useNavigate()
    function onGoBack() {
        navigate('/client')
    }

    const onPick = (v: Date) => {
        console.log('v:', v)
        openLinesModal(v);
    }
    console.log('value:', value)
    const openLinesModal = (v: Date) => {
        
    }
    /// need to configure curr barber Id for all logged in users,and for that nvigate to the relevant barber

    return (
        <section className=''>
            Calendar
            <button onClick={onGoBack}>Back</button>
            <div>
                <Calendar selectRange={true} onChange={onChanger} value={value} onClickDay={(value) => onPick(value)}/>
            </div>
        </section>
    )
}