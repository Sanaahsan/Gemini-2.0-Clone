import React, { useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar=()=>{

  const [extended, setExtended] = useState(false)

    return(
      <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menu"/>
           <div className="new-chat">
            <img src={assets.plus_icon} alt=""/>
            {extended?<p>New Chat</p>:null}
           </div>
           {extended?<div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
            <img src={assets.message_icon}alt=""/>
            <p>What is react..</p>
            </div>
           </div>
           :null}
           

        </div>
        <div className="bottom">
            <div className="bottom-line recent-entry">
                <img src={assets.question_icon}/>
               {extended?<p>Help</p>:null}
            </div>

            <div className="bottom-line recent-entry">
                <img src={assets.history_icon}/>
                {extended?<p>Activity</p>:null}
            </div>

            <div className="bottom-line recent-entry">
                <img src={assets.setting_icon}/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>

      </div>
    )
}

export default Sidebar