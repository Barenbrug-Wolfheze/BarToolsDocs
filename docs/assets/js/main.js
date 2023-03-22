$(document).ready(function () {

    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 100});

    /* Smooth scrolling */
    $('a.scrollto').on('click', function (e) {
        //store hash
        var target = this.hash;
        e.preventDefault();
        $('body').scrollTo(target, 800, {offset: 0, 'axis': 'y'});

    });

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });


});


const copyButtonLabel = "Copy Code";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}


