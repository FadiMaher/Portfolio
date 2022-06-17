import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <React.Fragment>
      <div className="center mt-5 text-center">
        <div id="social-test">
          <ul className="social">
            <li>
             <a target="_blank" href="https://www.facebook.com/profile.php?id=100006611590873&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_transition=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_follower_visibility_disclosure=false"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
            </li>

            <li>
            <a target="_blank" href="https://github.com/FadiMaher"> <i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.linkedin.com/in/fadihlaihel/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
