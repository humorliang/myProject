$(document).ready(
    // 筛选框点击事件
    function () {
        for (var i = 0; i <= 3; i++) {
            $("#option-tab-"+i).click(
                function () {
                    $(".option-tab .pos-select").show();
                    $(".bg-color").show();
                }
            )
        }
        $().click(
            function  () {
                $(".option-tab .pos-select").hide();
                $(".bg-color").hide();
            }
        )
    }
)