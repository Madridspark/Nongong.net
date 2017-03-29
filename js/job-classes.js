$(function()
{
        var options = [
            '家政服务',
            '工程建筑',
            '商贸流通',
            '工矿企业',
            '饮食服务',
            '工厂企业',
            '技术工人',
            '文化传媒',
            '农业技术',
            '临时用工'
            ];

        var list = $(".job-classes");

        var str1 = '<li class="index-class-option"><label class="index-checkbox"><input type="checkbox" name="type" value="',
            str2 = '"><div class="trans"></div>',
            str3 = '</label></li>';

        var cnt = 0;

        options.forEach(function(option)
        {
            list.append($(str1 + option + str2 + option + str3));
            cnt++;

            if(cnt % 6 == 0)
            {
                list.append($("<br>"));
            }
        }, this);

}
);