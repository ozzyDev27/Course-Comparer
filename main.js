const data = {
    jamie:  ["TEJ4M1", "NBE3U5", "BTA3OO", "Break", "MHF4U5", "ICS4U1", "SPH3U5", "TTJ3C1", "Break", "SCH3U5"],
    ahana:  ["SBI4UP", "MHF4UP", "SCH4UP", "ICS3UO", "Break", "Break", "SPH3U5", "MCV4UP", "COP3O8", "COP3O8"],
    zach:   ["MCR3U5", "BAF3M1", "NBE3U5", "EMS3OO", "Break", "BAT4M1", "AMI3M1", "FSF4U1", "Break", "MHF4U5"],
    miles:  ["Break","ICS4U1", "SBI3U5",  "Break", "SCH3U5", "AMS3MD", "MHF4U5", "SPH3U5", "Break", "NBE3U5"],
    chris:  ["SCH4U1", "NBE3U5", "SPH4U1", "Break", "MHF4U5", "MCV4U5", "HFA4U1", "ENG4U5", "Break", "SBI4U1"],
    jude:   ["ICS3U1", "MHF4UP", "NBE3U5", "Break", "AMS3ME", "SBI3U5", "SPH3U5", "MCV4UP", "Break", "SCH3U5"],
    kendall:["CLU3M1", "NBE3U5", "SCH4UP", "IDC4U1", "Break", "SBI3U5", "SPH3U5", "MCR3U5", "PAF3O1", "Break"],
    jenny:  ["SCH4U1", "MHF4UP", "BMI3C1", "Break", "TEJ3M1", "BAT4M1", "SPH3U5", "MCV4UP", "Break", "BOH4M1"],
    neel:   ["TTJ3C1", "ICS4U1", "NBE3U5", "Break", "SCH3U5", "TEJ3M1", "MHF4U5", "SPH3U5", "Break", "Break"],
    izzy:   ["MCR3U5", "SPH3U5", "NBE3U5", "Break", "TWJ3E1", "AVI3M1", "MHF4U5", "SBI3U5", "Break", "SCH3U5"],
    noahj:  ["MCR3U5", "BAF3M1", "SBI3U5", "Break", "SCH3U5", "HFC3M1", "SPH3U5", "AMM3MO", "Break", "NBE3U5"],
    amia:   ["SBI4UP", "MHF4UP", "FSF3U1", "Break", "SCH3U5", "SPH3U1", "CHA3UO", "MCV4UP", "Break", "NBE3U5"],
    alanw:  ["MCV4U1", "SPH4U1", "IDC4U1", "Break", "AMS4ME", "ENG4U1", "SCH4U1", "SBI4U1", "Break", "MDM4U1"],
    shada:  ["TGV3M1", "HFA4UO", "SBI3U1", "Break", "MCR3U5", "NBE3U1", "SBI4U1", "PLF4M1", "Break", "SPH3U1"],
    maya:   ["ICS3U1", "NBE3U5", "SBI3U5", "Break", "MHF4U5", "HSP3U1", "SPH3U5", "FSF4U1", "Break", "SCH3U5"],
    rishin: ["ENG4U5", "PSK4U1", "MDM4U1", "Break", "BBB4M1", "MCV4U5", "SBI4U1", "SPH4U1", "Break", "HSB4U1"],
    rosie:  ["MCR3U5", "SPH3U5", "FSF3U1", "Break", "ICS4UP", "AVI3M1", "MHF4U5", "ASM3M1", "Break", "CHW3MO"],
    danielx:["SBI3U5", "MHF4UP", "NBE3U5", "Break", "ICS4UP", "TEJ3M1", "SCH3U5", "MCV4UP", "Break", "BAF3M1"],
    alan:   ["SBI3U5", "MHF4UP", "CHA3U1", "Break", "ICS4UP", "SCH3U1", "FSF3U1", "MCV4UP", "Break", "NBE3U5"],
    daniell:["SBI3U5", "MHF4UP", "SCH4UP", "Break", "NBE3U1", "SCH3U1", "AMI4M1", "MCV4UP", "Break", "ICU3U1"],
    jeremy:  ["ICU3U1", "MHF4UP", "CHA3U1", "Break", "SCH3U5", "BAT4M1", "FSF3U1", "MCV4UP", "Break", "NBE3U5"],
};
names = {
    noahj: "Noah J.",
    daniell: "Daniel L.",
    danielx: "Daniel X.",
}
const courses = {
    "Break": "Break",
    "TEJ4M1": "Computer Engineering",
    "TEJ3M1": "Computer Engineering",
    "TTJ3C1": "Auto Tech",
    "ICS4U1": "Computer Science",
    "ICS3U1": "Computer Science",
    "ICS3UO": "Computer Science (Online)",
    "BTA3OO": "Business Technology (Online)",
    "SCH4U1": "Chemistry",
    "SCH4UP": "Chemistry",
    "SCH3U5": "Chemistry",
    "SBI4UP": "Biology",
    "SBI4U1": "Biology",
    "SBI3U5": "Biology",
    "SBI3U1": "Biology",
    "SPH4U1": "Physics",
    "SPH3U5": "Physics",
    "SPH3U1": "Physics",
    "MHF4U5": "Advanced Functions",
    "MHF4UP": "Advanced Functions",
    "MCV4U5": "Calculus and Vectors",
    "MCV4UP": "Calculus and Vectors",
    "MCR3U5": "Functions",
    "ENG4U5": "English",
    "NBE3U5": "English",
    "FSF4U1": "French",
    "FSF3U1": "French",
    "BAT4M1": "Accounting",
    "BOH4M1": "Business Management",
    "BAF3M1": "Financial Accounting",
    "BAF3MO": "Financial Accounting (Online)",
    "AMS3MD": "Intermediate Strings",
    "AMS3ME": "Intermediate Strings",
    "BMI3C1": "Marketing",
    "IDC4U1": "Health Psychology",
    "CLU3M1": "Law",
    "TWJ3E1": "Custom Woodworking",
    "AVI3M1": "Visual Arts",
    "HFA4U1": "Nutrition and Health",
    "HFC3M1": "Food and Culture",
    "AMM3MO": "Music & Computers (Online)",
    "CHA3UO": "Canadian History (Online)",
    "COP3O8": "Co-Op",
    "PAF301": "Personal Fitness",
    "SPH3U1": "Physics",
    "MCV4U1": "Calculus and Vectors",
    "MDM4U1": "Data Management",
    "SCH4U1": "Chemistry",
    "AMS4ME": "Advanced Strings",
    "ENG4U1": "English",
    "SHC4U1": "World Religions",
    "EMS3OO": "Media Studies (Online)",
    "AMI3M1": "Music",
    "AMI4M1": "Music",
    
};


function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function populateDropdown(select, nameList) {
    select.innerHTML = '';
    for (const name of nameList) {
        if (!name) continue;
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = names[name] || capitalize(name);
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