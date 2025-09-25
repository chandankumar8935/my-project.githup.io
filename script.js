// Dynamic events (for events.html)
const events = [
    { date: "2025-09-25", event: "Annual Sports Day" },
    { date: "2025-10-01", event: "Science Fair" },
    { date: "2025-10-15", event: "Parent-Teacher Meeting" }
];

const eventList = document.getElementById('event-list');
if(eventList){
    events.forEach(ev => {
        const li = document.createElement('li');
        li.textContent = `${ev.date} - ${ev.event}`;
        eventList.appendChild(li);
    });
}

// Contact form alert
const form = document.getElementById('contact-form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Message sent successfully!');
    });
}

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('header nav ul').classList.toggle('active');
});
