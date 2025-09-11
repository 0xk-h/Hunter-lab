# most used keybinds
# !Apps
bind = Super, B, exec, firefox
bind = Super+Shift, B, exec, google-chrome-stable
bind = SUPER, E, exec, sh -c "command -v nautilus >/dev/null 2>&1 && nautilus || dolphin"
bind = Super, C, exec, code
bind = SUPER, Return, exec, sh -c 'command -v "$TERMINAL" >/dev/null 2>&1 && "$TERMINAL" || command -v kitty >/dev/null 2>&1 && kitty || command -v foot >/dev/null 2>&1 && foot || notify-send "No terminal found"'
bind = SUPER, T, exec, sh -c 'command -v "$TERMINAL" >/dev/null 2>&1 && "$TERMINAL" || command -v kitty >/dev/null 2>&1 && kitty || command -v foot >/dev/null 2>&1 && foot || notify-send "No terminal found"'

# Utilities
#/# deps = [grim, slurp, libnotify]
bind = Super, Print, exec, grim -g "$(slurp)" ~/Pictures/Screenshots/screenshot_$(date +%s).png && notify-send "Screenshot saved!"

# Windows
bind = Super, Q, killactive
#/# Change Focus
bind = Super, Left, movefocus, l 
bind = Super, Right, movefocus, r 
bind = Super, Up, movefocus, u 
bind = Super, Down, movefocus, d
#/# Swap windows
bind = Super+Shift, Left, movewindow, l
bind = Super+Shift, Right, movewindow, r
bind = Super+Shift, Up, movewindow, u
bind = Super+Shift, Down, movewindow, d

# Workspace
#/# Change workspace
bind = Super, 1, workspace, 1
bind = Super, 2, workspace, 2
bind = Super, 3, workspace, 3
bind = Super, 4, workspace, 4
bind = Super, 5, workspace, 5
bind = Super, 6, workspace, 6
bind = Super, 7, workspace, 7
bind = Super, 8, workspace, 8
bind = Super, 9, workspace, 9
#/# Move workspace
bind = Super+Shift, 1, movetoworkspace, 1
bind = Super+Shift, 2, movetoworkspace, 2
bind = Super+Shift, 3, movetoworkspace, 3
bind = Super+Shift, 4, movetoworkspace, 4
bind = Super+Shift, 5, movetoworkspace, 5
bind = Super+Shift, 6, movetoworkspace, 6
bind = Super+Shift, 7, movetoworkspace, 7
bind = Super+Shift, 8, movetoworkspace, 8
bind = Super+Shift, 9, movetoworkspace, 9

# windows split ratio
binde = Super, Semicolon, splitratio, -0.1     #[ ; ]
binde = Super, Apostrophe, splitratio, +0.1    #[ ' ]
