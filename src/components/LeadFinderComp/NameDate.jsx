import React from 'react'
import { supabase } from '../../lib/helper/supabaseClient';
import { getUserName } from '../../lib/helper/supabaseClient';

const NameDate = (props) => {

    let newDate = new Date();
    let date = newDate.getDate();
    let symbol = getSymbol(date)
    let month = newDate.getMonth() + 1;
    let actMonth = getActMonth(month)
    let day = newDate.getDay();
    let actDay = getActDay(day)
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let userName = getUserName;

    //const {user, session, error} = await supabase.auth.getUser();
    //const firstName = await supabase.from('users').select('raw_user_metadata -> first_name').eq('id', user.id);
    

    function getSymbol(date) {
        if (date === 1 || date === 21 || date === 31) {
            return 'st'
        } else if (date === 2 || date === 22) {
            return 'nd'
        } else if (date === 3 || date === 23) {
            return 'rd'
        } else {
            return 'th'
        }
    }

    function getActMonth(val) {
        let MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "Ootober", "november", "december"]
        return MONTHS[val - 1]
    }

    function getActDay(val) {
        let DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        return DAYS[val]
    }


    return (
        <div className='mt-8 flex flex-col w-fit'>
            <div className='text-2xl'>Welcome, {userName}</div>
            <div className='text-gray'>
                {actDay + ', '}{actMonth} {date}{symbol} {hour}:{minutes}
            </div>
        </div>
    )
}

export default NameDate