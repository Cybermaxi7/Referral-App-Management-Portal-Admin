document.getElementById('activity-tab').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('chats-tab').classList.remove('active');
});

document.getElementById('chats-tab').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('activity-tab').classList.remove('active');
});
