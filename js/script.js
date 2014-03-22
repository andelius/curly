$(document).ready(function() {
    $(".js_draggable").draggable();
    $(".rock").click(function() {
        $(this).addClass("selected");
    });
    $(".rock.selected").click(function() {
        $(this).removeClass("selected");
    });
    if ($(".ruler").hasClass("hide") === true) {
        $(".js_ruler_toggle").click(function() {
           $(".ruler").removeClass("hide");
        });
    } else {
        $(".js_ruler_toggle").click(function() {
           $(".ruler").addClass("hide");
        });
    }
});
$(document).click(function() {
    $(".rock").click(function() {
        $(this).addClass("selected");
    });
    $(".rock.selected").click(function() {
        $(this).removeClass("selected");
    });
    if ($(".ruler").hasClass("hide") === true) {
        $(".js_ruler_toggle").click(function() {
            $(".ruler").removeClass("hide");
        });
    } else {
        $(".js_ruler_toggle").click(function() {
            $(".ruler").addClass("hide");
        });
    }
});