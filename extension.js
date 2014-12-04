const Main = imports.ui.main;
const AppletManager = imports.ui.appletManager;
const Lang = imports.lang;

function enable(){
    if (Main.desktop_layout == Main.LAYOUT_CLASSIC && !global.settings.get_boolean("panel-autohide")){
	let primaryMonitor = global.screen.get_primary_monitor();
	if(primaryMonitor == 0)
                secondaryMonitor = 1;
        else
                secondaryMonitor = 0;
//Flip main panel to top
  	Main.desktop_layout = Main.LAYOUT_FLIPPED;      

	Main.panel2.bottomPosition = false;

//Move the panel
	let p1height = Main.panel2.actor.get_height();
	Main.layoutManager.panelBox2.set_position(Main.layoutManager.monitors[secondaryMonitor].x, Main.layoutManager.monitors[secondaryMonitor].y);
	Main.layoutManager.panelBox2.set_size(Main.layoutManager.monitors[secondaryMonitor].width, p1height);
	Main.layoutManager._chrome.updateRegions();
    }
}

function disable(){
    Main.desktop_layout = global.settings.get_string("desktop-layout");
    Main.layoutManager._updateBoxes();
}

function init(){
}
