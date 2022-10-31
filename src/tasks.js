import './style.css';

function tasks() {

    // reset content
    const content = document.getElementById('content');
    content.innerHTML = '';
        
    // add header
    const header = document.getElementById('header');
    header.innerText = 'Tasks';
};

export default tasks;

