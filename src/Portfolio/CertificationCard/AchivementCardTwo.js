import React from 'react'
import { achievementSection } from '../portfolio';

import './AchievementCardTwo.css'



function AchivementCardTwo({cardInfo}) {

    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
      }
    
    return (
        <div>
            <div className="cols">
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front " >
						<div className="inner " >
							<p className = 'card-title'>{cardInfo.title}</p>
              <span className = 'card-subtitle'>{cardInfo.description}</span>
						</div>
					</div>
					<div className = 'back'>
 
						<div className="inner certificate-card-footer" >
                        {cardInfo.footer.map((v, i ) => {
          return (
            
            <span 
              key={i}
              className= "certificate-tag"
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
            
          );
        })}
						</div>
					</div>
				</div>
			</div>
            </div>
        </div>
    )
}

export default AchivementCardTwo
