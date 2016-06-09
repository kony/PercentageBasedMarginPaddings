//Form JS File
function addWidgetsfrmComplex() {
    var btnStock = new kony.ui.Button({
        "id": "btnStock",
        "isVisible": true,
        "text": "My Stock",
        "skin": "btnLbl",
        "focusSkin": "sknBtnKonyThemeFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var btnPosition = new kony.ui.Button({
        "id": "btnPosition",
        "isVisible": true,
        "text": "Positions",
        "skin": "btnLbl",
        "focusSkin": "sknBtnKonyThemeFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var btnWatch = new kony.ui.Button({
        "id": "btnWatch",
        "isVisible": true,
        "text": "Watch List",
        "skin": "btnLbl",
        "focusSkin": "sknBtnKonyThemeFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var btnOthers = new kony.ui.Button({
        "id": "btnOthers",
        "isVisible": true,
        "text": "Others",
        "skin": "btnLbl",
        "focusSkin": "sknBtnKonyThemeFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var hbxValues = new kony.ui.Box({
        "id": "hbxValues",
        "isVisible": true,
        "skin": "hbxTransparent",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxValues.add(
    btnStock, btnPosition, btnWatch, btnOthers);
    var lblAccDetails = new kony.ui.Label({
        "id": "lblAccDetails",
        "isVisible": true,
        "text": "Platinum Account  PA12345",
        "skin": "lblMainRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblTotal = new kony.ui.Label({
        "id": "lblTotal",
        "isVisible": true,
        "text": "Total",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "textCopyable": false
    });
    var lblValue = new kony.ui.Label({
        "id": "lblValue",
        "isVisible": true,
        "text": "Asset Value",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "textCopyable": false
    });
    var vboxDescriptor = new kony.ui.Box({
        "id": "vboxDescriptor",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 69,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxDescriptor.add(
    lblTotal, lblValue);
    var lblAmount = new kony.ui.Label({
        "id": "lblAmount",
        "isVisible": true,
        "text": "$ 3,244",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var hbxDetails = new kony.ui.Box({
        "id": "hbxDetails",
        "isVisible": true,
        "skin": "hbxTransparent",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 65,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxDetails.add(
    vboxDescriptor, lblAmount);
    var vbxAccount = new kony.ui.Box({
        "id": "vbxAccount",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAccount.add(
    lblAccDetails, hbxDetails);
    var hbxAccount = new kony.ui.Box({
        "id": "hbxAccount",
        "isVisible": true,
        "skin": "hbxTransparent",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAccount.add(
    vbxAccount);
    var segValuebox = new kony.ui.Box({
        "id": "segValuebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 64
    }, {});
    var segValue = new kony.ui.SegmentedUI2({
        "id": "segValue",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lbl6": "lbl6",
            "lbl7": "lbl7",
            "lbl8": "lbl8",
            "lbl9": "lbl9",
            "vbxLabel1": "vbxLabel1",
            "hbx2": "hbx2",
            "lbl10": "lbl10",
            "hbx3": "hbx3",
            "lbl11": "lbl11",
            "hbx4": "hbx4",
            "hbxLbl1": "hbxLbl1",
            "lbl12": "lbl12",
            "hbx5": "hbx5",
            "hbx6": "hbx6",
            "lbl13": "lbl13",
            "lbl5": "lbl5",
            "lbl14": "lbl14",
            "lbl4": "lbl4",
            "lbl15": "lbl15",
            "lbl3": "lbl3",
            "lbl16": "lbl16",
            "lbl2": "lbl2",
            "line1": "line1",
            "lbl1": "lbl1",
            "line3": "line3",
            "line2": "line2"
        },
        "data": [{
            "lbl6": "Price",
            "lbl7": "73.55",
            "lbl8": "0.00 %",
            "lbl9": "Avg Volume",
            "lbl10": "5,958,426",
            "lbl11": "0.0002 %",
            "lbl12": "P/E Trailing",
            "lbl5": " ",
            "lbl13": "15.47x",
            "lbl14": "1.02 %",
            "lbl4": "Value",
            "lbl15": "Market Cap",
            "lbl3": "Difference ",
            "lbl16": "248.9 B",
            "lbl2": "WMT: NYSE ",
            "lbl1": "Wal-Mart Stores Inc."
        }, {
            "lbl6": "Price",
            "lbl7": "50.79",
            "lbl8": "0.00 %",
            "lbl9": "Avg Volume",
            "lbl10": "7,745,441",
            "lbl11": "0.0001 %",
            "lbl12": "P/E Trailing",
            "lbl5": " ",
            "lbl13": "16.42x",
            "lbl14": "0.92 %",
            "lbl4": "Value",
            "lbl15": "Market Cap",
            "lbl3": "Difference ",
            "lbl16": "91.1 B",
            "lbl2": "DIS: NYSE ",
            "lbl1": "Disney Walt CO Com"
        }],
        "Location": "[1,132]",
        "rowTemplate": segValuebox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": false,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lblMainRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lblGrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "textCopyable": false
    });
    var vbxLabel1 = new kony.ui.Box({
        "id": "vbxLabel1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLabel1.add(
    lbl1, lbl2);
    var hbxLbl1 = new kony.ui.Box({
        "id": "hbxLbl1",
        "isVisible": true,
        "skin": "hbxTop",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLbl1.add(
    vbxLabel1);
    var lbl5 = new kony.ui.Label({
        "id": "lbl5",
        "isVisible": true,
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lbl4 = new kony.ui.Label({
        "id": "lbl4",
        "isVisible": true,
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {
        "textCopyable": false
    });
    var lbl3 = new kony.ui.Label({
        "id": "lbl3",
        "isVisible": true,
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {
        "textCopyable": false
    });
    var hbx2 = new kony.ui.Box({
        "id": "hbx2",
        "isVisible": true,
        "skin": "hbxBal",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx2.add(
    lbl5, lbl4, lbl3);
    var lbl6 = new kony.ui.Label({
        "id": "lbl6",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lbl7 = new kony.ui.Label({
        "id": "lbl7",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var lbl8 = new kony.ui.Label({
        "id": "lbl8",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbx3 = new kony.ui.Box({
        "id": "hbx3",
        "isVisible": true,
        "skin": "sknHboxKonyThemeWhiteBG",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx3.add(
    lbl6, lbl7, lbl8);
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var lbl9 = new kony.ui.Label({
        "id": "lbl9",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lbl10 = new kony.ui.Label({
        "id": "lbl10",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var lbl11 = new kony.ui.Label({
        "id": "lbl11",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbx4 = new kony.ui.Box({
        "id": "hbx4",
        "isVisible": true,
        "skin": "sknHboxKonyThemeWhiteBG",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx4.add(
    lbl9, lbl10, lbl11);
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var lbl12 = new kony.ui.Label({
        "id": "lbl12",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lbl13 = new kony.ui.Label({
        "id": "lbl13",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var lbl14 = new kony.ui.Label({
        "id": "lbl14",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbx5 = new kony.ui.Box({
        "id": "hbx5",
        "isVisible": true,
        "skin": "sknHboxKonyThemeWhiteBG",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx5.add(
    lbl12, lbl13, lbl14);
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var lbl15 = new kony.ui.Label({
        "id": "lbl15",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {
        "textCopyable": false
    });
    var lbl16 = new kony.ui.Label({
        "id": "lbl16",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [2, 1, 20, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "textCopyable": false
    });
    var hbx6 = new kony.ui.Box({
        "id": "hbx6",
        "isVisible": true,
        "skin": "hbxBottom",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx6.add(
    lbl15, lbl16);
    segValuebox.add(
    hbxLbl1, hbx2, hbx3, line1, hbx4, line2, hbx5, line3, hbx6);
    frmComplex.add(
    hbxValues, hbxAccount, segValue);
};

function frmComplexGlobals() {
    var MenuId = [];
    frmComplex = new kony.ui.Form2({
        "id": "frmComplex",
        "needAppMenu": true,
        "title": "Stock",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmComplex
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};