//Template File
function initializesegHead() {
    var label121043302126913 = new kony.ui.Label({
        "id": "label121043302126913",
        "isVisible": true,
        "text": "Label",
        "skin": "lblHead"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    hbox121043302126912 = new kony.ui.Box({
        "id": "hbox121043302126912",
        "isVisible": true,
        "skin": "sknHboxKonyThemeWhiteBG",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302126912.add(
    label121043302126913);
};