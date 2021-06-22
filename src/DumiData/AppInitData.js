const AppInitData = {
    admin : [
        {name: "workspace1", id:"0"},
        {name: "workspace2", id:"1"},
        {name: "workspace3", id:"2"},
        {name: "workspace4", id:"3"},
        {name: "workspace5", id:"4"},
        {name: "workspace6", id:"5"},
    ],
    fav : [
        {name: "workspace1", id:"0"},
        {name: "workspace2", id:"1"},
        {name: "workspace7", id:"6"},
        {name: "workspace8", id:"7"},
    ],
    member : [
        {name: "workspace7", id:"6"},
        {name: "workspace8", id:"7"},
        {name: "workspace9", id:"8"},
        {name: "workspace10", id:"9"},
        {name: "workspace11", id:"10"},
        {name: "workspace12", id:"11"},
    ],
    notifications : [
        {
            title: "WorkList Noti Test",
            workspaceName: "test1",
            desc: "test Noti",
            type: "board",
            endDate: "2021/06/30",
            ws_id:0
        },
        {
            title: "Card Noti Test",
            workspaceName: "test2",
            desc: "test Noti",
            type: "card",
            endDate: "2021/06/30",
            ws_id:1
        },
        {
            title: "Noti Noti Test",
            workspaceName: "test3",
            desc: "test Noti",
            type: "noti",
            endDate: "2021/06/30",
            ws_id:1
        },
        {
            title: "Invite Noti Test",
            workspaceName: "test4",
            desc: "test Noti",
            type: "invite",
            endDate: "2021/06/30",
            ws_id:0
        },
    ]
}

export default AppInitData