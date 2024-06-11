let plus11 = document.querySelector('.plus11-js'),
    minus11 = document.querySelector('.minus11-js'),
    plus12 = document.querySelector('.plus12-js'),
    minus12 = document.querySelector('.minus12-js'),
    plus13 = document.querySelector('.plus13-js'),
    minus13 = document.querySelector('.minus13-js'),
    plus21 = document.querySelector('.plus21-js'),
    minus21 = document.querySelector('.minus21-js'),
    plus22 = document.querySelector('.plus22-js'),
    minus22 = document.querySelector('.minus22-js'),
    plus23 = document.querySelector('.plus23-js'),
    minus23 = document.querySelector('.minus23-js'),
    plus31 = document.querySelector('.plus31-js'),
    minus31 = document.querySelector('.minus31-js'),
    plus32 = document.querySelector('.plus32-js'),
    minus32 = document.querySelector('.minus32-js'),
    plus33 = document.querySelector('.plus33-js'),
    minus33 = document.querySelector('.minus33-js'),
    plus4 = document.querySelector('.plus4-js'),
    minus4 = document.querySelector('.minus4-js'),
    plus5 = document.querySelector('.plus5-js'),
    minus5 = document.querySelector('.minus5-js'),
    plus6 = document.querySelector('.plus6-js'),
    minus6 = document.querySelector('.minus6-js'),
    circle111 = document.querySelector('.circle111-js'),
    circle112 = document.querySelector('.circle112-js'),
    circle121 = document.querySelector('.circle121-js'),
    circle122 = document.querySelector('.circle122-js'),
    circle131 = document.querySelector('.circle131-js'),
    circle132 = document.querySelector('.circle132-js'),
    circle141 = document.querySelector('.circle141-js'),
    circle142 = document.querySelector('.circle142-js'),
    circle211 = document.querySelector('.circle211-js'),
    circle212 = document.querySelector('.circle212-js'),
    circle221 = document.querySelector('.circle221-js'),
    circle222 = document.querySelector('.circle222-js'),
    circle231 = document.querySelector('.circle231-js'),
    circle232 = document.querySelector('.circle232-js'),
    circle311 = document.querySelector('.circle311-js'),
    circle312 = document.querySelector('.circle312-js'),
    circle321 = document.querySelector('.circle321-js'),
    circle322 = document.querySelector('.circle322-js'),
    circle331 = document.querySelector('.circle331-js'),
    circle332 = document.querySelector('.circle332-js'),
    s1 = 510,
    s2 = 400

plus11.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count11 = document.querySelector('.count11').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count111 = document.querySelector('.count11')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    minus11.style.opacity = '1'
    minus11.style.visibility = 'visible' 
    if ((count111.innerHTML = Number(count11) + 1) >= '99') { 
        plus11.style.opacity = '0'
        plus11.style.visibility = 'hidden' 
    }
})
minus11.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count11 = document.querySelector('.count11').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count111 = document.querySelector('.count11')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    if ((count111.innerHTML = Number(count11) - 1) <= '2') { 
        minus11.style.opacity = '0'
        minus11.style.visibility = 'hidden'
    }
})

plus12.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count12 = document.querySelector('.count12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count121 = document.querySelector('.count12')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    minus12.style.opacity = '1'
    minus12.style.visibility = 'visible' 
    if ((count121.innerHTML = Number(count12) + 1) >= '99') { 
        plus12.style.opacity = '0'
        plus12.style.visibility = 'hidden' 
    }
})
minus12.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count12 = document.querySelector('.count12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count121 = document.querySelector('.count12')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    if ((count121.innerHTML = Number(count12) - 1) <= '0') { 
        minus12.style.opacity = '0'
        minus12.style.visibility = 'hidden'
    }
})

plus13.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count13 = document.querySelector('.count13').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count131 = document.querySelector('.count13')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    minus13.style.opacity = '1'
    minus13.style.visibility = 'visible' 
    if ((count131.innerHTML = Number(count13) + 1) >= '99') { 
        plus13.style.opacity = '0'
        plus13.style.visibility = 'hidden' 
    }
})
minus13.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        count13 = document.querySelector('.count13').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12'),
        count131 = document.querySelector('.count13')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    if ((count131.innerHTML = Number(count13) - 1) <= '0') { 
        minus13.style.opacity = '0'
        minus13.style.visibility = 'hidden'
    }
})

plus21.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        count21 = document.querySelector('.count21').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22'),
        count211 = document.querySelector('.count21')
    price211.innerHTML = Number(price21) + s1
    price221.innerHTML = Number(price22) + s2
    minus21.style.opacity = '1'
    minus21.style.visibility = 'visible' 
    if ((count211.innerHTML = Number(count21) + 1) >= '99') { 
        plus21.style.opacity = '0'
        plus21.style.visibility = 'hidden' 
    }
})
minus21.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        count21 = document.querySelector('.count21').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22'),
        count211 = document.querySelector('.count21')
    price211.innerHTML = Number(price21) - s1
    price221.innerHTML = Number(price22) - s2
    if ((count211.innerHTML = Number(count21) - 1) <= '5') { 
        minus21.style.opacity = '0'
        minus21.style.visibility = 'hidden'
    }
})

plus22.addEventListener("click", function() {
    let price221 = document.querySelector('.price21').innerText,
        price222 = document.querySelector('.price22').innerText,
        count22 = document.querySelector('.count22').innerText,
        price2211 = document.querySelector('.price21'),
        price2221 = document.querySelector('.price22'),
        count221 = document.querySelector('.count22')
    price2211.innerHTML = Number(price221) + s1
    price2221.innerHTML = Number(price222) + s2
    minus22.style.opacity = '1'
    minus22.style.visibility = 'visible' 
    if ((count221.innerHTML = Number(count22) + 1) >= '99') { 
        plus22.style.opacity = '0'
        plus22.style.visibility = 'hidden' 
    }
})
minus22.addEventListener("click", function() {
    let price221 = document.querySelector('.price21').innerText,
        price222 = document.querySelector('.price22').innerText,
        count22 = document.querySelector('.count22').innerText,
        price2211 = document.querySelector('.price21'),
        price2221 = document.querySelector('.price22'),
        count221 = document.querySelector('.count22')
    price2211.innerHTML = Number(price221) - s1
    price2221.innerHTML = Number(price222) - s2
    if ((count221.innerHTML = Number(count22) - 1) <= '0') { 
        minus22.style.opacity = '0'
        minus22.style.visibility = 'hidden'
    }
})

plus23.addEventListener("click", function() {
    let price231 = document.querySelector('.price21').innerText,
        price232 = document.querySelector('.price22').innerText,
        count23 = document.querySelector('.count23').innerText,
        price2311 = document.querySelector('.price21'),
        price2321 = document.querySelector('.price22'),
        count231 = document.querySelector('.count23')
    price2311.innerHTML = Number(price231) + s1
    price2321.innerHTML = Number(price232) + s2
    minus23.style.opacity = '1'
    minus23.style.visibility = 'visible' 
    if ((count231.innerHTML = Number(count23) + 1) >= '99') { 
        plus23.style.opacity = '0'
        plus23.style.visibility = 'hidden' 
    }
})
minus23.addEventListener("click", function() {
    let price231 = document.querySelector('.price21').innerText,
        price232 = document.querySelector('.price22').innerText,
        count23 = document.querySelector('.count23').innerText,
        price2311 = document.querySelector('.price21'),
        price2321 = document.querySelector('.price22'),
        count231 = document.querySelector('.count23')
    price2311.innerHTML = Number(price231) - s1
    price2321.innerHTML = Number(price232) - s2
    if ((count231.innerHTML = Number(count23) - 1) <= '0') { 
        minus23.style.opacity = '0'
        minus23.style.visibility = 'hidden'
    }
})

plus31.addEventListener("click", function() {
    let price311 = document.querySelector('.price31').innerText,
        price312 = document.querySelector('.price32').innerText,
        count31 = document.querySelector('.count31').innerText,
        price3111 = document.querySelector('.price31'),
        price3121 = document.querySelector('.price32'),
        count311 = document.querySelector('.count31')
    price3111.innerHTML = Number(price311) + s1
    price3121.innerHTML = Number(price312) + s2
    minus31.style.opacity = '1'
    minus31.style.visibility = 'visible' 
    if ((count311.innerHTML = Number(count31) + 1) >= '99') { 
        plus31.style.opacity = '0'
        plus31.style.visibility = 'hidden' 
    }
})
minus31.addEventListener("click", function() {
    let price311 = document.querySelector('.price31').innerText,
        price312 = document.querySelector('.price32').innerText,
        count31 = document.querySelector('.count31').innerText,
        price3111 = document.querySelector('.price31'),
        price3121 = document.querySelector('.price32'),
        count311 = document.querySelector('.count31')
    price3111.innerHTML = Number(price311) - s1
    price3121.innerHTML = Number(price312) - s2
    if ((count311.innerHTML = Number(count31) - 1) <= '10') { 
        minus31.style.opacity = '0'
        minus31.style.visibility = 'hidden'
    }
})

plus32.addEventListener("click", function() {
    let price321 = document.querySelector('.price31').innerText,
        price322 = document.querySelector('.price32').innerText,
        count32 = document.querySelector('.count32').innerText,
        price3211 = document.querySelector('.price31'),
        price3221 = document.querySelector('.price32'),
        count321 = document.querySelector('.count32')
    price3211.innerHTML = Number(price321) + s1
    price3221.innerHTML = Number(price322) + s2
    minus32.style.opacity = '1'
    minus32.style.visibility = 'visible' 
    if ((count321.innerHTML = Number(count32) + 1) >= '99') { 
        plus32.style.opacity = '0'
        plus32.style.visibility = 'hidden' 
    }
})
minus32.addEventListener("click", function() {
    let price321 = document.querySelector('.price31').innerText,
        price322 = document.querySelector('.price32').innerText,
        count32 = document.querySelector('.count32').innerText,
        price3211 = document.querySelector('.price31'),
        price3221 = document.querySelector('.price32'),
        count321 = document.querySelector('.count32')
    price3211.innerHTML = Number(price321) - s1
    price3221.innerHTML = Number(price322) - s2
    if ((count321.innerHTML = Number(count32) - 1) <= '5') { 
        minus32.style.opacity = '0'
        minus32.style.visibility = 'hidden'
    }
})

plus33.addEventListener("click", function() {
    let price331 = document.querySelector('.price31').innerText,
        price332 = document.querySelector('.price32').innerText,
        count33 = document.querySelector('.count33').innerText,
        price3311 = document.querySelector('.price31'),
        price3321 = document.querySelector('.price32'),
        count331 = document.querySelector('.count33')
    price3311.innerHTML = Number(price331) + s1
    price3321.innerHTML = Number(price332) + s2
    minus33.style.opacity = '1'
    minus33.style.visibility = 'visible' 
    if ((count331.innerHTML = Number(count33) + 1) >= '99') { 
        plus33.style.opacity = '0'
        plus33.style.visibility = 'hidden' 
    }
})
minus33.addEventListener("click", function() {
    let price331 = document.querySelector('.price31').innerText,
        price332 = document.querySelector('.price32').innerText,
        count33 = document.querySelector('.count33').innerText,
        price3311 = document.querySelector('.price31'),
        price3321 = document.querySelector('.price32'),
        count331 = document.querySelector('.count33')
    price3311.innerHTML = Number(price331) - s1
    price3321.innerHTML = Number(price332) - s2
    if ((count331.innerHTML = Number(count33) - 1) <= '0') { 
        minus33.style.opacity = '0'
        minus33.style.visibility = 'hidden'
    }
})

plus4.addEventListener("click", function() {
    let price41 = document.querySelector('.price11').innerText,
        price42 = document.querySelector('.price12').innerText,
        gb1 = document.querySelector('.gb1').innerText,
        price411 = document.querySelector('.price11'),
        price421 = document.querySelector('.price12'),
        gb11 = document.querySelector('.gb1')
    price411.innerHTML = Number(price41) + s1
    price421.innerHTML = Number(price42) + s2
    minus4.style.opacity = '1'
    minus4.style.visibility = 'visible' 
    if ((gb11.innerHTML = parseFloat(gb1) + 1 + 'гб') >= '99.5гб') { 
        plus4.style.opacity = '0'
        plus4.style.visibility = 'hidden' 
    }
})
minus4.addEventListener("click", function() {
    let price41 = document.querySelector('.price11').innerText,
        price42 = document.querySelector('.price12').innerText,
        gb1 = document.querySelector('.gb1').innerText,
        price411 = document.querySelector('.price11'),
        price421 = document.querySelector('.price12'),
        gb11 = document.querySelector('.gb1')
    price411.innerHTML = Number(price41) - s1
    price421.innerHTML = Number(price42) - s2
    if ((gb11.innerHTML = parseFloat(gb1) - 1 + 'гб') <= '0.5гб') { 
        minus4.style.opacity = '0'
        minus4.style.visibility = 'hidden'
    }
})

plus5.addEventListener("click", function() {
    let price51 = document.querySelector('.price21').innerText,
        price52 = document.querySelector('.price22').innerText,
        gb2 = document.querySelector('.gb2').innerText,
        price511 = document.querySelector('.price21'),
        price521 = document.querySelector('.price22'),
        gb21 = document.querySelector('.gb2')
    price511.innerHTML = Number(price51) + s1
    price521.innerHTML = Number(price52) + s2
    minus5.style.opacity = '1'
    minus5.style.visibility = 'visible' 
    if ((gb21.innerHTML = parseFloat(gb2) + 1 + 'гб') >= '99гб') { 
        plus5.style.opacity = '0'
        plus5.style.visibility = 'hidden' 
    }
})
minus5.addEventListener("click", function() {
    let price51 = document.querySelector('.price21').innerText,
        price52 = document.querySelector('.price22').innerText,
        gb2 = document.querySelector('.gb2').innerText,
        price511 = document.querySelector('.price21'),
        price521 = document.querySelector('.price22'),
        gb21 = document.querySelector('.gb2')
    price511.innerHTML = Number(price51) - s1
    price521.innerHTML = Number(price52) - s2
    if ((gb21.innerHTML = parseFloat(gb2) - 1 + 'гб') <= '2гб') { 
        minus5.style.opacity = '0'
        minus5.style.visibility = 'hidden'
    }
})

plus6.addEventListener("click", function() {
    let price61 = document.querySelector('.price31').innerText,
        price62 = document.querySelector('.price32').innerText,
        gb3 = document.querySelector('.gb3').innerText,
        price611 = document.querySelector('.price31'),
        price621 = document.querySelector('.price32'),
        gb31 = document.querySelector('.gb3')
    price611.innerHTML = Number(price61) + s1
    price621.innerHTML = Number(price62) + s2
    minus6.style.opacity = '1'
    minus6.style.visibility = 'visible' 
    if ((gb31.innerHTML = parseFloat(gb3) + 1 + 'гб') >= '99гб') { 
        plus6.style.opacity = '0'
        plus6.style.visibility = 'hidden' 
    }
})
minus6.addEventListener("click", function() {
    let price61 = document.querySelector('.price31').innerText,
        price62 = document.querySelector('.price32').innerText,
        gb3 = document.querySelector('.gb3').innerText,
        price611 = document.querySelector('.price31'),
        price621 = document.querySelector('.price32'),
        gb31 = document.querySelector('.gb3')
    price611.innerHTML = Number(price61) - s1
    price621.innerHTML = Number(price62) - s2
    if ((gb31.innerHTML = parseFloat(gb3) - 1 + 'гб') <= '10гб') { 
        minus6.style.opacity = '0'
        minus6.style.visibility = 'hidden'
    }
})

circle111.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    circle112.style.display = 'block'
    circle112.style.opacity = '1'
    circle111.style.display = 'none'
})
circle112.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    circle112.style.display = 'none'
    circle112.style.opacity = '0.5'
    circle111.style.display = 'block'
})

circle121.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    circle122.style.display = 'block'
    circle122.style.opacity = '1'
    circle121.style.display = 'none'
})
circle122.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    circle122.style.display = 'none'
    circle122.style.opacity = '0.5'
    circle121.style.display = 'block'
})

circle131.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    circle132.style.display = 'block'
    circle132.style.opacity = '1'
    circle131.style.display = 'none'
})
circle132.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    circle132.style.display = 'none'
    circle132.style.opacity = '0.5'
    circle131.style.display = 'block'
})

circle141.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) + s1
    price121.innerHTML = Number(price12) + s2
    circle142.style.display = 'block'
    circle142.style.opacity = '1'
    circle141.style.display = 'none'
})
circle142.addEventListener("click", function() {
    let price11 = document.querySelector('.price11').innerText,
        price12 = document.querySelector('.price12').innerText,
        price111 = document.querySelector('.price11'),
        price121 = document.querySelector('.price12')
    price111.innerHTML = Number(price11) - s1
    price121.innerHTML = Number(price12) - s2
    circle142.style.display = 'none'
    circle142.style.opacity = '0.5'
    circle141.style.display = 'block'
})

circle211.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) + s1
    price221.innerHTML = Number(price22) + s2
    circle212.style.display = 'block'
    circle212.style.opacity = '1'
    circle211.style.display = 'none'
})
circle212.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) - s1
    price221.innerHTML = Number(price22) - s2
    circle212.style.display = 'none'
    circle212.style.opacity = '0.5'
    circle211.style.display = 'block'
})

circle221.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) + s1
    price221.innerHTML = Number(price22) + s2
    circle222.style.display = 'block'
    circle222.style.opacity = '1'
    circle221.style.display = 'none'
})
circle222.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) - s1
    price221.innerHTML = Number(price22) - s2
    circle222.style.display = 'none'
    circle222.style.opacity = '0.5'
    circle221.style.display = 'block'
})

circle231.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) + s1
    price221.innerHTML = Number(price22) + s2
    circle232.style.display = 'block'
    circle232.style.opacity = '1'
    circle231.style.display = 'none'
})
circle232.addEventListener("click", function() {
    let price21 = document.querySelector('.price21').innerText,
        price22 = document.querySelector('.price22').innerText,
        price211 = document.querySelector('.price21'),
        price221 = document.querySelector('.price22')
    price211.innerHTML = Number(price21) - s1
    price221.innerHTML = Number(price22) - s2
    circle232.style.display = 'none'
    circle232.style.opacity = '0.5'
    circle231.style.display = 'block'
})

circle311.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) + s1
    price321.innerHTML = Number(price32) + s2
    circle312.style.display = 'block'
    circle312.style.opacity = '1'
    circle311.style.display = 'none'
})
circle312.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) - s1
    price321.innerHTML = Number(price32) - s2
    circle312.style.display = 'none'
    circle312.style.opacity = '0.5'
    circle311.style.display = 'block'
})

circle321.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) + s1
    price321.innerHTML = Number(price32) + s2
    circle322.style.display = 'block'
    circle322.style.opacity = '1'
    circle321.style.display = 'none'
})
circle322.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) - s1
    price321.innerHTML = Number(price32) - s2
    circle322.style.display = 'none'
    circle322.style.opacity = '0.5'
    circle321.style.display = 'block'
})

circle331.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) + s1
    price321.innerHTML = Number(price32) + s2
    circle332.style.display = 'block'
    circle332.style.opacity = '1'
    circle331.style.display = 'none'
})
circle332.addEventListener("click", function() {
    let price31 = document.querySelector('.price31').innerText,
        price32 = document.querySelector('.price32').innerText,
        price311 = document.querySelector('.price31'),
        price321 = document.querySelector('.price32')
    price311.innerHTML = Number(price31) - s1
    price321.innerHTML = Number(price32) - s2
    circle332.style.display = 'none'
    circle332.style.opacity = '0.5'
    circle331.style.display = 'block'
})