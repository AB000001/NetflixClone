let y = document.getElementsByClassName("box")
let x = document.getElementsByClassName("Ans");
let z = document.getElementsByClassName("svg");
for (let index = 0; index < y.length; index++) {
    //x[index].style.display="none"
    y[index].addEventListener("click", () => {
        //console.log(x)
        //console.log(x[index].style.display + "Hi")
        if (/*x[index].style.display. This does not work recall*/ getComputedStyle(x[index]).display === "none") {
            x[index].style.display = "block";
        }
        else {
            x[index].style.display = "none";
        }
        if (getComputedStyle(z[index]).transform === "none") {
            z[index].style.transform = 'rotate(45deg)';
            //z[index].style.animation = 'opacitychange 0.5s cubic-bezier(0.9, 0, 0.51, 1) 0.025s 1 forwards';
        }
        else {
            z[index].style.transform = "none";
        }
        console.log(y)
        if (getComputedStyle(y[index]).marginBottom === '9px') {
            console.log("HI")
            y[index].style.marginBottom = '2px'
        }
        else {
            console.log("Hello " + getComputedStyle(y[index]).marginBottom)
            y[index].style.marginBottom = '9px'
        }
    })
}
let html1 = `<div id="errortext">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
<div>Email or mobile number is required</div>
</div>`
let html3 = `<div id="errortext">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
<div>Please enter a valid email address or mobile number</div>
</div>`
/*y = document.getElementsByClassName("button2")  Writing this will be wrong because y  is a global variable above also,
                                                  so changing its value here will change its upper stated value,therefore the things
                                                  using the upper value of y will get faulty/disturbed.
                                                  Soln: Instead we must declare it as a local variable atleast here, so that the
                                                  two y's don't have the same scope, hence do not interfere with each other*/
for (let index = 0; index < y.length; index++) {
    let y = document.getElementsByClassName("button2")
    let flag = 0;
    
    y[index].addEventListener("click", () => {
        let x = document.getElementsByClassName("input");
        if (x[index].value === "") {
            console.log(flag)
            if (flag == 1) {
                document.getElementById("errortext").remove()
            }
            let z = document.getElementsByClassName("details")
            z[index].insertAdjacentHTML("beforeend", html1)
            let w = document.getElementsByClassName("input")
            w[index].style.borderColor = "red"
            flag=1
        } 
        else if (x[index].value === "*@*.com") {
            console.log(flag)
            if (flag == 1) {
                document.getElementById("errortext").remove()
                flag=0
            }
            let w = document.getElementsByClassName("input")
            w[index].style.borderColor = "green"
            window.open("https://www.netflix.com/signup/registration?locale=en-IN","_self")
        }
        else {
            console.log(flag)
            if (flag == 1) {
                document.getElementById("errortext").remove()
            }
            let z = document.getElementsByClassName("details")
            z[index].insertAdjacentHTML("beforeend", html3)
            let w = document.getElementsByClassName("input")
            w[index].style.borderColor = "red"
            flag=1
        }
    })
}

/*let w=document.getElementById("netflix")
w.addEventListener("click", () => {
    w.style.color = "green";
})*/


