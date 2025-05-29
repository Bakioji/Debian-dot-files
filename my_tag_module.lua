local M = {}

function M.get_tags_for_screen()
    local focused = awful.screen.focused()
    local tags = {}
    for i, tag in ipairs(focused.tags) do
        table.insert(tags, tag.name)
    end
    return table.concat(tags, " ")
end

return M