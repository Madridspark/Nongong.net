$(function()
{
    $("#main-user-window").click(
        function(event)
        {
            event.stopPropagation();
        }
    )

    $("#main-login-btn").click(window("login"));
    $("#main-signup-btn").click(window("signup"));
    $("#main-user-window-wrap").click(hideWindow);
    $("#main-user-window .close-btn").click(hideWindow);

    function window(operation)
    {
        if(operation == "login")
        {
            return function(event)
            {
                $("#main-user-login-radio").attr("checked", "checked");
                $(".main-user-window-form-wrap").css("margin-left", "0");
                showWindow(event);
            }
        }
        else if(operation == "signup")
        {
            return function(event)
            {
                $("#main-user-signup-radio").attr("checked", "checked");
                $(".main-user-window-form-wrap").css("margin-left", "-400px");
                showWindow(event);
            }
        }
        else
        {
            return "";
        }
    }

    $(".main-user-window-tab").click(function()
    {
        if($(this).attr("for") == "main-user-login-radio")
        {
            $(".main-user-window-form-wrap").css("margin-left", "0");
        }
        else
        {
            $(".main-user-window-form-wrap").css("margin-left", "-400px");
        }
    });

    function showWindow(event)
    {
        event.preventDefault();
        event.stopPropagation();
        $("#main-user-window-wrap").show(1,function()
        {
            $("#main-user-window-wrap").css("background-color", "rgba(0,0,0,0.5)");
            $("#main-user-window").css("height", "700px");
        });;
    }

    function hideWindow(event)
    {
        event.preventDefault();
        event.stopPropagation();
        $("#main-user-window").css("height", "0");
        $("#main-user-window-wrap").css("background-color", "transparent");
        var t = setTimeout(function()
        {
            $("#main-user-window-wrap").hide();
            clearTimeout(t);
        }, 200);
    }
}
);