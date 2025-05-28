const data = {
    pikachu:    ["ENG3U", "MCR3U", "Break", "SPH3U", "ICS3U", "SCH3U", "ADA3M", "CGG3O", "PPZ3C", "Break"],
    charizard:  ["ENG3U", "MCV4U", "SCH3U", "Break", "SBI3U", "AMM3M0", "CGG3O", "AWQ3M", "PPZ3C", "Break"],
    bulbasaur:  ["SBI3U", "MCR3U", "ENG4U", "HZT4U", "Break", "ICS3U", "SCH4U", "AVI3M", "BAF3M0", "Break"],
    gengar:     ["ENG3U", "SPH3U", "MCV4U", "Break", "HZT4U", "AWQ3M", "ASM3M", "ICS3U", "SCH3U", "Break"],
    eevee:      ["ENG3C", "Break", "MAP4C", "ASM3M", "AVI3M", "BDI3C", "IDC4U", "CLU3M", "SCH3U", "Break"],
    lucario:    ["MCV4U", "SPH4U", "ENG4U", "Break", "ICS4U", "SCH4U", "HZT4U", "AVI4M", "ADA3M", "Break"],
    mimikyu:    ["ENG4U", "HZT4U", "Break", "AVI4M", "SCH4U", "MCV4U", "SPH4U", "ICS4U", "AMM3M0", "Break"],
    garchomp:   ["SCH3U", "ENG3U", "SPH3U", "Break", "ADA3M", "MCR3U", "PPZ3C", "CGG3O", "Break", "ICS3U"],
    snorlax:    ["SNC2D", "CHC2D", "ENG2D", "Break", "MPM2D", "AVI2O", "BTT2O", "ASM2O", "ICS2O", "Break"],
    greninja:   ["MHF4U", "MCV4U", "ENG4U", "SPH4U", "Break", "ICS4U", "HZT4U", "AVI4M", "SBI3U", "Break"]
};

const courses = {
    "Break": "Break",
    "ENG3U": "English",
    "MCR3U": "Functions",
    "SPH3U": "Physics",
    "ICS3U": "Computer Science",
    "SCH3U": "Chemistry",
    "ADA3M": "Computer Programming",
    "CGG3O": "Geography",
    "PPZ3C": "Health for Life",
    "MCV4U": "Calculus and Vectors",
    "SBI3U": "Biology",
    "AWQ3M": "Photography",
    "ASM3M": "Media Arts",
    "HZT4U": "Philosophy",
    "SCH4U": "Chemistry",
    "AVI3M": "Visual Arts",
    "ICS4U": "Computer Science",
    "SPH4U": "Physics",
    "ENG4U": "English",
    "MAP4C": "Mathematics",
    "BDI3C": "Entrepreneurship",
    "IDC4U": "Interdisciplinary Studies",
    "CLU3M": "Law",
    "AVI4M": "Visual Arts",
    "SNC2D": "Science",
    "CHC2D": "Canadian History",
    "ENG2D": "English",
    "MPM2D": "Mathematics",
    "AVI2O": "Visual Arts",
    "BTT2O": "Information Technology",
    "ASM2O": "Media Arts",
    "ICS2O": "Computer Science",
    "BTA3O0": "ICT (Online)",
    "AMM3M0": "Music and Computers (Online)",
    "BAF3M0": "Financial Accounting (Online)"
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

function isOnlineCourse(code) {
    return code && code.toLowerCase().includes('online');
}

function showCourses(name, courseCodes, listElem, compareCodes) {
    listElem.innerHTML = '';
    // Split into two semesters: first five and last five
    const semesters = [courseCodes.slice(0, 5), courseCodes.slice(5, 10)];
    semesters.forEach((semester, idx) => {
        const ul = document.createElement('ul');
        ul.className = 'courses-list semester-list';
        for (let i = 0; i < semester.length; i++) {
            const code = semester[i];
            const li = document.createElement('li');
            const courseName = courses[code] || code;
            li.textContent = courseName;
            if (compareCodes && compareCodes[idx * 5 + i]) {
                const compareCode = compareCodes[idx * 5 + i];
                const isBreak = code === 'Break' || compareCode === 'Break';
                const isOnline = isOnlineCourse(courses[code]) || isOnlineCourse(courses[compareCode]);
                if (
                    code === compareCode ||
                    (isBreak && isOnline) ||
                    (isOnlineCourse(courses[code]) && isOnlineCourse(courses[compareCode]))
                ) {
                    li.classList.add('match-course');
                }
            }
            if (courseName.length > 22) {
                li.classList.add('long-text');
            }
            li.dataset.code = code;
            li.dataset.name = courseName;
            li.addEventListener('mouseenter', function() {
                li.textContent = code;
            });
            li.addEventListener('mouseleave', function() {
                li.textContent = courseName;
            });
            ul.appendChild(li);
        }
        listElem.appendChild(ul);
    });
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
        showCourses(n1, data[n1], courses1, data[n2]);
        showCourses(n2, data[n2], courses2, data[n1]);
    }

    name1Sel.addEventListener('change', updateCourses);
    name2Sel.addEventListener('change', updateCourses);

    name1Sel.selectedIndex = 0;
    name2Sel.selectedIndex = names.length > 1 ? 1 : 0;
    updateCourses();
});