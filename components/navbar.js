const nav =()=>{
    return `
    <div id="navbar">
    <div class="left_nav">
        <div>email signup</div>
        <div >
        <svg id="hamburger" fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </div>
        <div >
        <svg id="s_icon" style="" fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 70 70" width="35px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
        <input id="nav_inp" type="text" placeholder="SEARCH">
        </div>
    </div>
    <div class="mid_nav">
        <div>
            <h1>BOBBI  BROWN</h1>
        </div>
        <div>
            <ul id="nav_ul">
                <a href="new.html">NEW</a>
                <a href="bestsellers.html">BESTSELLERS</a>
                <a href="face.html">FACE</a>
                <a href="bestsellers.html">MAKEUP</a>
                <a href="skincare.html">SKINCARE</a>
                <a href="">VIRTUAL SERVICES</a>
                <a href="">DISCOVER</a>
            </ul>
        </div>
    </div>
    <div class="right_nav">
        <p>loc</p>
        <p>cart</p>
        <p>pro</p>
    </div>
</div>
    `
}

export default nav