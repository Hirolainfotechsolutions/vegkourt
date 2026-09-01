import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import MenuItem from "./MenuItem";
import GroupProjectsModal from "../GroupProjects/GroupProjectsModal";
import logo from "/assets/img/newlogos/3.svg";

import navitemlist from "../../dataJson/navitemlist.json";

export default function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");
  const [showGroupProjects, setShowGroupProjects] = useState(false);

  const navBarShow = () => {
    if (navBar == "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist == "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  const closeMobileNav = () => {
    setNavbar("");
    setNavList("");
  };

  const openGroupProjects = () => {
    closeMobileNav();
    setShowGroupProjects(true);
  };

  const closeGroupProjects = useCallback(() => {
    setShowGroupProjects(false);
  }, []);

  return (
    <div className="ak-main_header">
      <div className="ak-nav-container">
        <div className="ak-main_header_in">
          <div className="ak-main_header_left">
            <Link className="ak-site_branding" to="/">
              <img src={logo} alt="..." />
            </Link>
          </div>
          <div className="ak-main_header_right">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return (
                    <MenuItem
                      props={item}
                      key={i}
                      onNavigate={closeMobileNav}
                    />
                  );
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
              <button
                className="group-projects-trigger group-projects-mobile-trigger"
                type="button"
                onClick={openGroupProjects}
              >
                <Sparkles aria-hidden="true" size={15} strokeWidth={1.8} />
                <span>Our Groups</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <GroupProjectsModal
        isOpen={showGroupProjects}
        onClose={closeGroupProjects}
      />
    </div>
  );
}
