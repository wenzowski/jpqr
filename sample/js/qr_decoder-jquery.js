/*
 * require jquery-ui
 * vetsion 1.8.11
 */

jQuery.fn.QRDecode = function(){
    return this.each(function(){
        $(this).attr("title","Click Me!");
        $(this).click(
            function(){
                $(this).after('<div id="qr-dialog" class="popup"><canvas id="qr-canvas"></canvas></div>');
                var qr = new QRCode();
                var str = qr.getContents($(this).attr("src"));
                var result = str.replace(/(http:\/\/[\x21-\x7e]+)/gi, "<a href='$1'>$1</a>");
                $('#qr-dialog').html(str);
                $('#qr-dialog').dialog();
            });
    });
}
