const data = {
    jamie:  ["TEJ4M1", "NBE3U5", "BTA3OO", "Break", "MHF4U5", "ICS4U1", "SPH3U5", "TTJ3C1", "Break", "SCH3U5"],
    zach:   ["MCR3U5", "BAF3M1", "NBE3U5", "EMS3OO", "Break", "BAT4M1", "AMI3M1", "FSF4U1", "Break", "MHF4U5"],
    miles:  ["ICS4U1", "SBI3U5", "BAF3MO", "Break", "SCH3U5", "AMS3MD", "MHF4U5", "SPH3U5", "Break", "NBE3U5"],
    chris:  ["SCH4U1", "NBE3U5", "SPH4U1", "Break", "MHF4U5", "MCV4U5", "HFA4U1", "ENG4U5", "Break", "SBI4U1"],
    ahana:  ["SBI4UP", "MHF4UP", "SCH4UP", "ICS3UO", "Break", "SPH3U5", "MCV4UP", "COP3O8", "COP3O8", "Break"],
    jude:   ["ICS3U1", "MHF4UP", "NBE3U5", "Break", "AMS3ME", "SBI3U5", "SPH3U5", "MCV4UP", "Break", "SCH3U5"],
    kendall:["CLU3M1", "NBE3U5", "SCH4UP", "IDC4U1", "Break", "SBI3U5", "SPH3U5", "MCR3U5", "PAF3O1", "Break"],
    jenny:  ["SCH4U1", "MHF4UP", "BMI3C1", "Break", "TEJ3M1", "BAT4M1", "SPH3U5", "MCV4UP", "Break", "BOH4M1"],
    neel:   ["TTJ3C1", "ICS4U1", "NBE3U5", "Break", "SCH3U5", "TEJ3M1", "MHF4U5", "SPH3U5", "Break", "Break"],
    izzy:   ["MCR3U5", "SPH3U5", "NBE3U5", "Break", "TWJ3E1", "AVI3M1", "MHF4U5", "SBI3U5", "Break", "SCH3U5"],
    noahj:  ["MCR3U5", "BAF3M1", "SBI3U5", "Break", "SCH3U5", "HFC3M1", "SPH3U5", "AMM3MO", "Break", "NBE3U5"],
    amia:   ["SBI4UP", "MHF4UP", "FSF3U1", "Break", "SCH3U5", "SPH3U1", "CHA3UO", "MCV4UP", "Break", "NBE3U5"],
};

const courses = {
    "Break": "Break",
    "TEJ4M1": "Computer Engineering",
    "NBE3U5": "English - Indigenous Voices",
    "BTA3OO": "ICT (Online)",
    "MHF4U5": "Advanced Functions",
    "ICS4U1": "Computer Science",
    "SPH3U5": "Physics",
    "TTJ3C1": "Transportation Technology",
    "SCH3U5": "Chemistry",
    "MCR3U5": "Functions",
    "BAF3M1": "Financial Accounting",
    "EMS3OO": "Media Studies (Online)",
    "BAT4M1": "Business Leadership",
    "AMI3M1": "Instrumental Music",
    "FSF4U1": "French",
    "AMS3MD": "Media Studies",
    "SBI3U5": "Biology",
    "ENG4U5": "English",
    "HFA4U1": "Nutrition and Health",
    "MCV4U5": "Calculus and Vectors",
    "SBI4U1": "Biology",
    "SCH4U1": "Chemistry",
    "SPH4U1": "Physics",
    "IDC4U1": "Interdisciplinary Studies",
    "TWJ3E1": "Custom Woodworking",
    "AVI3M1": "Visual Arts",
    "HFC3M1": "Food and Culture",
    "AMM3MO": "Music & Computers (Online)",
    "CHA3UO": "Canadian History (Online)",
    "CHA3U": "Canadian History",
    "FSF3U1": "French",
    "TEJ3M1": "Computer Engineering",
    "BMI3C1": "Marketing",
    "BOH4M1": "Business Management",
    "CLU3M1": "Law"
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

    const mainWindow = document.querySelector('.mainWindow');
    const toggleDiv = document.createElement('div');
    toggleDiv.style.position = 'absolute';
    toggleDiv.style.top = '2vh';
    toggleDiv.style.right = '2vh';
    toggleDiv.style.zIndex = '30';
    toggleDiv.innerHTML = `
        <label style="display:flex;align-items:center;gap:0.5em;cursor:pointer;font-size:2vh;">
            <input type="checkbox" id="bgAnimToggle" style="width:2vh;height:2vh;"> Background Animation (ik this is ugly it was a quick patch)
        </label>
    `;
    mainWindow.appendChild(toggleDiv);

    const bgAnimToggle = document.getElementById('bgAnimToggle');

    function setBgAnimation(on) {
        if (on) {
            document.documentElement.classList.remove('bg-static');
        } else {
            document.documentElement.classList.add('bg-static');
        }
    }

    setBgAnimation(false);

    bgAnimToggle.addEventListener('change', (e) => {
        setBgAnimation(e.target.checked);
    });

    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.matches('.courses-list li')) {
            if (e.target.dataset.code) {
                e.target.textContent = e.target.dataset.code;
            }
        }
    });
    document.addEventListener('mouseout', function(e) {
        if (e.target && e.target.matches('.courses-list li')) {
            if (e.target.dataset.name) {
                e.target.textContent = e.target.dataset.name;
            }
        }
    });
});