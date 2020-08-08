getAllRooms();

//取得所有房型
function getAllRooms() {
    $.ajax({
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer Ya6ZO3xRANCfbqETW2QswsRNQodXdNnj52lXEN2s4beGD8pZC9w8gopX2SxE'
        },
        success: function (data, status) {
            var html = "";
            $('article').empty();

            console.log(data)
            var data = data.items;
            var i = 0;
            $.each(data, function () {
                html += "<div class='room-wrap'>";
                html += "<a href='roomInfo.html?ID=" + data[i].id + "'>";
                html += "<div class='imgbox'>";
                html += "<img id='roomImg' src='" + data[i].imageUrl + "' alt='White Space Single Room'>";
                html += "</div>";
                html += "<div class='room-info'>";
                html += "<span class='room-name' id='roomName'>" + data[i].name + "</span>";
                html += "<div class='flex-space-between'>";
                html += "<span class='room-spice' id='roomNormalDayPrice'>" + data[i].normalDayPrice + " <span>平日</span></span>";
                html += "<span class='room-normal-spice' id='roomHolidayPrice'>" + data[i].holidayPrice + " 假日</span>";
                html += "</div>";
                html += "</div>";
                html += "</a>";
                html += "</div>";
                i++;
            });
            
            $('article').append(html);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('網頁出現些許錯誤，請稍後重新連線！')
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
