const data = {
    pikachu:    ["ENG3U","MCR3U","SPH3U","ICS3U","SCH3U","ADA3M","CGG3O","PPZ3C"],
    charizard:  ["ENG3U","MCV4U","SCH3U","ICS3U","SBI3U","ASM3M","CGG3O","AWQ3M"],
    bulbasaur:  ["SBI3U","MCR3U","ENG4U","HZT4U","ICS3U","SCH4U","AVI3M","ADA3M"],
    gengar:     ["ENG3U","SPH3U","MCV4U","SCH3U","HZT4U","AWQ3M","ASM3M","ICS3U"],
    eevee:      ["ENG3C","MAP4C","AVI3M","ASM3M","BDI3C","IDC4U","CLU3M","SCH3U"],
    lucario:    ["MCV4U","SPH4U","ENG4U","ICS4U","SCH4U","HZT4U","AVI4M","ADA3M"],
    mimikyu:    ["ENG4U","HZT4U","AVI4M","SCH4U","MCV4U","SPH4U","ICS4U","ADA3M"],
    garchomp:   ["SCH3U","ENG3U","SPH3U","ICS3U","ADA3M","MCR3U","PPZ3C","CGG3O"],
    snorlax:    ["SNC2D","CHC2D","ENG2D","MPM2D","AVI2O","BTT2O","ASM2O","ICS2O"],
    greninja:   ["MHF4U","MCV4U","ENG4U","SPH4U","ICS4U","HZT4U","AVI4M","SBI3U"]
};

function populateDropdown(select, names) {
    select.innerHTML = '';
    for (const name of names) {
        if (!name) continue;
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    }
}

function showCourses(name, courses, listElem) {
    listElem.innerHTML = '';
    for (const course of courses) {
        const li = document.createElement('li');
        li.textContent = course;
        listElem.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const names = Object.keys(data).filter(Boolean);
    const name1Sel = document.getElementById('name1');
    const name2Sel = document.getElementById('name2');
    const courses1 = document.getElementById('courses1');
    const courses2 = document.getElementById('courses2');

    populateDropdown(name1Sel, names);
    populateDropdown(name2Sel, names);

    function updateCourses() {
        const n1 = name1Sel.value;
        const n2 = name2Sel.value;
        showCourses(n1, data[n1], courses1);
        showCourses(n2, data[n2], courses2);
    }

    name1Sel.addEventListener('change', updateCourses);
    name2Sel.addEventListener('change', updateCourses);

    name1Sel.selectedIndex = 0;
    name2Sel.selectedIndex = names.length > 1 ? 1 : 0;
    updateCourses();
});