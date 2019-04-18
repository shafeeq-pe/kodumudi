import React from "react";
import "../css/ProfileCard.css";
class ProfileCard extends React.Component {
  render() {
    return (
       

        <div class="profile-card-container">
        
          <div class="card-profile">
            <div class="card-profile_visual"></div>
        
            <div class="card-profile_user-infos">
              <span class="infos_name">Emma Watson</span>
              <span class="infos_nick">@EmWatson</span>
        
              
            </div>
        
            <div class="card-profile_user-stats">
              <div class="stats-holder">
                <div class="user-stats">
                  <strong>Tweets</strong>
                  <span>1,337</span>
                </div>
                <div class="user-stats">
                  <strong>Following</strong>
                  <span>561</span>
                </div>
                <div class="user-stats">
                  <strong>Followers</strong>
                  <span>718</span>
                </div>
              </div>
            </div>
        
          </div>
        
        </div>
        
        
    );
  }
}
  export default ProfileCard;
  