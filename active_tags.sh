#!/bin/bash

awesome-client << 'EOF' | tail -n +2
local awful = require("awful")
local result = {}

for i, tag in ipairs(awful.screen.focused().tags) do
    if tag.selected then
        table.insert(result, "%{u#F0C674}%{F#F0C674}" .. tostring(i) .. "%{F-}%{u-}") -- Active tag
    elseif #tag:clients() > 0 then
        table.insert(result, "%{F#C5C8C6}" .. tostring(i) .. "%{F-}") -- Occupied tag
    else
        table.insert(result, "%{F#707880}" .. tostring(i) .. "%{F-}") -- Empty tag
    end
end

print(table.concat(result, "  "))
EOF
