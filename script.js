window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d')

    //Resizing
    canvas.height = window.outerHeight;
    canvas.width = window.outerWidth;

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
    //EventListeners
    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

});

