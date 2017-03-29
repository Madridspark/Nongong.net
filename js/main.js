$(function()
{
    $("#main-user-window").click(
        function(event)
        {
            event.preventDefault();
            event.stopPropagation();
        }
    )

    $("#main-login-btn").click(window("login"));
    $("#main-signup-btn").click(window("signup"));
    $("#main-user-window-wrap").click(hideWindow);

    function window(operation)
    {
        if(operation == "login")
        {
            return function(event)
            {
                showWindow(event);
            }
        }
        else if(operation == "signup")
        {
            return function(event)
            {
                showWindow(event);
            }
        }
        else
        {
            return "";
        }
    }

    function showWindow(event)
    {
        event.preventDefault();
        event.stopPropagation();
        $("#main-user-window-wrap").show(1,function()
        {
            $("#main-user-window-wrap").css("background-color", "rgba(0,0,0,0.5)");
            $("#main-user-window").css("height", "500px");
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