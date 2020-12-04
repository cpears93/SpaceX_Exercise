import React, {useState} from 'react';
import sort_ico from '../assets/icon/sort.png';

const LaunchList = (props) => {

        const [selYear, setselYear] = useState({year: "default"})
        const [sortedLaunch, setsortedLaunch] = useState({launches: props.launchData})
        const [sortText, setsortText] = useState({text: "Ascending By Year"})

        function sortLaunchData() {
            setsortedLaunch({launches: sortedLaunch.launches.reverse()})
            sortText.text === "Ascending By Year" ? setsortText({text: "Descending By Year"}) : setsortText({text: "Ascending By Year"});
        }

        if (props ==null){
            return ("No Launches Found")
        }

        const filteredLaunches = sortedLaunch.launches.filter(launch=>launch.date_utc.slice(0,4)===selYear.year)
            .map((launch, index)=>{
                return(
                    <div className="launch-list" key={index}>
                        <div>#{launch.flight_number}</div><div>{launch.name}</div><div>{launch.date_utc.slice(0,10)}</div>
                    </div>
                )
            })

         const allLaunches = sortedLaunch.launches.map((launch, index) => {
             return ( 
                <div className = "launch-list" key = {index}>
                    <div>#{launch.flight_number}</div><div>{launch.name}</div><div>{launch.date_utc.slice(0, 10)}</div>
                 </div>
             )
         })

         const yearOptions = props.launchData.map(launch=>launch.date_utc.slice(0,4))
                            .filter((year, index, array)=>array.indexOf(year)===index)
                            .map((year, index)=>(<option value={year} key={index}>{year}</option>)
         )

         return(
             <div>
                <select className="action-menu" onChange={id=>setselYear({year:id.target.value})}defaultValue="default">
                    <option default disabled value="default"> Filter By Year</option>
                    <option value="default">no filter</option>
                    {yearOptions}
                </select>
                <button className="action-menu" onClick={()=>sortLaunchData()}>Sort {sortText.text} <img src={sort_ico} alt="sort"/></button>

                {selYear.year==='default'?allLaunches:filteredLaunches}
             </div>
         )

    }
    
export default LaunchList;    