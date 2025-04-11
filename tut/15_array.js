
var menus = [
    "김밥",
    "라면",
    "떡볶이",
    "순대",
    "튀김",
    "오뎅",
    "김치전",
    "부침개",
    "계란말이",
    "김치찌개",
    "된장찌개",
    "순두부찌개",
    "부대찌개",
    "갈비탕",
    "설렁탕",
]

function showMenu(...list) {
    for (var i = 0; i < menus.length; i++) {
        console.log(menus[i]);
    }
    console.log("메뉴판");
}

showMenu(menus);